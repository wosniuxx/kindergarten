<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
   String webpath = request.getContextPath();
%>
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/plugin/bootstrap-3.3.6/dist/css/bootstrap.css" />
<link rel="Bookmark" href="<%=request.getContextPath() %>/resources/img/favicon.ico" />
<link rel="Shortcut Icon" href="<%=request.getContextPath() %>/resources/img/favicon.ico" />
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/plugin/bootstrap-3.3.6/dist/css/bootstrap.css" />
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/plugin/datatables/media/css/jquery.dataTables.min.css" />
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/plugin/ztree/css/metroStyle/metroStyle.css" />
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/plugin/validator/dist/jquery.validator.css" />
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/plugin/jquery-ui-1.12.1/jquery-ui.min.css" />
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/urlcommon.css" />

<!DOCTYPE html>
<html lang="en">
<head>
	<title>接口注册</title>
	<%@ include file="../common-layer-ext.jsp"%>
	<%@ include file="../common-body-css.jsp"%>
	<style type="text/css">
		body{
		  overflow:hidden;
		}
		#urlexplainTable{
		  width:100%;
		}
		#text_area{
		  width: 407px;
		  height: 80px;
		  border: 1px solid #ccc;
		}
		
		.showUrl{
		    position: absolute;
    		top: 305px;
		}
		.arrowimg{
		    position: absolute;
    		left:500px;
    		top:120px;
    		transform: translate3d(0, -10px,0);
		    -ms-transform: translate3d(0, -10px, 0);
		    -webkit-transform: translate3d(0, -10px, 0);
		    -o-transform: translate3d(0, -10px, 0);
		    -moz-transform: translate3d(0, -10px, 0);
		    opacity: 0;
		    transition: transform 1s ease 0s, opacity 1s ease 0s;
		    -moz-transition: -moz-transform 1s ease 0s, opacity 1s ease 0s;
		    -webkit-transition: -webkit-transform 1s ease 0s, opacity 1s ease 0s;
		    -o-transition: -o-transform 1s ease 0s, opacity 1s ease 0s;
		    -ms-transition: -ms-transform 1s ease 0s, opacity 1s ease 0s;
				    
		}
		.showUrl .conurl{   
			font: 15px Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, Tahoma, Arial, sans-serif;
		    padding: 35px;
		    line-height: 24px;
		    letter-spacing: 2px;
		}
		.showUrl button{
			display:none;
			float:right;
			margin-right:100px;
		}
		.help{
		    margin-top: -31px;
   			margin-left: 95px;
		}
		.form-sm{
			margin-left:50px;
		}
		body .demo-class .layui-layer-title{background:#FF8888; color:#fff; border: none;}
	</style>
</head> 
<body>
	<div class="row">
	     <div class="col-lg-12 col-md-12 row-tab">
	         <div id="org-panel" class="panel panel-default common-wrapper">
  					<div class="panel-heading common-part"><i class="iconfont">&#xe6ca;</i><span>接口注册</span>
  					<button type="button" class="b-redBtn btn-i" id="backbutton1" style="float: right;" onclick="javascript:history.back(-1);">返回</button>
  					</div>
					<div>
					<a href="<%=webpath %>/resources/doc/interface.docx">
						<image src="<%=webpath %>/resources/img/sso/help.jpg" class="help" id="help" 
						data-toggle="tooltip" data-placement="right" title="点击下载接口注册帮助文档">
					</a>
					</div>
  					<div class="panel-body common-content">
   							<div class="searchWrap">
	                    		<form id="urlmodelAddForm" data-validator-option="{timely:2, theme:'yellow_right'}">
	                    			<input type="hidden" value="${urlModel.id }" name="id"/>
		                    		<div class="form-group">
    									<label for="urlEnv">接口名称:</label>
    									<input type="text" class="form-control input-sm form-sm"  name="introduce" id="introduce" value="${urlModel.introduce }" data-rule="required;length(4~32);filter;"/>
	  								</div>
  									<div class="form-group">
    									<label for="sign">接口标识:</label>
    									<input type="text" class="form-control input-sm form-sm" 
    									name="sign" id="sign" value="${urlModel.sign }" data-rule="required;length(4~32);filter;"/>
  									</div>
  									<div class="form-group">
    									<label for="targetUrl">目标地址:</label>
    									<select id="targeturl" name="targeturl" class="form-control form-sm" value="${urlModel.getUserUrl }">  
                                			<c:forEach var="t" items="${targeturls}">  
                                				<option value="${t.targetUrl}" ogname="${t.name}">${t.name}</option>  
                                			</c:forEach>  
                            			</select>  
  									</div>
  									<div class="form-group">
    									<label for="getUserUrl">获得用户地址:</label>
    									<select id="geturl" name="getUserUrl" class="form-control form-sm" value="${urlModel.getUserUrl }">  
                                			<c:forEach var="g" items="${geturls}">  
                                				<option value="${g.isToken}" ogname="${g.name}">${g.name}</option>  
                                			</c:forEach>  
                            			</select> 
  									</div>
  									<button type="button" class="b-redBtn btn-i" id="getUrlBtn"><i class="iconfont">&#xe635;</i>接口预览</button>
								</form>
	               			</div>
  					</div>
			 </div>
	     </div>
	</div>
	
	<div class="dialog-wrap" id="showurl" style="margin-top: 57px;
    font-family: inherit;
    font-size: 18px;width:600px">
		测试接口地址：</br>
		<textarea style="width: 600px;border:none;margin-bottom: 15px;
    margin-top: 15px; resize : none;"  id="precontent"></textarea></br>
		正式接口地址：</br>
		<textarea style="width: 600px;border:none; margin-top: 15px; 
		resize : none;" id="procontent"></textarea></br>
	</div>
	
	
	
	
	<div style="display: none" id="errormessage">
		<span>该标识已存在，请重新输入</span>
	</div>
	<input type="hidden" value="${type }" id="type"/>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath %>/resources/js/sso/urlModel_add.js"></script>
	<script type="text/javascript">
	if($("#type").val() == "update"){
		var urlModel = strToJson('${dtstr}');
		function strToJson(str) {
			var json = eval('(' + str + ')');
			return json;
		}	
	}
	</script>
</body>
</html>