<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<br />
<center>
  <div style="background-color:#E6E6E6; width:960px; padding:1px 0">
    <hr />
  </div>
  <div style="background-color:#E6E6E6; padding:30px 0; width:960px;">| <a href="<%=path %>/users/index.jsp">返回首页</a> | <a href="javascript:void(0)" class=Bottom onClick="SetHome(this)">收藏本站</a> | <a href="javascript:void(0)" class=Bottom onClick="AddFavorite()">设为首页</a> |<br /><br />友情链接：| <a href="www.baidu.com">百度</a> | <a href="www.google.com">google</a> | <a href="www.163.com">网易</a> | </div>
</center>
