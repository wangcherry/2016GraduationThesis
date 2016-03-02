<%@ page language="java" import="java.util.*" pageEncoding="utf8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<link href="../page/user/style/authority/basic_layout.css" rel="stylesheet" type="text/css">
<link href="../page/user/style/authority/common_style.css" rel="stylesheet" type="text/css">



<title>病例信息</title>
<script type="text/javascript">
	
function show(dis){
document.getElementById('pp').innerHTML="<p>"+dis+"</p>";

document.getElementById('popup').style.display='block';

button2.onclick=function(){
document.getElementById('popup').style.display='none';
}
}

</script>
<style>
	.alt td{ background:black !important;}
</style>
</head>
<body>
	 
		<input type="hidden" name="allIDCheck" value="" id="allIDCheck"/>
		<input type="hidden" name="fangyuanEntity.fyXqName" value="" id="fyXqName"/>
		<div id="container">
			<div class="ui_content">     
				<div class="ui_tb">
					<table class="table" id="mytable" cellspacing="0" cellpadding="0" width="100%" align="center" border="0">
						<tr>
							<th width="30"><input type="checkbox" id="all" onClick="selectOrClearAllCheckbox(this);" />
							</th>
							<th>姓名</th>
							<th>性别</th>
							<th>年龄</th>
							<th>疾病类型</th>
							<th>病情状态</th>
							<th>健康报告</th>
							<th>诊断日期</th>
							<th>操作</th>
						</tr>
						<c:forEach var="showBingliDate" items="${showBingliDates1 }">
							<tr>
								<td><input type="checkbox" name="IDCheck" value="14458579642011" class="acb" /></td>
								<td>${showBingliDate.u_name }</td>
								<td>${showBingliDate.u_sex }</td>
                                <td>${showBingliDate.u_age }</td>
								<td>${showBingliDate.cond }</td>
								<td>${showBingliDate.state }</td>
								<td>${showBingliDate.report_name }</td>
                                <td>${showBingliDate.d_date }</td>
                                <td>
                                    <a  onClick="show('${showBingliDate.report }')" href="#">查看</a>
                                   <form action="<%=basePath %>/diagnose/deldiagnose.do">
                                    <input style="display: none" name="deldiagparm" value="${showBingliDate.dia_id }">
                                  	<input type="submit" value="删除" onclick="return confirm('你确定要删除吗？')">
                                    </form> 
								</td>
							</tr>
						</c:forEach>
					</table>
				</div>
				
				<div class="ui_tb_h30">
					<div class="ui_flt" style="height: 30px; line-height: 30px;">
						共有
						<span class="ui_txt_bold04">90</span>
						条记录，当前第
						<span class="ui_txt_bold04">1
						/
						9</span>
						页
					</div>
					<div class="ui_frt">
						<!--    如果是第一页，则只显示下一页、尾页 -->
						
							<input type="button" value="首页" class="ui_input_btn01" />
							<input type="button" value="上一页" class="ui_input_btn01" />
							<input type="button" value="下一页" class="ui_input_btn01"
								onclick="jumpNormalPage(2);" />
							<input type="button" value="尾页" class="ui_input_btn01"
								onclick="jumpNormalPage(9);" />
						
						
						
						<!--     如果是最后一页，则只显示首页、上一页 -->
						
						转到第<input type="text" id="jumpNumTxt" class="ui_input_txt01" />页
							 <input type="button" class="ui_input_btn01" value="跳转" onClick="jumpInputPage(9);" />
					</div>
				</div>
			</div>
		</div>
	
 <!-------------------------------------popup开始------------------------------------------>
<div id="popup" >
	<div class="popup-dia"></div>
	
    <div class="popup-con" id="popup-con">
		<h2>健康报告<img id="button2" src='../page/user/images/common/page_close.png' style="float:right;margin-top:40px;margin-right:15px;"></h2>
        <div class="abc" id="pp">
      
        </div>
    </div>
</div>
<!-------------------------------------popup结束------------------------------------------>
<div style="display:none"></div>
</body>
</html>

