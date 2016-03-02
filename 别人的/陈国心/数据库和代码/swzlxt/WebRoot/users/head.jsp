<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<jsp:useBean id="array" scope="page" class="bean.AllBean"/>
<title>失物招领系统</title>
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
//设为首页
function SetHome(obj){
	var url=window.location.href;
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(url);
	}catch(e){
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch (e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',url);
		}
	}
}
//添加到收藏夹
function AddFavorite(){
	var url=window.location.href;
	try{
		window.external.addFavorite(url, "****");
	}catch(e){
		try{
			window.sidebar.addPanel("****", url, "");
		}catch(e){
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}
</script>
<div id="content">
  <div id="top_img">
  <%
  if(userslogin == null || userslogin.size() == 0){
   %>
    <div id="click_reg" class="click_login_reg">用户注册</div>
    <div id="click_login" class="click_login_reg">用户登录</div>
    <%}else{ %>
    <div id="click_logout" class="click_login_reg">注销退出</div>
    <div id="click_fodify_pwd" class="click_login_reg">修改密码</div>
    <div id="click_fodify_portrait" class="click_login_reg">已发布信息</div>
   <%} %>
  </div>
  <div id="menu_left">
    <div id="menu_right">
      <ul id="nav">
        <li class="top"><a href="<%=path %>/users/index.jsp" class="top_link"><span>首页</span></a></li>
        <li class="top"><a href="<%=path %>/users/lost.jsp?type=1" class="top_link"><span>失物信息</span></a></li>
        <li class="top"><a href="<%=path %>/users/lost.jsp?type=2" class="top_link"><span>拾物信息</span></a></li>
        <li class="top"><a href="<%=path %>/users/search.jsp" class="top_link"><span>信息查询</span></a></li>
        <li class="top"><a href="javascript:void(0)" onClick="SetHome(this)" class="top_link"><span>收藏本站</span></a></li>
        <li class="top"><a href="javascript:void(0)" onClick="AddFavorite()" class="top_link"><span>设为首页</span></a></li>
      </ul>
    </div>
  </div>
</div>