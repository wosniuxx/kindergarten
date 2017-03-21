var temp =[];
(function() { 
	getData();
    CKEDITOR.dialog.add("code",   
    function(a) { 
        return {  
            title: "添加字段",  
            minWidth: "500px",  
            minHeight:"500px",  
            contents: [
                       {  
                id: "tab1",  
                label: "",  
                title: "",  
                expand: true,  
                width: "500px",  
                height: "500px",  
                padding: 0,  
                elements: [
	                /*{  
	                    type: "html",  
	                    style: "width:200px;height:30px",  
	                    html:'1111111111111'
	                },*/
	                {
	                    id: "enctype",
	                    type: "select",
//	                    label: "添加字段",
	                    style: "width:100%",
	                    accessKey: "E",
	                    "default": "",
	                    width: "500px",  
	                    height: "500px", 
	                    items: temp
	                },
	                /*{
	                    type: "vbox", 
	                    children: [
	                        {id: "chkMulti", type: "checkbox", label: temp[0][0],}, 
	                    	{ id: "required",type: "checkbox",label:  temp[1][0]},
	                        { id: "required",type: "checkbox",label:  temp[2][0]},
	                        { id: "required",type: "checkbox",label:  temp[3][0]},
	                        { id: "required",type: "checkbox",label:  temp[4][0]}
	                        
	                        ]
	                }*/
                
                ]  
            }],  
            onOk: function () {
                var a = this.getParentEditor(), b = this.selectBox, e = !b;
                e && (b = a.document.createElement("input"));
                this.commitContent(b);
                if (e && (a.insertElement(b), CKEDITOR.env.ie)) {
                    var d = a.getSelection(), c = d.createBookmarks();
                    setTimeout(function () {
                        d.selectBookmarks(c)
                    }, 0)
                }
            },
           
        }  
    })  
})(); 
function getData(){
	 $.ajax({
      type: "POST",
      async:false,
      url: "../form/selectField",
      data : function(d) {// 查询参数
  		filetabledata = new Object();
  		filetabledata.start = 0;
  		filetabledata.length = 10;
  		return $.extend({}, filetabledata, {
  			"jsonStr" : "zlglyqyb001"
  		});
  	},
      dataType: "json",
      success: function(d){
    	  var formdata =new Array();
	  	  for(var i = 0 ;i<d.data.length;i++){
	  		  var a =new Array();
	  		  a.push(d.data[i].fieldcname);
	  		  a.push(d.data[i].fieldcname);
	  		formdata.push(a);
	  	  }
	  	 temp = formdata;
	  	 console.log(temp);
      }
  });
	 
	
}

	
