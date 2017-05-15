$(document).ready(function(){
	$("#searchBtn").click(function(){
		var tel = $("[name=tel]").val();
		 $.ajax({
			type:"POST",
			url:webpath + "/Recruit/selectbytel",
		    data:{
		    	"tel":tel
		    },
		    dataType: "json",
			success:function(data){
			}
		}); 
	});
});

