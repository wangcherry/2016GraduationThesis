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
  <div style="background-color:#E6E6E6; padding:30px 0; width:960px;">| <a href="<%=path %>/users/index.jsp">������ҳ</a> | <a href="javascript:void(0)" class=Bottom onClick="SetHome(this)">�ղر�վ</a> | <a href="javascript:void(0)" class=Bottom onClick="AddFavorite()">��Ϊ��ҳ</a> |<br /><br />�������ӣ�| <a href="www.baidu.com">�ٶ�</a> | <a href="www.google.com">google</a> | <a href="www.163.com">����</a> | </div>
</center>
