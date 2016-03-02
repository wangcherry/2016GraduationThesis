<%@ page language="java" import="java.util.*,util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
ArrayList lost = array.getLost();
String keywords = request.getParameter("keywords");
String type = request.getParameter("type");
Validate v = new Validate();
if(keywords != null && !keywords.equals("")){
	lost = array.getLostSearch(v.getUnicode(keywords),v.getUnicode(type));
}
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
  <form id="form_goods" method="post" action="<%=path %>/users/search.jsp" onSubmit="return $(this).form('validate')">
    <table align="center" cellpadding="5" border="1">
      <tr>
        <td>��Ʒ���ƣ�
          <input class="easyui-validatebox" type="text" name="keywords" required="true" customize="Customize" value="<%=keywords != null && !keywords.equals("")?v.getUnicode(keywords):"" %>" /></td>
        <td rowspan="2"><input type="submit" value="����" /></td>
      </tr>
      <tr>
        <td>��Ϣ���ͣ�<input name="type" type="radio" value="ʧ����Ϣ" checked><span>ʧ����Ϣ</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="type" value="ʰ����Ϣ"><span>ʰ����Ϣ</span></td>
      </tr>
    </table>
  </form><br />
  <table width="100%" height="400">
    <tr>
      <td valign="top"><table width="100%" cellpadding="5" class="table" border="1">
          <tr>
            <td></td>
          </tr>
          <tr>
            <td><table width="100%" cellpadding="5">
                <%
            	for(int i = 0;i < lost.size();i++){
            		ArrayList alRow = (ArrayList)lost.get(i);
            	%>
                <tr class="tr_border_bottom">
                  <td><%=i+1 %></td>
                  <td><a href="<%=path %>/users/lost_infor.jsp?id=<%=alRow.get(0) %>"><%=alRow.get(2) %></a></td>
                  <td>�ص㣺<%=alRow.get(4) %></td>
                  <td>ʱ�䣺<%=alRow.get(5).toString().substring(0,16) %></td>
                  <td>��Ϣ���ͣ�<%=alRow.get(10) %></td>
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
