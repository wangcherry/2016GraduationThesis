<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<title>ʧ������ϵͳ</title>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
ArrayList userslogin = (ArrayList)session.getAttribute("userslogin");
ArrayList user = null;
if(userslogin != null && userslogin.size() != 0){
	user = array.getUsers(userslogin.get(0).toString());
	for(int i = 0;i < user.size();i++){
		user.set(i,"'"+user.get(i)+"'");
	}
}
%>
<script type="text/javascript">
$(document).ready(function(){
	$("#click_login").click(function(){
		login("<%=path %>");
	});
	$("#click_reg").click(function(){
		reg("<%=path %>");
	});
	$("#click_fodify_information").click(function(){
		fodify_information("<%=path %>",<%=user %>);
	});
	$("#click_logout").click(function(){
		logout("<%=path %>");
	});
	$("#click_fodify_pwd").click(function(){
		editpass('<%=path %>','<%=userslogin != null && userslogin.size() != 0?userslogin.get(0):"" %>');
	});
	$("#click_fodify_portrait").click(function(){
		window.location.href("<%=path %>/users/lost_list.jsp");
	});
})
</script>
<script type="text/javascript">
//��Ϊ��ҳ
function SetHome(obj){
	var url=window.location.href;
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(url);
	}catch(e){
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch (e) {
				alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',url);
		}
	}
}
//��ӵ��ղؼ�
function AddFavorite(){
	var url=window.location.href;
	try{
		window.external.addFavorite(url, "****");
	}catch(e){
		try{
			window.sidebar.addPanel("****", url, "");
		}catch(e){
			alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
		}
	}
}
</script>
<div id="content">
  <div id="top_img">
  <%
  if(userslogin == null || userslogin.size() == 0){
   %>
    <div id="click_reg" class="click_login_reg">�û�ע��</div>
    <div id="click_login" class="click_login_reg">�û���¼</div>
    <%}else{ %>
    <div id="click_logout" class="click_login_reg">ע���˳�</div>
    <div id="click_fodify_pwd" class="click_login_reg">�޸�����</div>
    <div id="click_fodify_portrait" class="click_login_reg">�ѷ�����Ϣ</div>
   <%} %>
  </div>
  <div id="menu_left">
    <div id="menu_right">
      <ul id="nav">
        <li class="top"><a href="<%=path %>/users/index.jsp" class="top_link"><span>��ҳ</span></a></li>
        <li class="top"><a href="<%=path %>/users/lost.jsp?type=1" class="top_link"><span>ʧ����Ϣ</span></a></li>
        <li class="top"><a href="<%=path %>/users/lost.jsp?type=2" class="top_link"><span>ʰ����Ϣ</span></a></li>
        <li class="top"><a href="<%=path %>/users/search.jsp" class="top_link"><span>��Ϣ��ѯ</span></a></li>
        <li class="top"><a href="javascript:void(0)" onClick="SetHome(this)" class="top_link"><span>�ղر�վ</span></a></li>
        <li class="top"><a href="javascript:void(0)" onClick="AddFavorite()" class="top_link"><span>��Ϊ��ҳ</span></a></li>
      </ul>
    </div>
  </div>
</div>