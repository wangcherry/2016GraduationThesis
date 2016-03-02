<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String id = request.getParameter("id");
ArrayList lost = array.getLost(id);
ArrayList users = array.getUsers(lost.get(1).toString());
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
            <td><table width="100%" border="1" cellpadding="5">
                <tr>
                  <td width="75%" style="font-size:18px;"><strong>物品名称：<%=lost.get(2) %></strong></td>
                  <td width="75%" rowspan="9" valign="top" style="font-size:18px;">特点：<%=lost.get(3) %></td>
                </tr>
                <tr>
                  <td>地点：<%=lost.get(4) %></td>
                </tr>
                <tr>
                  <td>时间：<%=lost.get(5).toString().substring(0,16) %></td>
                </tr>
                <tr>
                  <td>储存地点：<%=lost.get(6) %></td>
                </tr>
                <tr>
                  <td>存储时长：<%=lost.get(7) %></td>
                </tr>
                <tr>
                  <td>处理方式：<%=lost.get(8) %></td>
                </tr>
                <tr>
                  <td valign="top">联系人：<%=users.get(6) %></td>
                </tr>
                <tr>
                  <td valign="top">联系电话：<%=users.get(7) %></td>
                </tr>
                <tr>
                  <td valign="top">信息类型：<%=lost.get(10) %></td>
                </tr>
            </table></td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="5">
                <tr class="tr_border_bottom">
                  <td align="right"><a href="javascript:void(0)" onClick="leaveadd('<%=path %>','<%=id %>')">留言</a></td>
                </tr>
                <%
                ArrayList leave = array.getLeaveLost(id);
                for(int i = 0;i < leave.size();i++){
                	ArrayList alRow = (ArrayList)leave.get(i);
                %>
                <tr>
                  <td>姓名：<%=alRow.get(2) %>&nbsp;&nbsp;&nbsp;&nbsp;日期：<%=alRow.get(4).toString().substring(0,16) %></td>
                </tr>
                <tr class="tr_border_bottom">
                  <td><%=alRow.get(3) %></td>
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
