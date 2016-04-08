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
            // $(".js-result_strip ul.thumbnails").prepend($node);
            $("span.js-code").html(code);
            scanSucceed(code);
        }
    });

    var flag = true;   //true代表处于扫药单状态

    //扫描成功后操作
    function scanSucceed(presc_code){
        if(flag){
            $.ajax({
               type: 'post',
               url: 'http://222.24.63.100:9149/checkdrug/check/checkdrugList.do?checkdrug_id='+presc_code,
               data: {},
               success: function(data){
                 alert( "Data Saved: " + data );
               },
               error: function() {
                  alert("请求异常！");
                }
            });
            alert(presc_code);
            flag = !flag;
        }else{
            alert("验证药品");
        }
    };

    //查询药品
    function searchDrug(drug_code){
        $.ajax({
           type: 'post',
           url: 'http://222.24.63.100:9149/checkdrug/check/findDrugBlurry.do?d_name='+drug_code,
           data: {},
           success: function(data){
             alert( "Data Saved: " + data );
           },
           error: function() {
              alert("请求异常！");
            }
        });
        alert(drug_code);
    };

    //药单药品分页
    $("#paging1").sharkPager({
        totalPages: 20,
        page: 1,
        lg : 'zh_CN',
        segmentSize : 3,
        callback: function(p) {
            console.log(p);
        }
    });

    //查询药品分页
    $("#paging2").sharkPager({
        totalPages: 20,
        page: 1,
        lg : 'zh_CN',
        segmentSize : 5,
        callback: function(p) {
            console.log(p);
        }
    });

    // 点击 通过 响应事件
    $(".js-drug-info").on("click", ".js-pass", function(e) {
        if (confirm("确定通过此药品的验证吗？")) {
            alert("已确定通过！");
        }
        else {
            return false;
        }
    });

    // 点击 查询 响应事件
    $(".js-drug-info").on("click", ".js-search", function(e) {
        var searchDrugName = 'aaa';
        searchDrug(searchDrugName);
    });
    // 点击 查询 响应事件
    $(".myModal").on("click", ".js-search-drug", function(e) {
        var searchDrugName = $('#searchDrug').val();
        searchDrug(searchDrugName);
    });

    // 点击 验证成功 响应事件
    $(".js-result-btn").on("click", ".js-succeed", function(e) {
        if (confirm("确定验证此药单成功吗？")) {
            alert("已确定成功！");
            window.location.reload()
        }
        else {
            return false;
        }
    });

    // 点击 验证成功 响应事件
    $(".js-result-btn").on("click", ".js-fail", function(e) {
        if (confirm("确定验证此药单失败吗？")) {
            alert("已确定失败！");
            window.location.reload()
        }
        else {
            return false;
        }
    });
});