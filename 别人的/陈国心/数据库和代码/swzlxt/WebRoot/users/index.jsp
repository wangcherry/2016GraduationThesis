<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
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
      <td width="50%" valign="top"><table width="100%" cellpadding="5" class="table" border="1">
          <tr>
            <td><strong style="font-size:14px">失物信息</strong><span style="float:right"><a href="<%=path %>/users/lost.jsp?type=1">更多...</a></span></td>
          </tr>
          <tr>
            <td><table width="100%" cellpadding="5">
            	<%
            	ArrayList lose = array.getLostType("失物信息");
            	for(int i = 0;i < lose.size();i++){
            		ArrayList alRow = (ArrayList)lose.get(i);
            		if(i == 13){
            			continue;
            		}
            	%>
                <tr class="tr_border_bottom">
                  <td><a href="<%=path %>/users/lost_infor.jsp?id=<%=alRow.get(0) %>"><%=alRow.get(2) %></a></td>
                  <td>丢失地点：<%=alRow.get(4) %></td>
                  <td>丢失时间：<%=alRow.get(5).toString().substring(0,16) %></td>
                </tr>
                <%} %>
            </table></td>
          </tr>
        </table></td>
      <td width="50%" valign="top"><table width="100%" cellpadding="5" class="table" border="1">
          <tr>
            <td><strong style="font-size:14px">拾物信息</strong><span style="float:right"><a href="<%=path %>/users/lost.jsp?type=2">更多...</a></span></td>
          </tr>
          <tr>
            <td><table width="100%" cellpadding="5">
                <%
                ArrayList pickup = array.getLostType("拾物信息");
            	for(int i = 0;i < pickup.size();i++){
            		ArrayList alRow = (ArrayList)pickup.get(i);
            		if(i == 13){
            			continue;
            		}
            	%>
                <tr class="tr_border_bottom">
                  <td><a href="<%=path %>/users/lost_infor.jsp?id=<%=alRow.get(0) %>"><%=alRow.get(2) %></a></td>
                  <td>拾取地点：<%=alRow.get(4) %></td>
                  <td>拾取时间：<%=alRow.get(5).toString().substring(0,16) %></td>
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
