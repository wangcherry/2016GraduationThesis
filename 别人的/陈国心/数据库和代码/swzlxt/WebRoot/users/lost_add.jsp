<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<form id="form_lost" method="post">
  <table cellpadding="5">
    <tr>
      <td colspan="2" style="color:#F00">* ������Ϣ���ı���������</td>
    </tr>
    <tr>
      <td align="right">��Ʒ���ƣ�</td>
      <td><input class="easyui-validatebox" type="text" name="pickname" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">�ص㣺</td>
      <td><input class="easyui-validatebox" type="text" name="picktraint" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">��ʧ/ʰȡ�ص㣺</td>
      <td><input class="easyui-validatebox" type="text" name="pickplace" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">��ʧ/ʰȡʱ�䣺</td>
      <td><input class="easyui-datetimebox" name="picktime" required="true" editable="false" style="width:150px"></td>
    </tr>
    <tr>
      <td align="right">����ص㣺</td>
      <td><input class="easyui-validatebox" type="text" name="storeplace" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">�洢ʱ����</td>
      <td><input class="easyui-validatebox" type="text" name="storetime" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">����ʽ��</td>
      <td><input class="easyui-validatebox" type="text" name="handway" required="true" customize="Customize" style="width:400px;" /></td>
    </tr>
    <tr>
      <td align="right">��Ϣ���ͣ�</td>
      <td><input name="type" type="radio" value="ʧ����Ϣ" checked><span>ʧ����Ϣ</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="type" value="ʰ����Ϣ"><span>ʰ����Ϣ</span></td>
    </tr>
  </table>
</form>
