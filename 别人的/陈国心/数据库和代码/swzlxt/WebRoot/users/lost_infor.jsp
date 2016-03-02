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
                  <td width="75%" style="font-size:18px;"><strong>��Ʒ���ƣ�<%=lost.get(2) %></strong></td>
                  <td width="75%" rowspan="9" valign="top" style="font-size:18px;">�ص㣺<%=lost.get(3) %></td>
                </tr>
                <tr>
                  <td>�ص㣺<%=lost.get(4) %></td>
                </tr>
                <tr>
                  <td>ʱ�䣺<%=lost.get(5).toString().substring(0,16) %></td>
                </tr>
                <tr>
                  <td>����ص㣺<%=lost.get(6) %></td>
                </tr>
                <tr>
                  <td>�洢ʱ����<%=lost.get(7) %></td>
                </tr>
                <tr>
                  <td>����ʽ��<%=lost.get(8) %></td>
                </tr>
                <tr>
                  <td valign="top">��ϵ�ˣ�<%=users.get(6) %></td>
                </tr>
                <tr>
                  <td valign="top">��ϵ�绰��<%=users.get(7) %></td>
                </tr>
                <tr>
                  <td valign="top">��Ϣ���ͣ�<%=lost.get(10) %></td>
                </tr>
            </table></td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="5">
                <tr class="tr_border_bottom">
                  <td align="right"><a href="javascript:void(0)" onClick="leaveadd('<%=path %>','<%=id %>')">����</a></td>
                </tr>
                <%
                ArrayList leave = array.getLeaveLost(id);
                for(int i = 0;i < leave.size();i++){
                	ArrayList alRow = (ArrayList)leave.get(i);
                %>
                <tr>
                  <td>������<%=alRow.get(2) %>&nbsp;&nbsp;&nbsp;&nbsp;���ڣ�<%=alRow.get(4).toString().substring(0,16) %></td>
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
