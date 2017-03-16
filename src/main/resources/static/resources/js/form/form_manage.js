$(document).ready(function() {
	initTenantTable();

	$("#searchBtn").bind("click", reloadTableData);
	$("#resetBtn").bind("click", resetForm);
	$("#addBtn").bind("click", addForm);

	resourceTree.init();

	// 为datatable外的父级设置高度
	$('#formTable_wrapper').css('height', $('.panel-body').height() - 60);
	// 动态为表格添加父级
	$('#formTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#formTable_wrapper').height() - 63);
	$('.tab-wrapper').niceScroll({
		cursorcolor : "#ccc",
		horizrailenabled : false
	});
});

// 初始化用户列表表格
function initTenantTable() {

	$("#formTable").width("100%").dataTable(
					{
						"columns" : [ {"data" : "tablecnname"},
						              {"data" : "remark"},
						              ],
						ajax : {
							url : webpath + '/form/selectPage',
							"type" : 'POST',
							"data" : function(d) {// 查询参数
								return $.extend({}, d, {
									"jsonStr" : form
											.serializeStr($("#formSearchForm"))
								});
							},
							"dataSrc" : function(json) {
								json.iTotalRecords = json.total;
								json.iTotalDisplayRecords = json.total;
								return json.data;
							}
						},
						columnDefs : [
								{
									"targets" : 1,// 表单说明
									"data" : null,
									"width" : '30%',
									"render" : function(data, type, row) {
										var html = '';
										if (data == null || data == "") {
											html += '暂无内容';
										} else {
											html += data;
										}
										return html;
									}
								},
								{
									"targets" : 2,// 操作按钮目标列
									"data" : null,
									"render" : function(data, type, row) {
										var id = row.id;
										var udtemplatecode=row.udtemplatecode;
										var html = '<a href="javascript:void(0);" onclick="updateForm(\''
												+ id
												+ '\')" class="icon-wrap" title="修改"><i class="iconfont i-btn">&#xe628;</i></a>';
										html += '&nbsp;&nbsp;';
										html += '<a href="javascript:void(0);" onclick="fieldManage(\''
												+ udtemplatecode
												+ '\')" class="icon-wrap" title="字段管理"><i class="iconfont i-btn">&#xe614;</i></a>';
										html += '&nbsp;&nbsp;';
										html += '<a href="javascript:void(0);" onclick="zibiaoManage(\''
												+ id
												+ '\')" class="icon-wrap" title="子表管理"><i class="iconfont i-btn">&#xe62a;</i></a>';
										html += '<a href="javascript:void(0);" onclick="sheji(\''
												+ id
												+ '\')" class="icon-wrap" title="设计"><i class="iconfont i-btn">&#xe62a;</i></a>';
										return html;
									}
								} ]
					});
	
	
}

// 刷新数据 true 整个刷新 false 保留当前页刷新
function reloadTableData(isCurrentPage) {
	$("#formTable").dataTable().fnDraw(
			isCurrentPage == null ? true : isCurrentPage);
}

// 重置查询条件
function resetForm() {
	form.clear($("#formSearchForm"));
}

// 添加角色
function addForm() {
	var formObj = $("#frm");
	// form.clear(formObj);
	// form.cleanValidator(formObj);
	layer.open({
		type : 1,
		title : '<i class="iconfont">&#xe641;</i>&nbsp;新增表单',
		area : [ '400px', '240px' ],
		content : $("#addForm"),
		btn : [ '确定', '取消' ],
		btn1 : function(index, layero) {// 确定按钮回调
			// if(form.isValidator(formObj)){
			$.ajax({
				"url" : webpath + "/form/insert",
				"type" : "POST",
				dataType : "json",
				data : form.serializeJson(formObj),
				success : function(data) {
					console.log(form.serializeJson(formObj));
					layer.close(index);
					reloadTableData(true);
				}
			});
			// }
		},
		btn2 : function(index, layero) {// 确定按钮回调
			layer.close(index);
		}
	});
}

