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
		            { "data": "studentnum" },
		            { "data": "name" },
		            { "data": "password" },
		            { "data": "classed" },
		 ],
		 ajax: {
		     url:webpath+'/Child/selectPage',
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
			"width" : '20%',
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
			"width" : '20%',
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
			"targets" : 3,//班级
			"data" : null,
			"width" : '20%',
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
			  "targets" : 4,//操作按钮目标列
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
