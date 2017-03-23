$(document).ready(function(){
	
	$("#getUrlBtn").bind("click",getUrl);
	
	// 为datatable外的父级设置高度
	$('#urlexplainTable_wrapper').css('height', $('.panel-body').height()-60);
	// 动态为表格添加父级
	$('#urlexplainTable').wrap('<div class="tab-wrapper"></div>');
	$('.tab-wrapper').css('height', $('#urlexplainTable_wrapper').height()-63);
	$('.tab-wrapper').niceScroll({ cursorcolor: "#ccc", horizrailenabled: false});
	
	var proresult;
	getTargetUrl();
	$("#envname").change(function(){
		getTargetUrl();
	})
	
	if($("#type").val() == "update"){
		$("#envname option").each(function(){
			if($(this).attr("eoname") == urlExplain.envname){
				$(this).attr("selected","selected");
			}
		})
		getTargetUrl();
		$("#geturl option").each(function(){
			if($(this).attr("ogname") == urlExplain.getUserUrl){
				$(this).attr("selected","selected");
			}
		})
	}
	
});

function getUrl(){
	if($("#type").val() == "update"){
		$("#okbtn").html('<i class="iconfont">&#xe8c1;</i>修改');
		var url = webpath+"/urlExplain/update"
	}else{
		var url = webpath+"/urlExplain/insert"
	}
	var envnameservice  = $("#envname option:selected").attr("eoname");
	var envname = $("#envname").val();
	var sign = $("#sign").val();
	var targeturl = $("#targeturl").val();
	var proname = ($("#targeturl option:selected").text());
	var istoken = $("#geturl").val();
	if(istoken == "1"){
		getTargetUrlPro(proname);
		var content = envname+"/"+proresult+"/"+sign+"?return="+targeturl+"&token=";
	}else{
		getTargetUrlPro(proname);
		var content = envname+"/"+proresult+"/"+sign+"?return="+targeturl;
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
		var targetUrlName = $("#targeturl option:selected").text();
		
		var data = form.serializeJson(formObj);
		var datall = new Object();
		datall=data;
		datall.envname=envnameservice;
		datall.targetUrl=targetUrlName;
		datall.getUserUrl=getUserUrlName;
		
		$.ajax({
			"url":url,
			"type":"POST",
			dataType:"json",
			data: datall,
			success:function(){
				location.href = webpath+'/urlExplain/index';
			}
		});
	})
}

function getTargetUrl(){
	$("#envname option").each(function(i,o){
		if($(this).is(":selected")){
			$.ajax({
				"url":webpath+"/targetUrl/getTargetUrl",
				"type":"POST",
				dataType:"json",
				data: {
					"envname":$(this).text()
				},
				success:function(data){
					$("#targeturl").empty();
					for(var i=0;i<data.length;i++){
						  $("#targeturl").append("<option value='"+data[i].targetUrl+
								  "',toname='"+data[i].name+"'>"+data[i].name+
								  "</option>");
					}
					if($("#type").val() == "update"){
						$("#targeturl option").each(function(){
							$("#targeturl option").each(function(){
								if($(this).text() == urlExplain.targetUrl){
									$(this).attr("selected","selected");
								}
							})
						})
					}
				}
			});
		}
	})
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

