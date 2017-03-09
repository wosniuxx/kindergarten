<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
   String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<%@ include file="../common-head.jsp"%>
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
	</style>
</head> 
<body>
	<div class="row">
	     <div class="col-lg-12 col-md-12 row-tab">
	         <div id="org-panel" class="panel panel-default common-wrapper">
  					<div class="panel-heading common-part"><i class="iconfont">&#xe6ca;</i><span>租户列表</span></div>
  					<div class="panel-body common-content">
   							<div class="searchWrap">
	                    		<form class="form-inline" id="urlexplainSearchForm">
  									<div class="form-group">
    									<label for="urlEnv">接口环境:</label>
    									<select id="envname" name="envname" class="form-control">  
                                			<c:forEach var="envnames" items="${envname}">  
                                				<option value="${envname}">${envname}</option>  
                                			</c:forEach>  
                            			</select>  
  									</div>
  									<div class="form-group">
    									<label for="targetUrl">目标地址:</label>
    									<select id="targeturl" name="targeturl" class="form-control">  
                                			<c:forEach var="targeturls" items="${targeturl}">  
                                				<option value="${targetUrl}">${targetUrl}</option>  
                                			</c:forEach>  
                            			</select>  
  									</div>
  									<div class="form-group">
    									<label for="getUserUrl">获得用户地址:</label>
    									<select id="geturl" name="geturl" class="form-control">  
                                			<c:forEach var="geturls" items="${getUserUrl}">  
                                				<option value="${getUserUrl}">${getUserUrl}</option>  
                                			</c:forEach>  
                            			</select>  
  									</div>
  									<button type="button" class="b-redBtn btn-i" id="searchBtn"><i class="iconfont">&#xe67a;</i>查询</button>
  									<button type="button" class="b-redBtn btn-i" id="resetBtn"><i class="iconfont">&#xe647;</i>重置</button>
  									<button type="button" class="b-redBtn btn-i" id="addUrlBtn"><i class="iconfont">&#xe635;</i>接口注册</button>
								</form>
	               			</div>
  					</div>
			 </div>
	     </div>
	</div>
	
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath %>/resources/js/sso/urlexplain_manage.js"></script>
</body>
</html>