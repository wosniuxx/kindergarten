<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/resources/plugin/ckeditor/ckeditor.js"></script>

</head>
<body>
    <form>
        <textarea name="editor1" id="editor1" rows="10" cols="80">
             This is my textarea to be replaced with CKEditor.
        </textarea>
        <script>
             CKEDITOR.replace( 'editor1' );
            /*  CKEDITOR.replace( 'editor1', {
			    language: 'fr',
			    uiColor: '#9AB8F3'
			}); */
        </script>
    </form>
</body>
  
</html>