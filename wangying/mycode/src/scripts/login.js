/**
*author wangying
*2016/04/07
**/

$(function(){
	$('.js-loginBtn').click(function () {
		var username = $('#username').val();
		var password = $('#password').val();
		$.ajax({
	        type:'post',
		    url:'http://222.24.63.100:9149/checkdrug/admin/login.do?username='+username+'&&password='+password,
		    success:function(data){
		          console.log(data);
		    }
		})
	})
})