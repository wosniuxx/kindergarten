$(document).ready(function(){
	 $( document ).tooltip();
	initurlexplainTable();
	
	$("#searchBtn").bind("click",reloadTableData);
	$("#resetBtn").bind("click",resetForm);
	$("#addUrlBtn").bind("click",addUrl);
	$("#addYunUrlBtn").bind("click",addYunUrl);
	
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
		           { "data": "prefinalUrl" },
		           { "data": "profinalUrl" },
		            { "data": "status" }
		 ],
		 ajax: {
		     url:webpath+'/urlModel/selectPage',
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
			"targets" : 0,
			"data" : null,
			"render" : function(data, type,row) {
				var prefinalUrl = row.prefinalUrl;
				var profinalUrl = row.profinalUrl;
				var html =  '<a href="javascript:void(0);" onclick="selectfinalurl(\''+prefinalUrl+'\',\''+profinalUrl+'\')">'+data+'</a>';
				return html;
			}
		},
		{
			"targets" : 1,//操作按钮目标列
			"data" : null,
			"visible": false,
		},
		{
			"targets" : 2,//操作按钮目标列
			"data" : null,
			"visible": false,
		},
		{
			"targets" : 3,//操作按钮目标列
			"data" : null,
			"render" : function(data, type,row) {
				  var id = row.id;
				  var status = data;
				  var html = '';
				  if(data=="1"){
					  html += '<a href="javascript:void(0);" onclick="updateUrlStatus(\''+id+'\',\''+status+'\')"><span style="color:green;">启用</span></a>';
				  }else{
					  html += '<a href="javascript:void(0);" onclick="updateUrlStatus(\''+id+'\',\''+status+'\')"><span style="color:red;">停用</span></a>';
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
	location.href = webpath+'/urlModel/insert';
	/*$.ajax({
		type:'GET',
		url:webpath+'/urlExplain/insert'
	});*/
}

//添加云门户注册信息
function addYunUrl(){
	location.href = webpath+'/urlModel/tourlexplainyun';
	/*$.ajax({
		type:'GET',
		url:webpath+'/urlExplain/insert'
	});*/
}

//修改租户
function updateUrl(id){
	location.href = webpath+'/urlModel/update?id='+id+"&type=update";
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
	layer.confirm('删除该链接？（删除后不可恢复）', {
        icon: 3,
        btn: ['是','否'] //按钮
  	  }, function(index, layero){
  		  $.ajax({//初始化组织机构树
  				"url":webpath+"/urlModel/delete",
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

function selectfinalurl(prefinalUrl,profinalUrl){
	console.log(prefinalUrl);
	$("#precontent").val(prefinalUrl);
	$("#procontent").val(profinalUrl);
	layer.open({
	  type: 1,
	  title:"接口预览",
	  skin: 'layui-layer-lan', //样式类名
	  area: ['500px', '220px'],
	  closeBtn: 0, //不显示关闭按钮
	  anim:2,
	  shadeClose: true, //开启遮罩关闭
	  content: $("#showurl")
	});
}

function updateUrlStatus(id,status){
	if(status==0){
		status = 1;
	}else if(status==1){
		status = 0;
	}
	$.ajax({
		"url":webpath+"/urlModel/update",
		"type":"POST",
		dataType:"json",
		data:{
           id:id,
           status:status
		},
		success:function(data){
			reloadTableData(true);
		}
	})
}


