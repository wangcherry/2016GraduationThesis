/**
*author wangying
*2016/04/05
**/
var Quagga = require('Quagga');

$(function() {
    var App = {
        init : function() {
            var self = this;
            Quagga.init(this.state, function(err) {
                if (err) {
                    return self.handleError(err);
                }
                $("span.js-code").html('');
                App.attachListeners();
                Quagga.start();
            });
        },
        handleError: function(err) {
            console.log(err);
        },
        attachListeners: function() {
            var self = this;
            $(".js-controls").on("click", "button.js-stop", App.stopHandler);
        },
        stopHandler: function(e) {
            e.preventDefault();
            Quagga.stop();
            $("span.js-code").html('');
            $("#interactive").hide();
        },
        state: {
            inputStream: {
                type : "LiveStream",
                constraints: {
                    width: 640,
                    height: 480,
                    facing: "environment"
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 4,
            decoder: {
                readers : ["ean_reader"]
            },
            locate: true
        },
        lastResult : null
    };

    //点击扫一扫处理函数
    $(".js-controls").on("click", "button.js-start", startHandler);
    function startHandler(e) {
        App.init();
        $('#interactive').show();
    };

    //扫描进程处理函数
    Quagga.onProcessed(function(result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
            }
        }
    });

    //扫描成功后处理函数
    Quagga.onDetected(function(result) {
        var code = result.codeResult.code;

        if (App.lastResult !== code) {
            App.lastResult = code;
            //此处注释暂时不可删除
            // var $node = null, canvas = Quagga.canvas.dom.image;
            // $node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
            // $node.find("img").attr("src", canvas.toDataURL());
            // $node.find("h4.code").html(code);
            // $(".js-result-strip ul.thumbnails").prepend($node);
            $("span.js-code").html(code);
            scanSucceed(code);
        }
    });

    var scanFlag = true;   //true代表处于扫药单状态
    var testFlag = false;   //false代表药单没有通过验证
    var drugNum,prescNum;
    var prescInfo = $('.js-presc-info');
    var druInfoTable = $('.js-drug-info-table');
    var searchDrugTable = $('.js-search-drug-table');
    var searchDrug = $('#searchDrug');

    /* 获取url参数 */
    function getQueryString(e) {
        var t = new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i");
        var paramStr = window.location.hash || window.location.search;
        var n = paramStr.substr(1).match(t);
        if( n != null) {
            return unescape( n[2] );
        }
        return "";
    };
    //获取用户名
    function getUsername() {
        var username =  getQueryString('username');
        if(username == ''){
            alert('您还未登录，请先登录！');
            window.location.href = 'login.html';
        }else{
            $('.js-username').html(username);
        }
    };
    getUsername();

scanSucceed();
    //扫描成功后操作
    function scanSucceed(prescCode){
        var prescCode = '6937748304647';
        if(scanFlag){  //此时是扫描药单
            $.ajax({
               type: 'post',
               url: '/checkdrug/check/checkdrugList.do?checkdrug_id='+prescCode,
               data: {},
               success: function(data){
                   scanPrescHandler(data,prescCode);
               },
               error: function() {
                  alert("请求异常！");
                }
            });
            scanFlag = !scanFlag;
            prescInfo.show();
        }else{  //此时是扫描药品
            alert("验证药品");
        }
    };
    function scanPrescHandler(data,prescCode){
        var prescData = JSON.parse(data);
        var tr = '';
        $('.js-u-name').html(prescData.userInfo.u_name);
        $('.js-u-sex').html(prescData.userInfo.u_sex);
        $('.js-u-age').html(prescData.userInfo.u_age);
        $('.js-u-presc').html(prescCode);
        $('.js-doctors-name').html(prescData.doctorInfo.doctors_name);
        $('.js-doctors-sex').html(prescData.doctorInfo.doctors_sex);
        $('.js-doctors-departments').html(prescData.doctorInfo.doctors_departments);
        prescNum = prescData.checkdrugInfo.length;
        for(var i = 0 ; i < prescNum ; i++){
            tr += "<tr><td>"+prescData.checkdrugInfo[i].d_name+"</td><td>"+prescData.checkdrugInfo[i].d_id+"</td><td>"+prescData.checkdrugInfo[i].d_specification+"</td><td>"+prescData.checkdrugInfo[i].checkdrug_num+"</td><td>"+prescData.checkdrugInfo[i].d_manufacturer+"</td><td><a href='javascript:void(0);' class='js-pass'>"+"通过"+"</a> <a href='javascript:void(0);' class='js-search' data-toggle='modal' data-target='#myModal'>"+"查询"+"</a></td><tr>";
        };
        druInfoTable.append(tr);
    }

    //查询药品输入框聚焦
    searchDrug.focus(function(){
        searchDrug.val('');
    });

    //查询药品操作
    function searchDrugHandler(){
        var searchDrugName = searchDrug.val();
        if(searchDrugName == ''){
            searchDrug.focus();
            return;
        }else{
            searchDrugTable.find('tr td').parent().html('');
            $.ajax({
               type: 'post',
               url: '/checkdrug/check/findDrugBlurry.do?d_name='+searchDrugName,
               data: {},
               success: function(data){
                   successHandler(data);
               },
               error: function() {
                   alert("请求异常！");
                }
            });
        };
    };
    //成功返回数据 处理函数
    function successHandler(data){
        var drugData = JSON.parse(data);
        var tr = '';
        drugNum = drugData.length;
        $('.js-total').html(drugNum);
        for(var i = 0 ; i < drugNum ; i++){
            tr += '<tr><td>'+drugData[i].d_name+'</td><td>'+drugData[i].d_id+'</td><td>'+drugData[i].d_specification+'</td><td>'+drugData[i].d_num+'</td><td>'+drugData[i].d_manufacturer+'</td><td>'+drugData[i].d_coordinate+'</td><td>'+drugData[i].date+'</td><tr>';
        };
        searchDrugTable.append(tr);
    };

    //验证结果显示函数
    function testResultTip(){
        var testResultFalg = druInfoTable.find('td').length;
        var testResult = $('.js-test-result')
        if(testResultFalg != 0){
            testResult.html('还有药品未通过验证，暂时不可发药！');
        }else{
            testResult.html('药品验证通过，可发药！');
            testFlag = !testFlag;
        }
    };

    //返回验证结果函数
    function testResultHandler(testResult){
        $.ajax({
            type: 'post',
            url: '/checkdrug/check/returnCheck.do?result='+testResult,
            data: {},
            success:function(){
                alert("后台已更新！");
                window.location.reload();
            },
           error: function() {
               alert("请求异常！");
            }
        })
    };

    //药单药品分页
    $("#paging1").sharkPager({
        totalPages: prescNum,
        page: 1,
        lg : 'zh_CN',
        segmentSize : 3,
        callback: function(p) {
            console.log(p);
        }
    });

    //查询药品分页
    $("#paging2").sharkPager({
        totalPages: drugNum,
        page: 1,
        lg : 'zh_CN',
        segmentSize : 5,
        callback: function(p) {
            console.log(p);
        }
    });

    // 点击 通过 响应事件
    druInfoTable.on("click", ".js-pass", function(e) {
        if (confirm("确定通过此药品的验证吗？")) {
            $(this).parent().parent().html('');
            testResultTip();
        }
        else {
            return false;
        }
    });

    // 点击 查询 响应事件
    druInfoTable.on("click", ".js-search", function(e) {
        var searchDrugName = $(this).parent().siblings().eq(0).html();
        searchDrug.val(searchDrugName);
        searchDrugHandler();
    });
    // 点击 查询 响应事件
    $("#myModal").on("click", ".js-search-drug",searchDrugHandler);

    // 验证结果 响应事件
    $(".js-result-btn").on("click", function(e) {
        if(testFlag){
            alert('此药单通过了验证，请发药！');
            testResultHandler(testFlag);
        }else{
            if(confirm("此药单没有通过验证，确定发送药单验证结果？")){
                alert('此药单没有通过验证，请勿发药！');
                testResultHandler(testFlag);
            }else{
                return;
            }
        };
    });
});