$(document).ready(function(){
	initurlexplainTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addUrlBtn").bind("click",addUrl);
	
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
				  var id = row.id;
				  var html =  '<a href="javascript:void(0);" onclick="updateUrl(\''+id+'\')" class="icon-wrap" title="编辑"><i class="iconfont i-btn">&#xe66f;</i></a>';
				      html += '&nbsp;&nbsp;';
				      html +=  '<a href="javascript:void(0);" onclick="deleteUrl(\''+id+'\')" class="icon-wrap" title="删除"><i class="iconfont i-btn">&#xe614;</i></a>';
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
	form.clear($("#urlexplainSearchForm"));
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
function updateUrl(id){
	location.href = webpath+'/urlExplain/update?id='+id+"&type=update";
	/*$.ajax({//初始化组织机构树
			"url":webpath+"/urlExplain/updateById",
			"type":"GET",
			dataType:"json",
			data:{
             id:id
			}
	})*/
}
//删除角色
function deleteUrl(id){
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


