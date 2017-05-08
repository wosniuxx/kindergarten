$(document).ready(function(){
	initTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addBtn").bind("click",add);
	resourceTree.init();
	
	// 为datatable外的父级设置高度
	$('#Table_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#Table').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#Table_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格
function initTable(){
	$("#Table").width("100%").dataTable({
		"columns":[
		            { "data": "childname" },
		            { "data": "childage" },
		            { "data": "blood_type" },
		            { "data": "id_residence" },
		            { "data": "parentname" },
		            { "data": "tel" },
		            { "data": "residence" },
		            { "data": "createtime" },
		 ],
		 ajax: {
		     url:webpath+'/Recruit/selectPage',
		     "type": 'POST',
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
				var html = '';
				if(data==null||data==""){
					html += '暂无信息';
				}else{
					html += data;
				}
				return html;
			}
		},{
			"targets" : 1,//孩子年龄
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 2,//血型
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 3,//户口所在地
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 4,//父母姓名
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 5,//联系方式
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 6,//居住地
			"data" : null,
			"width" : '10%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data==null||data==""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			"targets" : 7,//录入时间
			"data" : null,
			"width" : '15%',
			"render" : function(data, type,row) {
				  var html = '';
				  if(data == null || data == ""){
					  html += '暂无信息';
				  }else{
					  html += data;
				  }
			      return html;
			   }
		},{
			  "targets" : 8,//操作按钮目标列
			  "data" : null,
			  "render" : function(data, type,row) {
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="update(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe628;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="deleteTeacher(\''+id+'\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
				      return html;
			   }
		}]
	});
}


//刷新数据  true  整个刷新      false 保留当前页刷新
function reloadTableData(isCurrentPage){
	$("#Table").dataTable().fnDraw(isCurrentPage==null?true:isCurrentPage);
}


//重置查询条件
function resetForm(){
	form.clear($("#SearchForm"));
}

//添加环境
function add(){
	var formObj = $("#addForm");
	form.clear(formObj);
//	form.cleanValidator(formObj);
	layer.open({
		type: 1,
        title:'<i class="iconfont">&#xe641;</i>&nbsp;新增招生信息',
        area: ['300px', '400px'],
        content: $("#add"),
        btn: ['确定','取消'],
        btn1: function(index, layero){//确定按钮回调
        	//if(form.isValidator(formObj)){
        		$.ajax({
    				"url":webpath+"/Recruit/insert",
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

//修改环境
function update(id){
	$.ajax({
		"url":webpath+"/Recruit/getById",
		"type":"POST",
		dataType:"json",
		data:{
			id:id
		},
		success:function(data){
			console.log(data.name);
			var formObj = $("#updateForm");
			//form.clear(formObj);
			//form.cleanValidator(formObj);
			form.load(formObj,data);
			/*var vals='',ids='';
			$("[name=id]").val(data.id);
			$("[name=envname]").val(data.envname);
			$("[name=service]").val(data.service);*/
			
			layer.open({
				type: 1,
		        title:'<i class="iconfont">&#xe633;</i>&nbsp;修改招生信息',
		        area: ['300px', '450px'],
		        content: $("#update"),
		        btn: ['确定','取消'],
		        btn1: function(index, layero){//确定按钮回调
		        	//if(form.isValidator(formObj)){
		        		$.ajax({
		    				"url":webpath+"/Recruit/update",
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
function deleteTeacher(id){
	layer.confirm('删除该信息？（删除后不可恢复）', {
        icon: 3,
        btn: ['是','否'] //按钮
  	  }, function(index, layero){
  		  $.ajax({//初始化组织机构树
  				"url":webpath+"/Recruit/delete",
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
