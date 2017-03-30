<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
   String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
	<%@ include file="../common-head.jsp"%>
	<title>租户管理</title>
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
  					<div class="panel-heading common-part"><i class="iconfont">&#xe6ca;</i><span>接口列表</span></div>
  					<div class="panel-body common-content">
   							<div class="searchWrap">
	                    		<form class="form-inline" id="urlexplainSearchForm">
  									<div class="form-group">
    									<label for="tenantName">接口名称:</label>
    									<input type="text" class="form-control input-sm" name="introduce" 
    									data-toggle="tooltip" data-placement="right" title="点击预览接口详细信息"/>
    									<span id="service-path" style="color:#1dd2af;">
<i class="fa fa-info-circle"></i>
</span>
  									</div>
  									<div class="form-group">
    									<label for="state">接口环境:</label>
    									<input type="text" class="form-control input-sm" name="envname"/>
  									</div>
  									<button type="button" class="b-redBtn btn-i" id="searchBtn"><i class="iconfont">&#xe67a;</i>查询</button>
  									<button type="button" class="b-redBtn btn-i" id="resetBtn"><i class="iconfont">&#xe647;</i>重置</button>
  									<button type="button" class="b-redBtn btn-i" id="addUrlBtn"><i class="iconfont">&#xe635;</i>接口注册</button>
								</form>
	               			</div>
	               			
	               			<table id="urlexplainTable">  
                        		<thead>
            						<tr>
                						<th>接口名称</th>
                						<th style="display:none">接口</th>
               							<th>环境</th>
               							<th>状态</th>
                						<th>操作</th>
            						</tr>
        						</thead>
                    		</table>  
  					</div>
			 </div>
	     </div>
	</div>
	
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath %>/resources/js/sso/urlexplain_manage.js"></script>
</body>
</html>