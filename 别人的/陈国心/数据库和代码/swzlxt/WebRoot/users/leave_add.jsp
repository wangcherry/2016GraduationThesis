<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<form id="form_leave" method="post">
  <table cellpadding="5">
    <tr>
      <td align="right">������</td>
      <td><input class="easyui-validatebox" type="text" name="name" required="true" customize="Customize" /></td>
    </tr>
    <tr>
      <td align="right">�������ݣ�</td>
      <td><textarea class="easyui-validatebox" required="true" name="content" rows="10" cols="40"></textarea></td>
    </tr>
  </table>
</form>
