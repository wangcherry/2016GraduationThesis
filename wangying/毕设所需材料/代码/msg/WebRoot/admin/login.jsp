<%--
  Created by IntelliJ IDEA.
  User: kx
  Date: 16/1/7
  Time: 上午12:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  String path = request.getContextPath();
  String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
<title>ADMIN LOGIN</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Modern Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
 <!-- Bootstrap Core CSS -->
<link href="<%=basePath%>admin/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
<!-- Custom CSS -->
<link href="<%=basePath%>admin/css/style.css" rel='stylesheet' type='text/css' />
<link href="<%=basePath%>admin/css/font-awesome.css" rel="stylesheet"> 
<!-- jQuery -->
<script src="<%=basePath%>admin/js/jquery.min.js"></script>
<!----webfonts--->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
<!---//webfonts--->  
<!-- Bootstrap Core JavaScript -->
<script src="<%=basePath%>admin/js/bootstrap.min.js"></script>
</head>
<body id="login">
  <div class="login-logo">
  </div>
  <h2 class="form-heading">Admin login</h2>
  <div class="app-cam">
	  <form action="<%=basePath%>admin/login.do" method="post">
		<input type="text" class="text" name="username" value="请输入用户名" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '请输入用户名';}">
		<input type="password" name="password" value="请输入密码" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '请输入密码';}">
		<div class="submit"><input type="submit"  value="Login"></div>
	</form>
  </div>
   <div class="copy_layout login">
      <p>Copyright &copy; 2015 Modern. All Rights Reserved | Design by kx </p>
   </div>
</body>
</html>
