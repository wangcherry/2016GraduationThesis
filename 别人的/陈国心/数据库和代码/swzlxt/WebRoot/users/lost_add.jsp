<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<form id="form_lost" method="post">
  <table cellpadding="5">
    <tr>
      <td colspan="2" style="color:#F00">* 如无信息的文本框，请填无</td>
    </tr>
    <tr>
      <td align="right">物品名称：</td>
      <td><input class="easyui-validatebox" type="text" name="pickname" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">特点：</td>
      <td><input class="easyui-validatebox" type="text" name="picktraint" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">丢失/拾取地点：</td>
      <td><input class="easyui-validatebox" type="text" name="pickplace" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">丢失/拾取时间：</td>
      <td><input class="easyui-datetimebox" name="picktime" required="true" editable="false" style="width:150px"></td>
    </tr>
    <tr>
      <td align="right">储存地点：</td>
      <td><input class="easyui-validatebox" type="text" name="storeplace" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">存储时长：</td>
      <td><input class="easyui-validatebox" type="text" name="storetime" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">处理方式：</td>
      <td><input class="easyui-validatebox" type="text" name="handway" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">信息类型：</td>
      <td><input name="type" type="radio" value="失物信息" checked><span>失物信息</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="type" value="拾物信息"><span>拾物信息</span></td>
    </tr>
  </table>
</form>
