$(document).ready(function(){
	initurlexplainTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addUrlBtn").bind("click",addUrl);
	resourceTree.init();
	
	// 为datatable外的父级设置高度
	$('#urlexplainTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#urlexplainTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#urlexplainTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格
function initurlexplainTable(){
	$("#urlexplainTable").width("100%").dataTable({
		"columns":[
		           { "data": "introduce" },
		            { "data": "finalUrl" },
		            { "data": "envname" },
		            { "data": "status" }
		 ],
		 ajax: {
		     url:webpath+'/urlExplain/selectPage',
		     "type": 'POST',
		     "data": function (d) {//查询参数
		           return $.extend( {}, d, {
		              "jsonStr": form.serializeStr($("#urlexplainSearchForm"))
		           });
		     },
		     "dataSrc": function (json) {
		           json.iTotalRecords = json.total;
		           json.iTotalDisplayRecords = json.total;
		           return json.data;
		     }
		},
		
		columnDefs:[
		{
			"targets" : 1,//操作按钮目标列
			"data" : null,
			"width" : 500
		},
		{
			"targets" : 3,//操作按钮目标列
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data=="1"){
					  html += '<span style="color:green;">启用</span>';
				  }else{
					  html += '<span style="color:red;">停用</span>';
				  }
			      return html;
			   }
		},
		{
			  "targets" : 4,//操作按钮目标列
			  "data" : null,
			  "render" : function(data, type,row) {
				  var id = row.userId;
				  var html =  '<a href="javascript:void(0);" onclick="updateUser(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe66f;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="deleteUser(\''+id+'\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
				      html += '&nbsp;&nbsp;';
				      return html;
			   }
		}
	]
	});
}



//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#urlexplainTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#tenantSearchForm"));
}

//添加角色
function addUrl(){
	location.href = webpath+'/urlExplain/insert';
	/*$.ajax({
		type:'GET',
		url:webpath+'/urlExplain/insert'
	});*/
}

//修改租户
function updateTenant(id){
	$.ajax({
		"url":webpath+"/tenant/getTenantById",
		"type":"POST",
		dataType:"json",
		data:{
			tenantId:id
		},
		success:function(data){
			var formObj = $("#updateTenantForm");
			//form.clear(formObj);
			//form.cleanValidator(formObj);
			form.load(formObj,data);
			var ids='',vals='';
			formObj.find('input[name="orgName"]').val(vals);
			formObj.find('input[name="orgIds"]').val(ids);
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe633;</i>&nbsp;修改角色',
		        area: ['300px', '240px'],
		        content: $("#updateTenant"),
		        btn: ['确定','取消'],
		        btn1: function(index, layero){//确定按钮回调
		        	//if(form.isValidator(formObj)){
		        		$.ajax({
		    				"url":webpath+"/tenant/update",
		    				"type":"POST",
		    				dataType:"json",
		    				data:form.serializeJson(formObj),
		    				success:function(data){
		    					layer.close(index);
		    					reloadTableData(true);
		    				}
		    			});
		        	//}
			    },
			    btn2: function(index, layero){//确定按钮回调
		        	layer.close(index);
			    }
		    });
		   }
    });
}
//删除角色
function deleteTenant(id){
	layer.confirm('删除该角色？（删除后不可恢复）', {
        icon: 3,
        btn: ['是','否'] //按钮
  	  }, function(index, layero){
  		  $.ajax({//初始化组织机构树
  				"url":webpath+"/tenant/delete",
  				"type":"POST",
  				dataType:"json",
  				data:{
                     tenantId:id
  				},
  				success:function(data){
  					layer.close(index);
					reloadTableData(true);
  				}
  		   });
  	  });
}


//资源授权
function resourceAuth(id){
	$.ajax({//初始化组织机构树
		"url":webpath+"/role/selectRoleResources",
		"type":"POST",
		dataType:"json",
		data:{
			roleId:id
		},
		success:function(data){
			resourceTree.treeObj.checkAllNodes(false);
			for(var i=0;i<data.length;i++){//选中已有的权限
				var node = resourceTree.treeObj.getNodesByParam("resourcesId", data[i].resourcesId, null);
				if(node.length>0){
					resourceTree.treeObj.checkNode(node[0], true, false);
				}
			}
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe723;</i>&nbsp;资源授权',
		        area: ['300px', '340px'],
		        content: $("#resourceDiv"),
		        btn: ['确定','取消'],
		        btn1: function(index, layero){//确定按钮回调
		        	var nodes = resourceTree.treeObj.getCheckedNodes(true),arr=[];
		        	for(var n=0;n<nodes.length;n++){
		        		var node = nodes[n];
		        		var obj = new Object();
		        		obj.roleId = id;
		        		obj.resourcesId = node.resourcesId;
		        		arr.push(obj);
		        	}
		        	$.ajax({//初始化组织机构树
		  				"url":webpath+"/role/auth",
		  				"type":"POST",
		  				dataType:"json",
		  				data:{
		                     jsonStr:JSON.stringify(arr),
		                     roleId:id
		  				},
		  				success:function(data){
		  					layer.close(index);
		  					layer.msg('授权成功！', {time: 1000, icon:1});
		  				},
		  				error:function(data){
		  					layer.close(index);
		  					layer.msg(data, {time: 1000, icon:1});
		  				}
		  		   });
			    },
			    btn2: function(index, layero){//确定按钮回调
		        	layer.close(index);
			    }
		    });
			$("#resourceDiv").parent().niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
		}
	});
}



var resourceTree ={
		treeObj:null,
		setting : {
			data:{
				simpleData: {
					enable:true, 
					idKey:'resourcesId',
					pIdKey:'parentId'
				},
				key:{
					name:'resourcesName',
					url:'xurl'
				}
			},
			check: {
				enable: true,
				chkboxType: {"Y":"p", "N":"p"}
			}
		},
		init:function(){
			if(resourceTree.treeObj!=null){
				resourceTree.treeObj.destroy()
			}
			$.ajax({//初始化组织机构树
				"url":webpath+"/role/resources",
				"type":"POST",
				dataType:"json",
				success:function(data){
					if(data!=null&&data.length>0){
						for(var i=0;i<data.length;i++){
							data[i].icon=webpath+resourceTypeIcon[data[i].resourcesTypeId];
						}
						resourceTree.treeObj = $.fn.zTree.init($("#resourceTree"), resourceTree.setting, data);
						resourceTree.treeObj.expandAll(true);
					}else{
						layer.msg('暂无数据', {time: 1000, icon:5});
					}
				}
			});
		}
}



var resourceTypeIcon = {
		"0":"/resources/img/icon/16x16/floder1-black.png",
		"1":"/resources/img/icon/16x16/link1-black.png",
		"2":"/resources/img/icon/16x16/link-black.png",
		"3":"/resources/img/icon/16x16/fun-black.png",
};