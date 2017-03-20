(function(){ 
    //Section 1 : 按下自定义按钮时执行的代码 
    var a= { 
        exec:function(editor){ 
           
        } 
    }, 
    //Section 2 : 创建自定义按钮、绑定方法 
    b='code'; 
    CKEDITOR.plugins.add(b,{ 
        init:function(editor){ 
            editor.addCommand(b,a); 
            editor.ui.addButton('code',{ 
                label:'code', 
                icon: this.path + 'logo_ckeditor.png', 
                command:b 
            }); 
        } 
    }); 
})(); 