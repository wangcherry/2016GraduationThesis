<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<ul>
  <li><a href="<%=path %>/admin/systemuser.jsp">ϵͳ�û�����</a></li>
  <li><a href="<%=path %>/admin/users.jsp">ѧ���û�����</a></li>
  <li><a href="<%=path %>/admin/lost.jsp">��Ʒ��Ϣ����</a></li>
  <li><a href="<%=path %>/admin/leave.jsp">������Ϣ����</a></li>
</ul>

