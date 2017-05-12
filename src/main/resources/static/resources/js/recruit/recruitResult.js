$(document).ready(function(){
	initTable();
	
//	$("#searchBtn").bind("click",reloadTableData);
	$("#searchBtn").bind("click",initTable);
	$("#resetBtn").bind("click",resetForm);
	resourceTree.init();
	
	
});
var tabledata ;
//初始化用户列表表格
function initTable(){

	$("#resultTable").width("100%").dataTable({
		"columns":[
		           { "data": "childname" },
		            { "data": "childage" },
		            { "data": "blood_type" },
		            { "data": "id_residence" },
		            { "data": "parentname" },
		            { "data": "tel" },
		            { "data": "recruited" },
		            { "data": "createtime" },
		            { "data": "recruited" },
		            { "data": "money" }
		           
		 ],
		 ajax: {
		     url:webpath+'/Recruit/selectbytel',
		     "type": 'POST',
		     "async":false,
		     "data": function (d) {//查询参数
		           return $.extend( {}, d, {
		              "jsonStr": form.serializeStr($("#SearchForm"))
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
			"targets" : 0,//孩子姓名
			"data" : null,
			"render" : function(data, type,row) {
				/*var html = '';
				if(data==null||data==""){
					html += '暂无信息';
				}else{
					html += data;
				}*/
				return '123';
			}
		},{
			"targets" : 1,//孩子年龄
			
			"render" : function(data, type,row) {
				alert(data);
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 2,//血型
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 3,//户口所在地
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 4,//父母姓名
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 5,//联系方式
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 6,//居住地
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 7,//录入时间
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data == null || data == ""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 8,//是否录取
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data == null || data == ""){
					  html += '等待处理';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		},{
			"targets" : 9,//是否缴费
			"data" : null,
			"render" : function(data, type,row) {
				  var html = '';
				  if(data == null || data == ""){
					  html += '等待处理';
				  }else{
					  html += data;
				  }
			      return '123';
			   }
		}]
		
		
	});
	
}


//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#resultTable").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#SearchForm"));
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
