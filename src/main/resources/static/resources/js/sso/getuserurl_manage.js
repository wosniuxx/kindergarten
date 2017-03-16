$(document).ready(function(){
	initGetUserUrlTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addgetuserurlBtn").bind("click",addGetUserUrl);
	resourceTree.init();
	
	
	
	
	// 为datatable外的父级设置高度
	$('#getuserurlTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#getuserurlTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#getuserurlTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格
function initGetUserUrlTable(){
	$("#getuserurlTable").width("100%").dataTable({
		"columns":[
		           { "data": "id" },
		            { "data": "name" },
		            { "data": "getUserUrl" },
		            { "data": "method" },
		            { "data": "isToken" },
		 ],
		 ajax: {
		     url:webpath+'/GetUserUrl/selectPage',
		     "type": 'POST',
		     "data": function (d) {//查询参数
		           return $.extend( {}, d, {
		              "jsonStr": form.serializeStr($("#getuserurlSearchForm"))
		           });
		     },
		     "dataSrc": function (json) {
		           json.iTotalRecords = json.total;
		           json.iTotalDisplayRecords = json.total;
		           return json.data;
		     }
		},
		columnDefs:[{
			"targets" : 0,//id
			"data" : null,
			"width" : '17%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 1,//接口名称
			"data" : null,
			"render" : function(data, type,row) {
				var html = '';
				if(data==null||data==""){
					html += '暂无名称';
				}else{
					html += data;
				}
				return html;
			}
		},{
			"targets" : 2,//获取用户接口
			"data" : null,
			"width" : '17%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无获取用户接口';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 3,//获取用户数据类型
			"data" : null,
			"width" : '17%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无用户数据类型';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 4,//是否需要isToken
			"data" : null,
			"width" : '17%',
			"render" : function(data, type,row) {
				var html = '';
				if(data=="1"){
					html += '<span style="color:green;">是</span>';
				}else{
					html += '<span style="color:red;">否</span>';
				}
				return html;
			}
		},{
			  "targets" : 5,//操作按钮目标列
			  "data" : null,
			  "width" : '17%',
			  "render" : function(data, type,row) {
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="updateGetUserUrl(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe628;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="deleteGetUserUrl(\''+id+'\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
				      return html;
			   }
		}]
	});
}


//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#getuserurlTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#getuserurlSearchForm"));
}

//添加
function addGetUserUrl(){
	
	var formObj = $("#addGetUserUrlForm");
	form.clear(formObj);
//	form.cleanValidator(formObj);
	layer.open({
		type: 1,
        title:'<i class="iconfont">&#xe641;</i>&nbsp;新增用户接口配置',
        area: ['300px', '350px'],
        content: $("#addgetuserurl"),
        btn: ['确定','取消'],
        btn1: function(index, layero){//确定按钮回调
        	console.log(form.serializeJson(formObj));
        	//if(form.isValidator(formObj)){
        		$.ajax({
    				"url":webpath+"/GetUserUrl/insert",
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

//修改
function updateGetUserUrl(id){
	$.ajax({
		"url":webpath+"/GetUserUrl/getGetUserUrlById",
		"type":"POST",
		dataType:"json",
		data:{
			id:id
		},
		success:function(data){
			//console.log(data.getuserurlname);
			var formObj = $("#updateGetUserUrlForm");
			//form.clear(formObj);
			//form.cleanValidator(formObj);
			form.load(formObj,data);
			//var vals='',ids='';
			$("[name=id]").val(data.id);
			$("[name=name]").val(data.name);
			$("[name=getUserUrl]").val(data.getUserUrl);
			$("[name=method]").val(data.method);
			
			if($("[name=isToken]:checked").val!=data.isToken){
				$("[name=isToken]:checked").val(data.isToken);
			}
			
			
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe633;</i>&nbsp;修改用户接口配置',
		        area: ['300px', '350px'],
		        content: $("#updategetuserurl"),
		        btn: ['确定','取消'],
		        btn1: function(index, layero){//确定按钮回调
		        	
		        	
		        	//if(form.isValidator(formObj)){
		        		$.ajax({
		    				"url":webpath+"/GetUserUrl/update",
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
//删除环境
function deleteGetUserUrl(id){
	layer.confirm('删除该环境？（删除后不可恢复）', {
        icon: 3,
        btn: ['是','否'] //按钮
  	  }, function(index, layero){
  		  $.ajax({//初始化组织机构树
  				"url":webpath+"/GetUserUrl/delete",
  				"type":"POST",
  				dataType:"json",
  				data:{
                     id:id
  				},
  				success:function(data){
  					layer.close(index);
					reloadTableData(true);
  				}
  		   });
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