$(document).ready(function(){
	
	var proresult;
	
	$( document ).tooltip();
	$("#getUrlBtn").bind("click",getUrl);
	
	// 为datatable外的父级设置高度
	$('#urlexplainTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#urlexplainTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#urlexplainTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
	
	
});

function getUrl(){
	if($("#type").val() == "update"){
		var url = webpath+"/urlModel/update"
	}else{
		var url = webpath+"/urlModel/insert"
	}
	
	var precontent;
	var procontent;
	
	var sign = $("#sign").val();
	var targeturl = $("#targeturl").val();
	var proname = ($("#targeturl option:selected").text());
	var istoken = $("#geturl").val();
	getTargetUrlPro(proname);
	
	precontent = "http://clyxys.yz.local:8080/"+proresult+sign+"?return="+targeturl;
	procontent = "http://10.245.2.222/"+proresult+sign+"?return="+targeturl;
	
	$("#precontent").val(precontent);
	$("#procontent").val(procontent);
	layer.open({
		type: 1,
		skin: 'demo-class', //样式类名
		anim: 5,
		shadeClose: true, //开启遮罩关闭
		area: ['700px', '400px'],
		offset: ['60px', '400px'],
		title: '接口预览',
		content: $("#showurl"),
		btn: ['生成','取消'],
		btn1: function(index, layero){//确定按钮回调
			var formObj = $("#urlmodelAddForm");
			form.cleanValidator(formObj);
			var introduce = $("#introduce").val();
			var getUserUrlName = $("#geturl option:selected").attr("ogname");
			var targetUrlName = $("#targeturl option:selected").text();
			var data = form.serializeJson(formObj);
			var datall = new Object();
			datall=data;
			datall.targetUrl=targetUrlName;
			datall.getUserUrl=getUserUrlName;
			
			if(form.isValidator(formObj)){
				$.ajax({
					"url":url,
					"type":"POST",
					dataType:"json",
					data: datall,
					success:function(){
						location.href = webpath+'/urlModel/index';
					}
				});
			}
	    },
	    btn2: function(index, layero){//确定按钮回调
        	layer.close(index);
	    }
		});     
		  
	}

function getTargetUrlPro(proname){
	$("#targeturl option").each(function(i,o){
		if($(this).is(":selected")){
			$.ajax({
				"url":webpath+"/targetUrl/getTargetUrlPro",
				"type":"POST",
				dataType:"json",
				async : false,
				data: {
					"name":proname
				},
				success:function(data){
					for(var i=0;i<data.length;i++){
						proresult = data[i].productname;
					}
				}
			})
		}
	})
}


