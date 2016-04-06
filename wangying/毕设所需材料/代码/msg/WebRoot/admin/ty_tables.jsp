<%--
  Created by IntelliJ IDEA.
  User: kx
  Date: 16/1/7
  Time: 上午12:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
  String path = request.getContextPath();
  String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
  int num = 1;
%>
<html>
<base href="<%=basePath%>">

<head>
  <title>Modern an Admin Panel Category Flat Bootstarp Resposive Website Template | Basic_tables :: w3layouts</title>
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
<body>
<div id="wrapper">
  <!-- Navigation -->
  <nav class="top1 navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html">MSG</a>
    </div>

    <div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
          <li>
            <a href="<%=basePath%>admin/main.jsp"><i class="fa fa-dashboard fa-fw nav_icon"></i>首页</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-laptop nav_icon"></i>类型管理<span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
              <li>
                <a href="<%=basePath%>type/showType.do">查看类型</a>
              </li>
              <li>
                <a href="<%=basePath%>admin/ty_forms.jsp">添加类型</a>
              </li>
            </ul>
            <!-- /.nav-second-level -->
          </li>
          <li>
            <a href="#"><i class="fa fa-laptop nav_icon"></i>信息管理<span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
              <li>
                <a href="<%=basePath%>Msg/showMs_tables.do">查看信息</a>
              </li>
              <li>
                <a href="<%=basePath%>Msg/showMs_forms.do">添加信息</a>
              </li>
            </ul>
            <!-- /.nav-second-level -->
          </li>
          <li>
            <a href="#"><i class="fa fa-laptop nav_icon"></i>账户管理<span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
         
              <li>
                <a href="<%=basePath%>admin/ad_forms.jsp">修改密码</a>
              </li>
            </ul>
            <!-- /.nav-second-level -->
          </li>
        </ul>
      </div>
      <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->
  </nav>
  <div id="page-wrapper">
    <div class="col-md-12 graphs">
      <div class="xs">
        <h3>查看类型</h3>
        <div class="panel-body1">
          <table class="table">
            <thead>
            <tr>
              <th width="20%">序号</th>
              <th width="80%">名称</th>

            </tr>
            </thead>
            <tbody>
            <c:forEach items="${msg_typeList}" var="msgtypeList">
            <tr>
              <th scope="row"><%=num++ %></th>
              <td>${msgtypeList.mt_name}</td>
            </tr>
            </c:forEach>

            </tbody>
          </table>
        </div>
        <div class="bs-example4" data-example-id="simple-responsive-table"><!-- /.table-responsive --><!-- /.table-responsive -->
        </div>
      </div>
      <div class="copy_layout">
        <p>Copyright © 2016 Modern. All Rights Reserved | Design by kx </p>
      </div>
    </div>
  </div>
  <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->
<!-- Nav CSS -->
<link href="<%=basePath%>admin/css/custom.css" rel="stylesheet">
<!-- Metis Menu Plugin JavaScript -->
<script src="<%=basePath%>admin/js/metisMenu.min.js"></script>
<script src="<%=basePath%>admin/js/custom.js"></script>
</body>
</html>
