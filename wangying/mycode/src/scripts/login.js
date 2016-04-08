/**
*author wangying
*2016/04/07
**/

$(function(){
	$('.js-loginBtn').click(function () {
		var username = $('#username').val();
		var password = $('#password').val();
		var errorMsg = $('.js-errorMsg');
		if(username == ''){
			errorMsg.show().html('请输入用户名');
			$('#username').focus();
			return;
		}else if(password == ''){
			errorMsg.show().html('请输入密码');
			$('#password').focus();
			return;
		}else{
			errorMsg.hide().html('');
			$.ajax({
		        type:'post',
		        data:{},
			    url:'http://222.24.63.100:9149/checkdrug/admin/login.do?username='+username+'&&password='+password,
			    success:function(data){
			        console.log(data);
			        if(data == 0){
			          	window.location.href = index.html;
			        }else if(data == 1){
				        errorMsg.show().html('用户名或密码错误');
			        }else if(data == 2){
				        errorMsg.show().html('用户名不存在');
			        }
		    	},
               	error: function() {
                  alert("请求异常！");
                }
			})
		}
	})
})