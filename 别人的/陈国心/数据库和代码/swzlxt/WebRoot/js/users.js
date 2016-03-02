//用户登录
function login(path){
	$("body").append("<div id='dlg_login' style='padding:20px;'></div>");
	$('#dlg_login').dialog({
		href:path+'/users/login.jsp',
		modal:true,
		closed:false,
	    title:'用户登录',
	    width:300,
	    height:190,
	    closable:true,
	    buttons:[{
	        text:'登录',
	        iconCls:'icon-ok',
	        handler:function(){
	            $('#form_login').form('submit',{
	            	url:path+'/UsersLoginServlet',
	                onSubmit:function(){
				        return $(this).form('validate');
				    },
				    success:function(data){
				    	if(data == "1"){
				    		$.messager.alert('系统消息','用户名或密码错误','error');
				    	}else{
				    		//window.navigate(path+'/index.jsp');
				    		$.messager.alert('系统消息','登录成功','info',function(){
					    		$('#dlg_login').dialog('refresh');
					    		$('#dlg_login').dialog('close');
					    		location.href = path+'/users/index.jsp';				    			
				    		},false);
				    	} 
				    }
	            });
	        }
	    },{
	        text:'重置',
	        iconCls:'icon-reload',
			handler:function(){
				$('#dlg_login').dialog('refresh');
	        }
	    }]
	});
}
//修改密码
function editpass(path,id){
	$("body").append("<div id='dlg_update_pwd' style='padding:20px;'></div>");
	$('#dlg_update_pwd').dialog({
		href:path+'/users/pwd_update.jsp',
		modal:true,
		closed:false,
		title:'修改密码',
		width:310,
		height:200,
		buttons:[{
			text:'提交',
			iconCls:'icon-ok',
			handler:function(){
				$('#form_pwd_update').form('submit',{
					url:path+'/PwdUpdateServlet?type=users&id='+id,
					onSubmit:function(){
						return $(this).form('validate');
					},
					success:function(data){
						if(data == "-1"){
							$.messager.alert('系统消息','修改密码失败','error');
						}else{
							$.messager.alert('系统消息','密码修改成功','info');
							$('#dlg_update_pwd').dialog('refresh');
							$('#dlg_update_pwd').dialog('close');
						} 
					}  
				});
			}
		},{
			text:'重置',
			iconCls:'icon-reload',
			handler:function(){
				$('#dlg_update_pwd').dialog('refresh');
			}
		}]
	});
}
//用户注册
function reg(path){
	$("body").append("<div id='dlg_reg' style='padding:20px;'></div>");
	$('#dlg_reg').dialog({
		href:path+'/users/reg.jsp',
		modal:true,
		closed:false,
	    title:'用户注册',
	    width:360,
	    height:420,
	    buttons:[{
	        text:'注册',
	        iconCls:'icon-ok',
	        handler:function(){
	            $('#form_reg').form('submit',{
	            	url:path+'/AdminAddServlet?type=users',
	                onSubmit:function(){
				        return $(this).form('validate');
				    },
				    success:function(data){
				    	if(data == "-1"){
				    		$.messager.alert('系统消息','用户名已存在','error');
				    	}else{
				    		$.messager.alert('系统消息','注册成功，请登录','info');
				    		$('#dlg_reg').dialog('refresh');
				    		$('#dlg_reg').dialog('close');
				    	} 
				    }  
	            });
	        }
	    },{
	        text:'重置',
	        iconCls:'icon-reload',
	        handler:function(){
	            $('#dlg_reg').dialog('refresh');
	        }
	    }]
	});
}
//用户注销
function logout(path){
	$.ajax({
   		type: 'POST',
   		url: path+'/RemoveServlet',
   		data: 'mark=users',
	   	success: function(msg){
	     window.location.href(path+'/users/index.jsp');
	   }
	});
}
//信息发布
function lostadd(path){
	$("body").append("<div id='dlg_lost' style='padding:20px;'></div>");
	$('#dlg_lost').dialog({
		href:path+'/users/lost_add.jsp',
		modal:true,
		closed:false,
	    title:'信息发布',
	    width:580,
	    height:380,
	    buttons:[{
	        text:'提交',
	        iconCls:'icon-ok',
	        handler:function(){
	            $('#form_lost').form('submit',{
	            	url:path+'/LostServlet',
	                onSubmit:function(){
				        return $(this).form('validate');
				    },
				    success:function(data){
				    	if(data == "-1"){
				    		$.messager.alert('系统消息','请登录后发布信息！','error');
				    	}else{
				    		$.messager.alert('系统消息','发布成功！','info',function(){
				    			$('#dlg_lost').dialog('refresh');
				    			$('#dlg_lost').dialog('close');
				    			location.href = path+'/users/lost_list.jsp';	    			
				    		},false);
				    	} 
				    }  
	            });
	        }
	    },{
	        text:'重置',
	        iconCls:'icon-reload',
	        handler:function(){
	            $('#dlg_lost').dialog('refresh');
	        }
	    }]
	});
}
//留言
function leaveadd(path,id){
	$("body").append("<div id='dlg_leave' style='padding:20px;'></div>");
	$('#dlg_leave').dialog({
		href:path+'/users/leave_add.jsp',
		modal:true,
		closed:false,
	    title:'留言',
	    width:480,
	    height:300,
	    buttons:[{
	        text:'提交',
	        iconCls:'icon-ok',
	        handler:function(){
	            $('#form_leave').form('submit',{
	            	url:path+'/LeaveServlet?lost='+id,
	                onSubmit:function(){
				        return $(this).form('validate');
				    },
				    success:function(data){
				    	if(data == "-1"){
				    		$.messager.alert('系统消息','留言失败！','error');
				    	}else{
				    		$.messager.alert('系统消息','留言成功！','info',function(){
				    			$('#dlg_leave').dialog('refresh');
				    			$('#dlg_leave').dialog('close');
				    			location.href = path+'/users/lost_infor.jsp?id='+id;	    			
				    		},false);
				    	} 
				    }  
	            });
	        }
	    },{
	        text:'重置',
	        iconCls:'icon-reload',
	        handler:function(){
	            $('#dlg_leave').dialog('refresh');
	        }
	    }]
	});
}