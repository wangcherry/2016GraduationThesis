<%@ page language="java" import="java.util.*" pageEncoding="utf8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">

<title>Barcode information inquiry</title>
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Medical Clinic Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="<%=basePath%>page/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="<%=basePath%>page/css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- js -->
<script src="<%=basePath%>page/js/jquery-1.11.1.min.js"></script>
<!-- //js -->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Archivo+Narrow:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
</head>
	
<body>
<!-- banner -->
	<div class="banner">
		<div class="container">
<!-- header -->
			<div class="header">	
					<div class="logo">
					 <a href="<%=basePath %>index.jsp"></i>条形码信息查询<span>Barcode information inquiry</span></a>
					</div>
					<div class="clearfix"> </div>
			</div>
<!-- //header -->
			<div class="banner-info">
			<!-- =========================================AJAX响应表单=============================== -->
				<form id="formId" action="<%=basePath %>user/showUserMsg.do" method="post">
					<input id="focusedinput" name="focusedinput" type="text" value="请使用扫码枪扫描..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '请使用扫码枪扫描...';}" required>
					<input type="submit" value="Subscribe" >
				</form>
				<!-- ============================================================================== -->
			</div>
			<div class="banner-info-grids">
				<div class="col-md-4 banner-info-grid">
					<div class="banner-info-grid1">
						<div class="banner-info-grid-left">
							<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
						</div>
						<div class="banner-info-grid-right">
							<h4>est qui dolorem ipsum</h4>
							<p>Quia dolor sit amet velit</p>
							<div class="more">
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="col-md-4 banner-info-grid">
					<div class="banner-info-grid1">
						<div class="banner-info-grid-left">
							<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
						</div>
						<div class="banner-info-grid-right">
							<h4>est qui dolorem ipsum</h4>
							<p>Quia dolor sit amet velit</p>
							<div class="more">
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="col-md-4 banner-info-grid">
					<div class="banner-info-grid1">
						<div class="banner-info-grid-left">
							<span class="glyphicon glyphicon-apple" aria-hidden="true"></span>
						</div>
						<div class="banner-info-grid-right">
							<h4>est qui dolorem ipsum</h4>
							<p>Quia dolor sit amet velit</p>
							<div class="more">
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //banner -->
<!-- banner-bottom -->
	<div class="banner-bottom">
		<div class="banner-bottom-grid">
		  <div class="clearfix"> </div>
		</div>
		<div class="banner-bottom-grid">
		  <div class="clearfix"> </div>
		</div>
	</div>
<!-- //banner-bottom -->
<!-- welcome --><!-- //welcome -->
<!-- about -->
	<div class="about">
		<div class="container">
			<h3>About Me</h3>
			<p class="et"> Copyright © 2016 Modern. All Rights Reserved | Design by kx </p>
			<div class="about-grid">
			  <div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //about -->
<!-- testimonials --><!-- //testimonials -->
<!-- footer -->
	<div class="footer"></div>
<!-- //footer -->
<!-- for bootstrap working -->
		<script src="<%=basePath%>page/js/bootstrap.js"> </script>
<!-- //for bootstrap working -->

<script type="text/javascript">
  window.onload=function(){
    document.getElementById("focusedinput").oninput=function(){
    //alert("!!!!");
      var xhr = createXmlHttpRequest();
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
          if(xhr.status==200||xhr.status==304){
            var data = xhr.responseText;
            //alert(data);
            //document.getElementById("helpBlock").innerHTML=data;
            if(data==1)
            {
            	document.getElementById("formId").submit();
            }
            else{
            	alert("扫描的编码不存在");
            }
          }
        }
      }
      xhr.open("POST","${pageContext.request.contextPath}/user/isIdExist.do?time="+new Date().getTime());

      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

      var id = document.getElementById("focusedinput").value;
      //alert(id);

      xhr.send("id="+id);
    }
  }
  function createXmlHttpRequest(){
    var xmlHttp;
    try{    //Firefox, Opera 8.0+, Safari
      xmlHttp=new XMLHttpRequest();
    }catch (e){
      try{    //Internet Explorer
        xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e){
        try{
          xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){}
      }
    }
    return xmlHttp;
  }
</script>

</body>
</html>
