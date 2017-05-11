$(document).ready(function(){
	initTable();
	
	
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
		            { "data": "noticeTitle" },
		            { "data": "pubdate" },
		            { "data": "pubUserId" },
		 ],
		 ajax: {
		     url:webpath+'/noticeToPerson/find',
		     "type": 'POST',
		     "data": function (d) {//查询参数
		           return $.extend( {}, d, {
		              "jsonStr": form.serializeStr($("#SearchForm"))
		           });
		     },
		},
		columnDefs:[
		{
			"targets" : 0,//教师编号
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
			"targets" : 1,//教师名称
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
			"targets" : 2,//密码
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
		}]
	});
}
