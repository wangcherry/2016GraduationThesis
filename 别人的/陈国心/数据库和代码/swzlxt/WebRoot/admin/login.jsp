<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<style>
.table-padding td {padding:5px;}
</style>
<form id="form_login" method="post">
  <table class="table-padding">
    <tr>
      <td align="right">ÓÃ»§Ãû£º</td>
      <td><input class="easyui-validatebox" type="text" name="name" required="true" validType="pattern" customize="Customize" /></td>
    </tr>
    <tr>
      <td align="right">ÃÜÂë£º</td>
      <td><input class="easyui-validatebox" type="password" name="pwd" required="true" validType="pattern" customize="Customize" /></td>
    </tr>
  </table>
</form>
