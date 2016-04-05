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
<base href="<%=basePath%>">
<head>
  <title>Modern an Admin Panel Category Flat Bootstarp Resposive Website Template | Home :: w3layouts</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords" content="Modern Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template,
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
  <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
  <!-- Bootstrap Core CSS -->
  <link href="<%=basePath%>admin/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
  <!-- Custom CSS -->
  <link href="<%=basePath%>admin/css/style.css" rel='stylesheet' type='text/css' />
  <!-- Graph CSS -->
  <link href="<%=basePath%>admin/css/lines.css" rel='stylesheet' type='text/css' />
  <link href="<%=basePath%>admin/css/font-awesome.css" rel="stylesheet">
  <!-- jQuery -->
  <script src="<%=basePath%>admin/js/jquery.min.js"></script>
  <!----webfonts--->
  <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
  <!---//webfonts--->
  <!-- Nav CSS -->
  <link href="<%=basePath%>admin/css/custom.css" rel="stylesheet">
  <!-- Metis Menu Plugin JavaScript -->
  <script src="<%=basePath%>admin/js/metisMenu.min.js"></script>
  <script src="<%=basePath%>admin/js/custom.js"></script>
  <!-- Graph JavaScript -->
  <script src="<%=basePath%>admin/js/d3.v3.js"></script>
  <script src="<%=basePath%>admin/js/rickshaw.js"></script>
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

      </li>
    </ul>
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
    <div class="graphs">
      <div class="col_3">
        <div class="clearfix"> </div>
      </div>
      <div class="col_1">
        <div class="clearfix"> </div>
      </div>
      <div class="span_11">
        <div class="clearfix"> </div>
      </div>
      <div class="content_bottom">
        <div class="col-md-8 span_3">
          <div class="bs-example1" data-example-id="contextual-table">
            <table class="table">
              <thead>
              <tr>
                <th>#</th>
                <th>Column heading</th>
                <th>Column heading</th>
                <th>Column heading</th>
              </tr>
              </thead>
              <tbody>
              <tr class="active">
                <th scope="row">1</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="success">
                <th scope="row">3</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="info">
                <th scope="row">5</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="warning">
                <th scope="row">7</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="danger">
                <th scope="row">9</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4 span_4">
          <div class="col_2">
            <div class="box_1">
              <div class="col-md-6 col_1_of_2 span_1_of_2">
                <a class="tiles_info">
                  <div class="tiles-head red1">
                    <div class="text-center">Orders</div>
                  </div>
                  <div class="tiles-body red">10</div>
                </a>
              </div>
              <div class="col-md-6 col_1_of_2 span_1_of_2">
                <a class="tiles_info tiles_blue">
                  <div class="tiles-head tiles_blue1">
                    <div class="text-center">Sales</div>
                  </div>
                  <div class="tiles-body blue1">30</div>
                </a>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="box_1">
              <div class="col-md-6 col_1_of_2 span_1_of_2">
                <a class="tiles_info">
                  <div class="tiles-head fb1">
                    <div class="text-center">Facebook</div>
                  </div>
                  <div class="tiles-body fb2">10</div>
                </a>
              </div>
              <div class="col-md-6 col_1_of_2 span_1_of_2">
                <a class="tiles_info tiles_blue">
                  <div class="tiles-head tw1">
                    <div class="text-center">Twitter</div>
                  </div>
                  <div class="tiles-body tw2">30</div>
                </a>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          <div class="cloud">
            <div class="grid-date">
              <div class="date">
                <p class="date-in">Xi'an</p>
                <span class="date-on">°F °C </span>
                <div class="clearfix"> </div>
              </div>
              <h4>3°<i class="fa fa-cloud-upload"> </i></h4>
            </div>
            <p class="monday">Monday 10 July</p>
          </div>
        </div>
        <div class="clearfix"> </div>
      </div>
      <div class="copy">
        <p>Copyright &copy; 2016 Modern. All Rights Reserved | Design by kx </p>
      </div>
    </div>
  </div>
  <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->
<!-- Bootstrap Core JavaScript -->
<script src="<%=basePath%>admin/js/bootstrap.min.js"></script>
</body>
</html>
