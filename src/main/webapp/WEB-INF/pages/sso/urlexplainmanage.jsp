<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
<%@ include file="../common-head.jsp"%>
<title>目标地址配置</title>
<%@ include file="../common-layer-ext.jsp"%>
<%@ include file="../common-body-css.jsp"%>
<style type="text/css">
body {
	overflow: hidden;
}

#urlexplainTable {
	width: 100%;
}

#text_area {
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
				<div class="panel-heading common-part">
					<i class="iconfont">&#xe6ca;</i><span>目标地址配置</span>
				</div>
				<div class="panel-body common-content">
					<div class="searchWrap">
						<form class="form-inline" id="urlexplainSearchForm">
							<div class="form-group">
								<label for="urlexplainName">对接名称:</label> <input type="text"
									class="form-control input-sm" name="urlexplainName" />
							</div>
							<button type="button" class="b-redBtn btn-i" id="searchBtn">
								<i class="iconfont">&#xe67a;</i>查询
							</button>
							<button type="button" class="b-redBtn btn-i" id="resetBtn">
								<i class="iconfont">&#xe647;</i>重置
							</button>
							<button type="button" class="b-redBtn btn-i" id="addurlexplainBtn">
								<i class="iconfont">&#xe635;</i>新建
							</button>
						</form>
					</div>

					<table id="urlexplainTable">
						<thead>
							<tr>
								<th>目标地址id</th>
								<th>目标地址对接说明</th>
								<th>目标地址名称</th>
								<th>获取用户地址</th>
								<th>目标地址</th>
								<th>状态</th>
								<th>标识</th>
								<th>创建日期</th>
								<th>操作</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!-- 新建目标地址配置dialog -->
	<div id="addurlexplain" class="dialog-wrap">
		<form id="addurlexplainForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">目标地址id：</label> <input type="text"
								class="form-control input-sm" name="id"
								placeholder="请输入目标地址id" data-rule="required;length(4~32);filter;" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="introduce">目标地址对接说明：</label> <input type="text"
								class="form-control input-sm" name="introduce" placeholder="请输入目标地址对接说明"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="envname">目标地址名称：</label> <input type="text"
								class="form-control input-sm" name="envname" placeholder="请输入目标地址名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="getuserurl">获取用户地址：</label> <input type="text"
								class="form-control input-sm" name="getuserUrl" placeholder="请输入获取用户地址"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="targeturl">目标地址：</label> <input type="text"
								class="form-control input-sm" name="targetUrl" placeholder="请输入地址"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
						  <label for="status">状态：</label>
					      <label>
						  <input type="radio" value="1" name="status" data-rule="checked(1)">
						    正常
						  </label>
						  <label>
						  <input type="radio" value="-1" name="status" data-rule="checked(1)">
						   异常
						  </label>
				   		</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="sign">标识：</label> <input type="text"
								class="form-control input-sm" name="sign" placeholder="请输入标识"
								data-rule="email" />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>


	<!-- 修改目标地址配置 -->
	<div id="updateurlexplain" class="dialog-wrap">
		<form id="updateurlexplainForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<input type="hidden" name="urlexplainId" />
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">目标地址id：</label> <input type="text"
								class="form-control input-sm" name="id"
								placeholder="请输入租户id" data-rule="required;length(2~32);filter;" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="introduce">目标地址对接说明：</label> <input type="text"
								class="form-control input-sm" name="introduce" placeholder="请输入租户名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="envname">目标地址名称：</label> <input type="text"
								class="form-control input-sm" name="envname" placeholder="请输入环境地址"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="getuserUrl">获取用户地址：</label> <input type="text"
								class="form-control input-sm" name="getuserUrl" placeholder="请输入租户名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="targetUrl">目标地址：</label> <input type="text"
								class="form-control input-sm" name="targetUrl" placeholder="请输入租户名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
				 
				<tr>
					<td>
						<div class="form-group">
						  <label for="status">状态</label>
					      <label>
						  <input type="radio" value="1" name="status" data-rule="checked(1)">
						    正常
						  </label>
						  <label>
						  <input type="radio" value="-1" name="status" data-rule="checked(1)">
						   异常
						  </label>
				   		</div>
					</td>
				</tr>
				
				<tr>
					<td>
						<div class="form-group">
							<label for="sign">标识:</label> <input type="text"
								class="form-control input-sm" name="sign" placeholder="请输入租户名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/sso/urlexplain_manage.js"></script>
</body>
</html>