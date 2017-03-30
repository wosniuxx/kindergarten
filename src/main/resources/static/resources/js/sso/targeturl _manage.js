$(document).ready(function(){
	initTargetUrlTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addtargeturlBtn").bind("click",addTargetUrl);
	resourceTree.init();
	
	// 为datatable外的父级设置高度
	$('#targeturlTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#targeturlTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#targeturlTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格
function initTargetUrlTable(){
	$("#targeturlTable").width("100%").dataTable({
		"columns":[
		            { "data": "name" },
		            { "data": "targetUrl" },
		            { "data": "envname" },
		            { "data": "state" },
		            { "data": "productname" },
		 ],
		 ajax: {
		     url:webpath+'/targetUrl/selectPage',
		     "type": 'POST',
		     "data": function (d) {//查询参数
		           return $.extend( {}, d, {
		              "jsonStr": form.serializeStr($("#targeturlSearchForm"))
		           });
		     },
		     "dataSrc": function (json) {
		           json.iTotalRecords = json.total;
		           json.iTotalDisplayRecords = json.total;
		           return json.data;
		     }
		},
		columnDefs:[{
			"targets" : 0,//接口地址名称
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
			"targets" : 1,//获取地址url
			"data" : null,
			"width" : '15%',
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
			"targets" : 2,//获取环境名称
			"data" : null,
			"width" : '15%',
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
			"targets" : 3,//环境状态
			"data" : null,
			"width" : '15%',
			"render" : function(data, type,row) {
				var html = '';
				if(data=="1"){
					html += '<span style="color:green;">正常</span>';
				}else{
					html += '<span style="color:red;">异常</span>';
				}
				return html;
			}
		},{
			"targets" : 4,//productname
			"data" : null,
			"width" : '15%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			  "targets" : 5,//操作按钮目标列
			  "data" : null,
			  "width" : '15%',
			  "render" : function(data, type,row) {
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="updateTargetUrl(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe628;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="deleteTargetUrl(\''+id+'\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
				      return html;
			   }
		}]
	});
}


//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#targeturlTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#targeturlSearchForm"));
}

//添加
function addTargetUrl(){
	var formObj = $("#addTargetUrlForm");
	form.clear(formObj);
//	form.cleanValidator(formObj);
	
	$.ajax({
		"url":webpath+"/Env/findAll",
		"type":"POST",
		dataType:"json",
		success:function(data){
			$("#selectenvname").empty();
			for(var i=0;i<data.length;i++){
				$("#selectenvname").append("<option value='"+data[i].envname+
						  "'>"+data[i].envname+
						  "</option>");
			}
	layer.open({
		type: 1,
        title:'<i class="iconfont">&#xe641;</i>&nbsp;新增目标地址配置',
        area: ['300px', '400px'],
        content: $("#addtargeturl"),
        btn: ['确定','取消'],
        btn1: function(index, layero){//确定按钮回调
        	//if(form.isValidator(formObj)){
        		$.ajax({
    				"url":webpath+"/targetUrl/insert",
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

//修改
function updateTargetUrl(id){
	$.ajax({
		"url":webpath+"/Env/findAll",
		"type":"POST",
		dataType:"json",
		success:function(envdata){
			$("#selectenvname").empty();
			for(var i=0;i<envdata.length;i++){
				console.log(envdata[i].envname);
				$("#selectedenvname").append("<option value='"+envdata[i].envname+
						  "'>"+envdata[i].envname+
						  "</option>");
			}
		
	
	
	$.ajax({
		"url":webpath+"/targetUrl/getTargetUrlById",
		"type":"POST",
		dataType:"json",
		data:{
			id:id
		},
		success:function(data){
			
			
			var formObj = $("#updateTargetUrlForm");
			form.clear(formObj);
			form.cleanValidator(formObj);
			form.load(formObj,data);
			
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe633;</i>&nbsp;修改目标地址配置',
		        area: ['300px', '350px'],
		        content: $("#updatetargeturl"),
		        btn: ['确定','取消'],
		        btn1: function(index, layero){//确定按钮回调
		        	//if(form.isValidator(formObj)){
		        		$.ajax({
		    				"url":webpath+"/targetUrl/update",
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
	});
}
//删除环境
function deleteTargetUrl(id){
	layer.confirm('删除该环境？（删除后不可恢复）', {
        icon: 3,
        btn: ['是','否'] //按钮
  	  }, function(index, layero){
  		  $.ajax({//初始化组织机构树
  				"url":webpath+"/targetUrl/delete",
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
