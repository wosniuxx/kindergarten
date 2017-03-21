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

	$("#formTable")
			.width("100%")
			.dataTable(
					{
						"columns" : [ {
							"data" : "tablecnname"
						}, {
							"data" : "remark"
						}, ],
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
										var udtemplatecode = row.udtemplatecode;
										var html = '<a href="javascript:void(0);" onclick="updateForm(\''
												+ id
												+ '\')" class="icon-wrap" title="修改"><i class="iconfont i-btn">&#xe628;</i></a>';
										html += '&nbsp;&nbsp;';
										html += '<a href="javascript:void(0);" onclick="deleteForm(\''
												+ id
												+ '\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
										html += '&nbsp;&nbsp;';
										html += '<a href="javascript:void(0);" onclick="fieldManageClick(\''
												+ udtemplatecode
												+ '\')" class="icon-wrap" title="字段管理"><i class="iconfont i-btn">&#xe61c;</i></a>';
										html += '&nbsp;&nbsp;';

										html += '<a href="javascript:void(0);" onclick="sheji(\''
												+ id
												+ '\')" class="icon-wrap" title="设计"><i class="iconfont i-btn">&#xe6aa;</i></a>';
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

// 新增表单
function addForm() {
	var formObj = $("#frm");
	form.clear(formObj);
	form.cleanValidator(formObj);
	layer.open({
		type : 1,
		title : '<i class="iconfont">&#xe641;</i>&nbsp;新增表单',
		area : [ '400px', '340px' ],
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

// 删除表单
function deleteForm(id) {
	layer.confirm('删除该表单？（删除后不可恢复）', {
		icon : 3,
		btn : [ '是', '否' ]
	// 按钮
	}, function(index, layero) {
		$.ajax({
			"url" : webpath + "/form/delete",
			"type" : "POST",
			dataType : "json",
			data : {
				id : id
			},
			success : function(data) {
				layer.close(index);
				reloadTableData(true);
			}
		});
	});
}

// 修改表单
function updateForm(id) {
	$
			.ajax({
				"url" : webpath + "/form/getFormById",
				"type" : "POST",
				dataType : "json",
				data : {
					id : id
				},
				success : function(data) {
					var formObj = $("#updateFormTable");
					form.clear(formObj);
					form.cleanValidator(formObj);
					form.load(formObj, data);

					// $("[name=tablecnname]").val(data.tablecnname);
					// $("[name=remark]").val(data.remark);
					// $("[name=exampletitle]").val(data.exampletitle);
					// $("[name=id]").val(data.id);
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
								"url" : webpath + "/form/updateForm",
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
	$("#fieldTable")
			.dataTable(
					{
						"columns" : [ {
							"data" : "fieldename",
							"width" : "20%"
						}, {
							"data" : "fieldcname",
							"width" : "20%"
						}, {
							"data" : "fieldtype",
							"width" : "10%"
						}, ],
						ajax : {
							url : webpath + "/form/selectField",
							"type" : "POST",
							dataType : "json",
							async : false,

							"data" : function(d) {// 查询参数
								filetabledata = d;
								return $.extend({}, d, {
									"jsonStr" : udtemplatecode
								});
							},
							"dataSrc" : function(json) {
								json.iTotalRecords = json.total;
								json.iTotalDisplayRecords = json.total;
								return json.data;
							}
						},
						"autoWidth" : true,
						"paginate" : true,
						"width" : "100%",
						"pageLength" : 8,
						"displayStart" : 0,
						columnDefs : [
								{
									"targets" : 0,
									"data" : null,
									"width" : '10%',
									"render" : function(data, type, row) {
										var html = '<input type="radio" value="'
												+ data
												+ '" name="radio" class="n-valid">';
										return html;
									}
								},
								{
									"targets" : 1,
									"data" : null,
									"width" : '10%',
									"render" : function(data, type, row) {
										var html = '';
										if (data == null || data == "") {
											html += '暂无内容';
										} else {
											html += data
													+ '<input name="fieldcname" value="'
													+ data + '" type="hidden">';
										}
										return html;
									}
								},
								{
									"targets" : 2,
									"data" : null,
									"width" : '10%',
									"render" : function(data, type, row) {
										var html = '';
										if (data == null || data == "") {
											html += '暂无内容';
										} else {
											html += data
													+ '<input name="fieldtype" value="'
													+ data + '" type="hidden">';
										}
										return html;
									}
								}, ]
					});
	var layer1 = layer.open({
		type : 1,
		title : '<i class="iconfont">&#xe633;</i>&nbsp;插入字段',
		area : [ '500px', '440px' ],
		content : $("#insertField"),
		success : function() {
		},
		btn : [ '确定', '取消' ],
		btn1 : function(index, layero) {// 确定按钮回调
			var strRadio = "";
			var strFieldEName = "";
			var arrRadio = document.getElementsByName("radio");

			var arrFieldEName = document.getElementsByName("fieldcname");

			for (var i = 0; i < arrRadio.length; i++) {
				if (arrRadio[i].checked) {
					strRadio = arrRadio[i].value;
					strFieldEName = arrFieldEName[i].value;
				}
			}
			if (strRadio.length == 0) {
				alert("请选择插入字段。");
				return false;
			}
			$('#exampletitle').val(
					$('#exampletitle').val() + "【" + strRadio + ":"
							+ strFieldEName + "】");
			window.returnValue = {
				fieldename : strRadio,
				fieldcname : strFieldEName
			};
			layer.close(index);
		},
		btn2 : function(index, layero) {// 确定按钮回调
			layer.close(index);
		},
		close : function() {
			reloadTableData(true);
		}
	});
}
var filetabledata = "";
var manage = "";
// 字段弹窗
function fieldManageClick(udtemplatecode) {

	manage = $("#fieldManageTable")
			.dataTable(
					{
						"columns" : [ {
							"data" : "fieldcname",
							"width" : "20%"
						}, {
							"data" : "fieldtype",
							"width" : "10%"
						}, {
							"data" : "datalenth",
							"width" : "10%"
						}, {
							"data" : "need",
							"width" : "10%"
						}, ],
						ajax : {
							url : webpath + "/form/selectField",
							"type" : "POST",
							dataType : "json",
							async : false,

							"data" : function(d) {// 查询参数
								filetabledata = d;
								return $.extend({}, d, {
									"jsonStr" : udtemplatecode
								});
							},
							"dataSrc" : function(json) {
								json.iTotalRecords = json.total;
								json.iTotalDisplayRecords = json.total;
								return json.data;
							}
						},

						"autoWidth" : true,
						"paginate" : true,
						"width" : "100%",
						"pageLength" : 8,
						"displayStart" : 0,
						columnDefs : [
								{
									"targets" : 3,// 是否为空列
									"data" : null,
									"render" : function(data, type, row) {
										var html = '';
										if (data == "1") {
											html += '<span style="color:green;">是</span>';
										} else {
											html += '<span style="color:red;">否</span>';
										}
										return html;
									}
								},
								{

									"targets" : 4,// 操作按钮目标列
									"data" : null,
									"width" : "20%",
									"render" : function(data, type, row) {
										var id = row.id;
										delflag = data.delflag;
										if (delflag == "0") {
											delflag = "1";
											var html = '<a href="javascript:void(0);" onclick="updateField(\''
													+ id
													+ '\')" class="icon-wrap" title="修改"><i class="iconfont i-btn">&#xe628;</i></a>';
											html += '&nbsp;&nbsp;';
											html += '<a href="javascript:void(0);" onclick="StopandStartField('
													+ delflag
													+ ','
													+ id
													+ ')" class="icon-wrap" title="停用"><i class="iconfont i-btn">&#xe614;</i></a>';
											html += "&nbsp;&nbsp;";
											return html;
										} else {
											delflag = "0";
											var html = '<a href="javascript:void(0);" onclick="StopandStartField("'
													+ delflag
													+ '","'
													+ id
													+ '")" class="icon-wrap" title="启用"><i class="iconfont i-btn">&#xe614;</i></a>';
											html += '&nbsp;&nbsp;';
											return html;
										}
									}
								} ]
					});

	$("#start-file-btn").click(function() {
		fieldStateChange(udtemplatecode, "0", filetabledata);
	});
	$("#stop-file-btn").click(function() {
		fieldStateChange(udtemplatecode, "1", filetabledata);
	});
	$("#add-file-btn").click(function() {
		addFile(udtemplatecode);
	});
	var layer1 = layer.open({
		type : 1,
		title : '<i class="iconfont">&#xe633;</i>&nbsp;字段管理',
		area : [ '900px', '540px' ],
		content : $("#fieldManage"),
		success : function() {
		},
		close : function() {
			reloadTableData(true);
		}

	});

}

// 新增字段
function addFile(udtemplatecode) {
	var formObj = $("#addFieldForm");
	form.clear(formObj);
	form.cleanValidator(formObj);
	templatecode = udtemplatecode;
	var index = layer.open({
		type : 1,
		title : '<i class="iconfont">&#xe641;</i>&nbsp;新增字段',
		area : [ '400px', '340px' ],
		content : $("#addField"),
		btn : [ '确定', '取消' ],
		btn1 : function(index, layero) {// 确定按钮回调
			var div = '<input id="templatecode" name="templatecode" value="'
					+ templatecode + '" type="hidden">';
			document.getElementById("templatecodeHide").innerHTML = div;
			$.ajax({
				"url" : webpath + "/form/insertField",
				"type" : "POST",
				dataType : "json",
				data : form.serializeJson(formObj),
				success : function(data) {
					layer.close(index);
					manage.fnDraw();
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
// 修改字段
function updateField(id) {
	$.ajax({
		"url" : webpath + "/form/getManageById",
		"type" : "POST",
		dataType : "json",
		data : {
			id : id
		},
		success : function(data) {
			var formObj = $("#addFieldForm");
			 form.clear(formObj);
			 form.cleanValidator(formObj);
			 form.load(formObj,data);
			var index = layer.open({
				type : 1,
				title : '<i class="iconfont">&#xe633;</i>&nbsp;修改字段',
				area : [ '400px', '340px' ],
				content : $("#addField"),
				btn : [ '确定', '取消' ],
				btn1 : function(index, layero) {// 确定按钮回调
					if (form.isValidator(formObj)) {
						$.ajax({
							"url" : webpath + "/form/updateField",
							"type" : "POST",
							dataType : "json",
							data : form.serializeJson(formObj),
							success : function(data) {
								layer.close(index);
								manage.fnDraw();
								reloadTableData(true);
							}
						});
					}
				},
				btn2 : function(index, layero) {// 确定按钮回调
					layer.close(index);
					//manage.fnDraw();
				}
			});
		}
	});
}
// 停启用字段
function StopandStartField(delflag, id) {
	$.ajax({
		"url" : webpath + "/form/fieldStateChange",
		"type" : "POST",
		dataType : "json",
		data : {
			delflag : delflag,
			id : id
		},
		success : function(data) {
			layer.close();
			reloadTableData(true);
		}

	});
}

// 启用停用字段切换查询
function fieldStateChange(udtemplatecode, delflag, filetabledata) {
	var data = (function(d) {
		return $.extend({}, filetabledata, {
			"json" : JSON.stringify({
				"templatecode" : udtemplatecode,
				"delflag" : delflag
			})
		});
	})(data)
	console.log(data);
	$.ajax({
		url : webpath + "/form/fieldState",
		type : "POST",
		dataType : "json",
		data : data,
		success : function(data) {
			console.log(data);
			// layer.close();
			// manage.fnDraw();
			// reloadTableData(true);
		}

	});
}

var resourceTree = {
	treeObj : null,
	setting : {
		data : {
			simpleData : {
				enable : true,
				idKey : 'resourcesId',
				pIdKey : 'parentId'
			},
			key : {
				name : 'resourcesName',
				url : 'xurl'
			}
		},
		check : {
			enable : true,
			chkboxType : {
				"Y" : "p",
				"N" : "p"
			}
		}
	},
	init : function() {
		if (resourceTree.treeObj != null) {
			resourceTree.treeObj.destroy()
		}
		$.ajax({// 初始化组织机构树
			"url" : webpath + "/role/resources",
			"type" : "POST",
			dataType : "json",
			success : function(data) {
				if (data != null && data.length > 0) {
					for (var i = 0; i < data.length; i++) {
						data[i].icon = webpath
								+ resourceTypeIcon[data[i].resourcesTypeId];
					}
					resourceTree.treeObj = $.fn.zTree.init($("#resourceTree"),
							resourceTree.setting, data);
					resourceTree.treeObj.expandAll(true);
				} else {
					layer.msg('暂无数据', {
						time : 1000,
						icon : 5
					});
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
