/**
*author wangying
*2016/04/05
**/
toastr.options = {
                  "positionClass": "toast-top-center"
                };
$(function() {

    var scanFlag = true;   //true代表处于扫药单状态
    var testFlag = false;   //false代表药单没有通过验证
    var tr1 = [], tr2 = []; //用于分页的数据显示
    var prescNum;   //用于药单里的药品分页，解决点击通过时重新分页
    var scanCode = $('.js-scan-code');  //条码输入框
    var prescInfo = $('.js-presc-info');   //显示药单所有信息
    var druInfoTable = $('.js-drug-info-table');  //药单里的药品信息
    var searchDrugTable = $('.js-search-drug-table');   //查询药品返回的药品信息
    var searchDrug = $('#searchDrug');  //查询药品输入框

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
            toastr.warning("您还未登录，请先登录！");
                setTimeout(function () {
                    window.location.href = 'login.html';
                },1000);
        }else{
            $('.js-username').html(username);
        }
    };
    getUsername();

    //监视条码输入框的变化
    scanCode.val('').focus();
    scanCode.bind('change',function () {
        scanSucceed();
        scanCode.val('').focus();
    })
    //扫描成功后操作
    function scanSucceed(){
        var prescCode = scanCode.val();//6937748304647  4711916012686  693342672753  6954697200301  9787302308812  6955715322333
        if(scanFlag){  //此时是扫描药单
            $.ajax({
               type: 'post',
               url: '/checkdrug/check/checkdrugList.do?checkdrug_id='+prescCode,
               data: {},
               success: function(data){
                   scanFlag = !scanFlag;
                   scanPrescHandler(data,prescCode);
                   prescInfo.show();
               },
               error: function() {
                  alert("未找到此药单信息！");
                }
            });
        }else if(prescCode != '6933426727753'){  //此时是扫描药品
            scanDrugHander(prescCode);
        }else if(prescCode == '6933426727753'){   //提交药单验证结果
            if(testFlag){
                toastr.success('此药单通过了验证，请发药！');
                setTimeout(function () {
                    testResultHandler(testFlag);
                },1000);
            }else{
                toastr.warning('此药单没有通过验证，请勿发药！');
                setTimeout(function () {
                    testResultHandler(testFlag);
                },1000);
            };
        }
    };

    //扫描药单号成功 处理函数
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
        if(prescNum <= 5){
            for(var i = 0 ; i < prescNum ; i++){
                tr += '<tr><td>'+prescData.checkdrugInfo[i].d_name+'</td><td>'+prescData.checkdrugInfo[i].d_id+'</td><td>'+prescData.checkdrugInfo[i].d_specification+'</td><td>'+prescData.checkdrugInfo[i].checkdrug_num+'</td><td>'+prescData.checkdrugInfo[i].d_manufacturer+'</td><td><a href="javascript:void(0);" class="js-search" data-toggle="modal" data-target="#myModal">'+'查询'+'</a></td></tr>';
            };
        }else{
           for(var i = 0 ; i < prescNum ; i++){
                tr1[i] += '<tr><td>'+prescData.checkdrugInfo[i].d_name+'</td><td>'+prescData.checkdrugInfo[i].d_id+'</td><td>'+prescData.checkdrugInfo[i].d_specification+'</td><td>'+prescData.checkdrugInfo[i].checkdrug_num+'</td><td>'+prescData.checkdrugInfo[i].d_manufacturer+'</td><td><a href="javascript:void(0);" class="js-search" data-toggle="modal" data-target="#myModal">'+'查询'+'</a></td></tr>';
            };
            tr = tr1[0]+tr1[1]+ tr1[2]+tr1[3]+tr1[4];
        };

        //药单药品分页
        $("#paging1").sharkPager({
            totalPages: Math.ceil(prescNum/5),
            page: 1,
            lg : 'zh_CN',
            segmentSize : 3,
            callback: function (p) {
                var tr = '';
                for(var i = 0 ; i < 5 ; i++){
                    tr += tr1[(p-1)*5+i];
                }
                druInfoTable.find('tr td').parent().html('');
                druInfoTable.append(tr);
            }
        });
        druInfoTable.append(tr);
    }

    //扫描药品成功 处理函数
    function scanDrugHander(prescCode) {
        var notFinded = true;
        var tr = druInfoTable.find('tr');
        for(var i = 1 ; i <tr.length ; i++){
            if($(tr[i]).find('td').eq(1).html() == prescCode){
                var numTd = $(tr[i]).find('td').eq(3);
                var d_num = numTd.html();
                if(d_num == 1){
                    $(tr[i]).html('');
                    tr1.splice(i,1);
                    prescNum = prescNum-1;
                    //药单药品分页
                    $("#paging1").sharkPager({
                        totalPages: Math.ceil(prescNum/5),
                        page: 1,
                        lg : 'zh_CN',
                        segmentSize : 3,
                        callback: function (p) {
                            var tr = '';
                            for(var i = 0 ; i < 5 ; i++){
                                if(tr.search(/undefined/) != -1){
                                    return;
                                };
                                tr += tr1[(p-1)*5+i];                    }
                            druInfoTable.find('tr td').parent().html('');
                            druInfoTable.append(tr);
                        }
                    });
                    testResultTip();
                    notFinded = !notFinded;
                }else{
                    d_num = d_num - 1;
                    toastr.warning("该药还需数量："+d_num);
                    numTd.html(d_num);
                }
                return;
            }
        };
        if(notFinded){
            alert('在药单里未找到此药品！');
        };
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
        var drugNum = drugData.length;
        $('.js-total').html(drugNum);
        if(drugNum == 0){
            tr += '<tr><td colspan="7">'+'未查询到此药品信息！'+'</td></tr>' ;
        }else{
            for(var i = 0 ; i < drugNum ; i++){
                var d_coordinate = drugData[i].d_coordinate.split('-');
                tr += '<tr><td>'+drugData[i].d_name+'</td><td>'+drugData[i].d_id+'</td><td>'+drugData[i].d_specification+'</td><td>'+drugData[i].d_num+'</td><td>'+drugData[i].d_manufacturer+'</td><td>'+d_coordinate[0]+'号药房-'+d_coordinate[1]+'号柜-'+d_coordinate[2]+'排'+d_coordinate[3]+'列'+'</td><td>'+drugData[i].date+'</td></tr>';
            };
        };

        //查询药品分页
        $("#paging2").sharkPager({
            totalPages: Math.ceil(drugNum/5),
            page: 1,
            lg : 'zh_CN',
            segmentSize : 5,
            callback: function(p) {
                var tr = '';
                for(var i = 0 ; i < 5 ; i++){
                    tr += tr1[(p-1)*5+i];
                }
                searchDrugTable.find('tr td').parent().html('');
                searchDrugTable.append(tr);
            }
        });
        searchDrugTable.append(tr);
    };

    //验证结果显示函数
    function testResultTip(){
        var testResultFalg = druInfoTable.find('td').length;
        var testResultText = $('.js-test-result')
        if(testResultFalg != 0){
            testResultText.html('还有药品未通过验证，暂时不可发药！');
        }else{
            testResultText.html('药品验证通过，可发药！');
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
                toastr.info("后台已更新！");
                setTimeout(function () {
                    window.location.reload();
                },1000);
            },
           error: function() {
               alert("请求异常！");
            }
        })
    };

    // 点击 查询 响应事件
    druInfoTable.on("click", ".js-search", function(e) {
        var searchDrugName = $(this).parent().siblings().eq(0).html();
        searchDrug.val(searchDrugName);
        searchDrugHandler();
    });
    // 点击 查询 响应事件
    $("#myModal").on("click", ".js-search-drug",searchDrugHandler);

});