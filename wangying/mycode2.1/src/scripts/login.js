/**
*author wangying
*2016/04/07
**/

$(function(){
	$('.js-loginBtn').click(clickHandler);
	$('body').keydown(function(e) {
         if (e.keyCode == '13') {//keyCode=13是回车键
             clickHandler();
         }
     });
	function clickHandler() {
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
		        data:{username:username,password:password},
			    url:'/checkdrug/admin/login.do?',
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
	};
})