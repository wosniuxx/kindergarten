$(document).ready(function(){
	
	$("#getUrlBtn").bind("click",getUrl);
	
	// 为datatable外的父级设置高度
	$('#urlexplainTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#urlexplainTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#urlexplainTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
});


//初始化用户列表表格


//刷新数据  true  整个刷新      false 保留当前页刷新


//重置查询条件

//添加角色
function getUrl(){

	var envnameservice  = $("#envname option:selected").attr("eoname");
	var envname = $("#envname").val();
	var sign = $("#sign").val();
	var targeturl = $("#targeturl").val();
	var istoken = $("#geturl").val();
	if(istoken == "1"){
		var content = envname+"/epmsso/"+sign+"?return="+targeturl+"&token=";
	}else{
		var content = envname+"/epmsso/"+sign+"?return="+targeturl;
	}
	$(".arrowimg").css({
        "transform": "translate3d(0, 0, 0)",
        "-ms-transform": "translate3d(0, 0, 0)",
        "-o-transform": "translate3d(0, 0, 0)",
        "-webkit-transform": "translate3d(0, 0, 0)",
        "-moz-transform": "translate3d(0, 0, 0)",
        "opacity": 1
    });
	var smstime = setTimeout(function(){
		$(".arrowimg").css({
	        "transform": "translate3d(0, 50px, 0)",
	        "-ms-transform": "translate3d(0,  50px, 0)",
	        "-o-transform": "translate3d(0,  50px, 0)",
	        "-webkit-transform": "translate3d(0,  50px, 0)",
	        "-moz-transform": "translate3d(0,  50px, 0)",
	        "opacity": 0
	    });
		
	}, 1000 )
	$("#okbtn").show();
	$(".conurl").text(content);
	$("#okbtn").click(function(){
		var formObj = $("#urlexplainAddForm");
		var introduce = $("introduce").val();
		var getUserUrlName = $("#geturl option:selected").attr("ogname");
		var targetUrlName = $("#targeturl option:selected").attr("toname");
		
		var data = form.serializeJson(formObj);
		var datall = new Object();
		datall=data;
		datall.envname=envnameservice;
		datall.targetUrl=targetUrlName;
		datall.getUserUrl=getUserUrlName;
		console.log(datall);
		
		$.ajax({
			"url":webpath+"/urlExplain/insert",
			"type":"POST",
			dataType:"json",
			data: datall
		});
	})
	/*layer.open({
		type: 1,
        title:'<i class="iconfont">&#xe633;</i>&nbsp;接口预览',
        area: ['900px', '200px'],
        content:'<div class="conurl">'+content+'</div>' ,
        btn: ['确定','取消'],
        btn1: function(index, layero){//确定按钮回调
        	//if(form.isValidator(formObj)){
        		$.ajax({
    				"url":webpath+"/tenant/update",
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
    });*/
	
}

