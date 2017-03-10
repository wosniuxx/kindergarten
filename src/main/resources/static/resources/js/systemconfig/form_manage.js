$(document).ready(function(){
	initTenantTable();
	
	//$("#addBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addBtn").bind("click",addForm);
	resourceTree.init();
	
	// 为datatable外的父级设置高度
	$('#formTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#formTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#formTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格
function initTenantTable(){
	$("#formTable").width("100%").dataTable({
		"columns":[
		           { "data": "tablecnname" },
		            { "data": "remark" },
		 ],
		 ajax: {
		     url:webpath+'/form/selectPage',
		     "type": 'POST',
		     "data": function (d) {//查询参数
		           return $.extend( {}, d, {
		              "jsonStr": form.serializeStr($("#formSearchForm"))
		           });
		     },
		     "dataSrc": function (json) {
		           json.iTotalRecords = json.total;
		           json.iTotalDisplayRecords = json.total;
		           return json.data;
		     }
		},
		columnDefs:[{
			"targets" : 1,//租户名称列
			"data" : null,
			"width" : '30%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无内容';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			  "targets" : 2,//操作按钮目标列
			  "data" : null,
			  "render" : function(data, type,row) {
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="updateForm(\''+id+'\')" class="icon-wrap" title="修改"><i class="iconfont i-btn">&#xe628;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="ziduanManage(\''+id+'\')" class="icon-wrap" title="字段管理"><i class="iconfont i-btn">&#xe614;</i></a>';
				     html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="zibiaoManage(\''+id+'\')" class="icon-wrap" title="子表管理"><i class="iconfont i-btn">&#xe62a;</i></a>';
				      html +=  '<a href="javascript:void(0);" onclick="sheji(\''+id+'\')" class="icon-wrap" title="设计"><i class="iconfont i-btn">&#xe62a;</i></a>';
				      return html;
			   }
		}]
	});
}


//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#formTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#tenantSearchForm"));
}

//添加角色
function addForm(){
	var formObj = $("#frm");
	//form.clear(formObj);
	//form.cleanValidator(formObj);
	layer.open({
		type: 1,
        title:'<i class="iconfont">&#xe641;</i>&nbsp;新增表单',
        area: ['400px', '240px'],
        content: $("#addForm"),
        btn: ['确定','取消'],
        btn1: function(index, layero){//确定按钮回调
        	//if(form.isValidator(formObj)){
        		$.ajax({
    				"url":webpath+"/form/insert",
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

//修改表单
function updateForm(id){
	$.ajax({
		"url":webpath+"/form/getFormById",
		"type":"POST",
		dataType:"json",
		data:{
			id:id
		},
		success:function(data){
			var formObj = $("#updateFormTable");
			//form.clear(formObj);
			//form.cleanValidator(formObj);
			form.load(formObj,data);
			var ids='',vals='';
			formObj.find('input[name="orgName"]').val(vals);
			formObj.find('input[name="orgIds"]').val(ids);
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe633;</i>&nbsp;修改角色',
		        area: ['500px', '440px'],
		        content: $("#updateForm"),
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

//字段管理
function ziduanManage(id){
	$.ajax({
		"url":webpath+"/form/getFormById",
		"type":"POST",
		dataType:"json",
		data:{
			tenantId:id
		},
		success:function(data){
			var formObj = $("#ziduanManageTable");
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
//字表管理
function zibaioManage(id){
	$.ajax({
		"url":webpath+"/form/getFormById",
		"type":"POST",
		dataType:"json",
		data:{
			tenantId:id
		},
		success:function(data){
			var formObj = $("#zibaioManageTable");
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
