$(document).ready(function(){
	initUrlexplainTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addurlexplainBtn").bind("click",addUrlexplain);
	resourceTree.init();
	
	// 为datatable外的父级设置高度
	$('#urlexplainTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#urlexplainTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#urlexplainTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格
function initUrlexplainTable(){
	$("#urlexplainTable").width("100%").dataTable({
		"columns":[
		           { "data": "id" },
		            { "data": "introduce" },
		            { "data": "envname" },
		            { "data": "getUserUrl" },
		            { "data": "targetUrl" },
		            { "data": "status" },
		            { "data": "sign" },
		            { "data": "createdate" },
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
		columnDefs:[{
			"targets" : 0,//目标地址id
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
		},
		{
			"targets" : 1,//目标地址对接说明
			"data" : null,
			"render" : function(data, type,row) {
				var html = '';
				if(data==null||data==""){
					html += '暂无环境名称';
				}else{
					html += data;
				}
				return html;
			}
		},
		{
			"targets" : 2,//目标地址名称
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无地址';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 3,//获取用户地址
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无地址';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 4,//目标地址
			"data" : null,
			"width" : '12%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无地址';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 5,//状态
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				var html = '';
				if(data=="1"){
					html += '<span style="color:green;">正常</span>';
				}else{
					html += '<span style="color:red;">异常</span>';
				}
				return html;
			}
		},
		{
			"targets" : 6,//标识
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无地址';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			"targets" : 7,//创建日期
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无地址';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},
		{
			  "targets" : 8,//操作按钮目标列
			  "data" : null,
			  "render" : function(data, type,row) {
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="updateUrlexplain(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe628;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="deleteUrlexplain(\''+id+'\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
				      return html;
			   }
		}]
	});
}


//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#urlexplainTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#urlexplainSearchForm"));
}

//添加目标地址配置
function addUrlexplain(){
	var formObj = $("#addurlexplainForm");
	form.clear(formObj);
//	form.cleanValidator(formObj);
	layer.open({
		type: 1,
        title:'<i class="iconfont">&#xe641;</i>&nbsp;新增目标地址配置',
        area: ['300px', '450px'],
        content: $("#addurlexplain"),
        btn: ['确定','取消'],
        btn1: function(index, layero){//确定按钮回调
        	//if(form.isValidator(formObj)){
        		$.ajax({
    				"url":webpath+"/urlExplain/insert",
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

//修改目标地址配置
function updateUrlexplain(id){
	$.ajax({
		"url":webpath+"/urlExplain/getUrlExplainById",
		"type":"POST",
		dataType:"json",
		data:{
			id:id
		},
		success:function(data){
			console.log(data.urlexplainname);
			var formObj = $("#updateurlexplainForm");
			//form.clear(formObj);
			//form.cleanValidator(formObj);
			form.load(formObj,data);
			//var vals='',ids='';
			$("[name=id]").val(data.id);
			$("[name=introduce]").val(data.introduce);
			$("[name=envname]").val(data.envname);
			$("[name=getuserUrl]").val(data.getuserUrl);
			$("[name=targetUrl]").val(data.targetUrl);
			$("[name=status]").val(data.status);
			$("[name=sign]").val(data.sign);
			
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe633;</i>&nbsp;修改目标地址配置',
		        area: ['300px', '450px'],
		        content: $("#updateurlexplain"),
		        btn: ['确定','取消'],
		        btn1: function(index, layero){//确定按钮回调
		        	//if(form.isValidator(formObj)){
		        		$.ajax({
		    				"url":webpath+"/urlExplain/update",
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
//删除目标地址配置
function deleteUrlexplain(id){
	layer.confirm('删除该角色？（删除后不可恢复）', {
        icon: 3,
        btn: ['是','否'] //按钮
  	  }, function(index, layero){
  		  $.ajax({//初始化组织机构树
  				"url":webpath+"/urlExplain/delete",
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