// 修改表单
function updateForm(id) {
	$.ajax({
				"url" : webpath + "/form/getFormById",
				"type" : "POST",
				dataType : "json",
				data : {
					id : id
				},
				success : function(data) {
					var formObj = $("#updateFormTable");
					// form.clear(formObj);
					// form.cleanValidator(formObj);
					form.load(formObj, data);
					/*
					 * var ids='',vals='';
					 * formObj.find('input[name="orgName"]').val(vals);
					 * formObj.find('input[name="orgIds"]').val(ids);
					 */
					$("[name=table_cnname]").val(data.tablecnname);
					$("[name=remark]").val(data.remark);
					$("[name=exampletitle]").val(data.exampletitle);
					var div = '<input id="file" name="fieldBtn" href="javascript:void(0);" onclick="fieldInsert(\''
							+ data.udtemplatecode
							+ '\')" value="插入字段" type="button">';
					document.getElementById("btn").innerHTML = div;
					layer.open({
						type : 1,
						title : '<i class="iconfont">&#xe633;</i>&nbsp;修改表单',
						area : [ '500px', '440px' ],
						content : $("#updateForm"),
						btn : [ '确定', '取消' ],
						btn1 : function(index, layero) {// 确定按钮回调
							// if(form.isValidator(formObj)){
							$.ajax({
								"url" : webpath + "/tenant/update",
								"type" : "POST",
								dataType : "json",
								data : form.serializeJson(formObj),
								success : function(data) {
									layer.close(index);
									reloadTableData(true);
								}
							});
							// }
						},
						btn2 : function(index, layero) {// 确定按钮回调
							layer.close(index);
						}
					});
				}
			});
}

// 修改表单，插入字段
function fieldInsert(udtemplatecode) {
	console.log(udtemplatecode);
	$.ajax({
	     "url":webpath+'/form/selectField',
	     "type": 'POST',
	     dataType:'json',
	     async:false,
	      data: {templatecode:udtemplatecode,},
	     success:function(data){
	    	 $("#fieldTable").width("100%").dataTable({
	    			"columns":[
	    			           { "data": "fieldcname" },
	    			            { "data": "fieldtype" },
	    			 ],
	    			 columnDefs:[{
	    					"targets" : 0,//租户名称列
	    					"data" : null,
	    					"width" : '10%',
	    					"render" : function(data, type,row) {
	    						  var html = '';
	    						  if(data==null||data==""){
	    							  html += '暂无内容';
	    						  }else{
	    							  html += data;
	    						  }
	    					      return html;
	    					   }
	    				},]
	    			 })
	    	 layer.open({
	    		 type:1,
	    		 title:'<i class="iconfont">&#xe633;</i>&nbsp;插入字段',
	    		 area:[ '500px', '440px' ],
	    		 content : $("#insertField"),
				 btn : [ '确定', '取消' ],
				 btn1 : function(index, layero) {// 确定按钮回调
						// if(form.isValidator(formObj)){
						$.ajax({
							"url" : webpath + "/form/insert",
							"type" : "POST",
							dataType : "json",
							data : form.serializeJson(formObj),
							success : function(data) {
								layer.close(index);
								reloadTableData(true);
							}
						});
						// }
					},
					btn2 : function(index, layero) {// 确定按钮回调
						layer.close(index);
					}
	    	 })
	     }

})}

// 字段弹窗
function fieldManage(udtemplatecode) {
	
	$("#fieldManageTable").dataTable({
		"columns" : [
		      {"data" : "fieldcname","width":"20%"},
		      {"data" : "fieldtype","width":"20%"},
		      {"data" : "datalenth","width":"20%"},
		      {"data" : "need","width":"20%"},
		      {"data" : "fieldsel","width":"20%"},
		],
		ajax:{
			url: webpath + "/form/selectField",
			"type" : "POST",
			dataType : "json",
			async:false,
			/*"data" : {
				templatecode : udtemplatecode
			},*/
			"data": function(d) {// 查询参数
				console.log(d);
				return $.extend({}, d, {
					"jsonStr" :udtemplatecode
				});
			},
			"dataSrc" : function(json) {
				json.iTotalRecords = json.total;
				json.iTotalDisplayRecords = json.total;
				return json.data;
			}
		},
		columnDefs : [
		              {
			"targets" : 0,//备注列
			"data" : null,
			"width" : '20%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无备注';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 1,//备注列
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无备注';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 2,//备注列
			"data" : null,
			"width" : '20%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无备注';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 3,//备注列
			"data" : null,
			"width" : '20%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无备注';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 4,//备注列
			"data" : null,
			"width" : '20%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无备注';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 5,// 表单说明
			"data" : null,
			"width" : '30%',
			"render" : function(data, type,row) {
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="updateTenant(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe628;</i></a>';
				      html += '&nbsp;&nbsp;';
				      return html;
			   }
		}],
		 "autoWidth": true,
		 "paginate": true,
		 "width":"100%",
		 "pageLength": 8,
		 "displayStart": 0
	});
	
	var layer1 = layer.open({
		type : 1,
		title : '<i class="iconfont">&#xe633;</i>&nbsp;字段管理',
		area : [ '900px', '540px' ],
		content: $("#fieldManage")
		
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
	"0" : "/resources/img/icon/16x16/floder1-black.png",
	"1" : "/resources/img/icon/16x16/link1-black.png",
	"2" : "/resources/img/icon/16x16/link-black.png",
	"3" : "/resources/img/icon/16x16/fun-black.png",
};
