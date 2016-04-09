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
			errorMsg.css('color','red').html('请输入用户名');
			$('#username').focus();
			return;
		}else if(password == ''){
			errorMsg.css('color','red').html('请输入密码');
			$('#password').focus();
			return;
		}else{
			errorMsg.css('color','#fff').html('');
			$.ajax({
		        type:'post',
		        data:{},
			    url:'/checkdrug/admin/login.do?username='+username+'&&password='+password,
			    success:function(data){
			        console.log(data);
			        if(data == 0){
			          	window.location.href = 'index.html?username='+username;
			        }else if(data == 1){
				        errorMsg.css('color','red').html('用户名或密码错误');
			        }else if(data == 2){
				        errorMsg.css('color','red').html('用户名不存在');
			        }
		    	},
               	error: function() {
                  alert("请求异常！");
                }
			})
		}
	})
})