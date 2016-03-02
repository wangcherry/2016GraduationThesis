<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<ul>
  <li><a href="<%=path %>/admin/systemuser.jsp">系统用户管理</a></li>
  <li><a href="<%=path %>/admin/users.jsp">学生用户管理</a></li>
  <li><a href="<%=path %>/admin/lost.jsp">物品信息管理</a></li>
  <li><a href="<%=path %>/admin/leave.jsp">留言信息管理</a></li>
</ul>

