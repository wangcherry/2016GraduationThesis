<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
ArrayList userslogin = (ArrayList)session.getAttribute("userslogin");
ArrayList lost = array.getLostUsers(userslogin.get(0).toString());
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
<link rel="stylesheet" type="text/css" href="<%=path %>/css/base.css" />
<link rel="stylesheet" type="text/css" href="<%=path %>/css/css.css" />
<link rel="stylesheet" type="text/css" href="<%=path %>/css/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="<%=path %>/css/themes/icon.css">
<script type="text/javascript" src="<%=path %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=path %>/js/jquery.easyui.min.js"></script>
<script type="text/javascript" src="<%=path %>/js/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="<%=path %>/js/users.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	
})
</script>
</head>
<body>
<jsp:include page="/users/head.jsp"></jsp:include>
<div class="clear"></div>
<div id="mainColHdr">
  <table width="100%" height="400">
    <tr>
      <td valign="top"><table width="100%" cellpadding="5" class="table" border="1">
          <tr>
            <td><strong style="font-size:14px">已发布信息</strong><span style="float:right"></td>
          </tr>
          <tr>
            <td><table width="100%" cellpadding="5">
                <%
            	for(int i = 0;i < lost.size();i++){
            		ArrayList alRow = (ArrayList)lost.get(i);
            	%>
                <tr class="tr_border_bottom">
                  <td><%=i+1 %></td>
                  <td><a href="<%=path %>/users/lost_infor.jsp?id=<%=alRow.get(0) %>"><%=alRow.get(2) %></a></td>
                  <td>地点：<%=alRow.get(4) %></td>
                  <td>时间：<%=alRow.get(5).toString().substring(0,16) %></td>
                  <td>信息类型：<%=alRow.get(10) %></td>
                </tr>
                <%} %>
            </table></td>
          </tr>
        </table></td>
    </tr>
  </table>
</div>
<div class="clear"></div>
<jsp:include page="/users/bottom.jsp"></jsp:include>
</body>
</html>
