$(document).ready(function(){
	$("#searchBtn").bind("click",findForm);
	$("#resetBtn").bind("click",resetForm);
});

function findForm(){
	var tel = $("[name=tel]").val();
	$.ajax({
		type:"POST",
		url:webpath + "/Recruit/selectbytel",
	    data:{
	    	"tel":tel
	    },
	    dataType: "json",
		success:function(data){
			$("#Table  tr:not(:first)").empty();
			for(var i=0;i<data.length;i++){
				$("#Table").append("<tr style='font-size: 15px;'><td>"+data[i].childname+"</td>" +
						"<td>"+data[i].childage+"</td>"+
						"<td>"+data[i].blood_type+"</td>"+
						"<td>"+data[i].id_residence+"</td>"+
						"<td>"+data[i].parentname+"</td>"+
						"<td>"+data[i].tel+"</td>"+
						"<td>"+data[i].residence+"</td>"+
						"<td>"+data[i].createtime+"</td>"+
						"<td>"+data[i].recruited+"</td>"+
						"<td>"+data[i].money+"</td>");
			}
		}
	}); 
};

function resetForm(){
	document.getElementById("tel").value = "";
};




