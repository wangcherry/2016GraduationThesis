<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String type = request.getParameter("type");
String str = "";
if(type.equals("1")){
	str = "失物信息";
}else{
	str = "拾物信息";
}
ArrayList lost = array.getLostType(str);
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
            <td><strong style="font-size:14px"><%=str %></strong><span style="float:right"></td>
          </tr>
          <tr>
            <td><table width="100%" cellpadding="5">
                <tr class="tr_border_bottom">
                  <td colspan="5"><a href="javascript:void(0)" onclick="lostadd('<%=path %>')">发布信息</a></td>
                </tr>
            	<%
            	for(int i = 0;i < lost.size();i++){
            		ArrayList alRow = (ArrayList)lost.get(i);
            		ArrayList users = array.getUsers(alRow.get(1).toString());
            	%>
                <tr class="tr_border_bottom">
                  <td><a href="<%=path %>/users/lost_infor.jsp?id=<%=alRow.get(0) %>"><%=alRow.get(2) %></a></td>
                  <td><%=type.equals("1")?"丢失人姓名：":"拾取人姓名：" %><%=users.get(4) %></td>
                  <td>联系电话：<%=users.get(5) %></td>
                  <td><%=type.equals("1")?"丢失地点：":"拾取地点：" %>：<%=alRow.get(4) %></td>
                  <td><%=type.equals("1")?"丢失时间：":"拾取时间：" %>：<%=alRow.get(5).toString().substring(0,16) %></td>
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
