//用户登录
function login(path,closed){
	$("body").append("<div id='dlg_login' style='padding:20px;'></div>");
	$('#dlg_login').dialog({
		href:path+'/admin/login.jsp',
		modal:true,
		closed:closed,
	    title:'用户登录',
	    width:320,
	    height:180,
	    closable:false,
	    buttons:[{
	        text:'登录',
	        iconCls:'icon-ok',
	        handler:function(){
	            $('#form_login').form('submit',{
	            	url:path+'/AdminLoginServlet',
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
					    		location.href = path+'/admin/index.jsp';				    			
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
		href:path+'/admin/pwd_update.jsp',
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
					url:path+'/PwdUpdateServlet?type=admin&id='+id,
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
//添加系统管理员
function adminAdd(path){
	$("body").append("<div id='dlg_systemuser_add' style='padding:20px;'></div>");
	$('#dlg_systemuser_add').dialog({
		href:path+'/admin/systemuser_add.jsp',
		modal:true,
		closed:false,
	    title:'添加系统用户',
	    width:300,
	    height:190,
	    buttons:[{
	        text:'提交',
	        iconCls:'icon-ok',
	        handler:function(){
	            $('#form_systemuser_add').form('submit',{
	            	url:path+'/AdminAddServlet?type=admin',
	                onSubmit:function(){
				        return $(this).form('validate');
				    },
				    success:function(data){
				    	if(data == "-1"){
				    		$.messager.alert('系统消息','用户名已存在','error');
				    	}else{
				    		$.messager.alert('系统消息','添加成功','info',function(){
					    		$('#dlg_login').dialog('refresh');
					    		$('#dlg_login').dialog('close');
					    		location.href = path+'/admin/systemuser.jsp';				    			
				    		},false);
				    	} 
				    }  
	            });
	        }
	    },{
	        text:'重置',
	        iconCls:'icon-reload',
	        handler:function(){
	            $('#dlg_systemuser_add').dialog('refresh');
	        }
	    }]
	});
}
//用户注销
function logout(path){
	$.ajax({
   		type: 'POST',
   		url: path+'/RemoveServlet',
   		data: 'mark=admin',
	   	success: function(msg){
	     window.location.href(path+'/admin/index.jsp');
	   }
	});
}
