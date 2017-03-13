<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
<%@ include file="../common-head.jsp"%>
<title>环境管理</title>
<%@ include file="../common-layer-ext.jsp"%>
<%@ include file="../common-body-css.jsp"%>
<style type="text/css">
body {
	overflow: hidden;
}

#envTable {
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
					<i class="iconfont">&#xe6ca;</i><span>环境列表</span>
				</div>
				<div class="panel-body common-content">
					<div class="searchWrap">
						<form class="form-inline" id="envSearchForm">
							<div class="form-group">
								<label for="envname">环境名称:</label> <input type="text"
									class="form-control input-sm" name="envname" />
							</div>
							<button type="button" class="b-redBtn btn-i" id="searchBtn">
								<i class="iconfont">&#xe67a;</i>查询
							</button>
							<button type="button" class="b-redBtn btn-i" id="resetBtn">
								<i class="iconfont">&#xe647;</i>重置
							</button>
							<button type="button" class="b-redBtn btn-i" id="addenvBtn">
								<i class="iconfont">&#xe635;</i>新建环境
							</button>
						</form>
					</div>

					<table id="envTable">
						<thead>
							<tr>
								<th>环境id</th>
								<th>环境名称</th>
								<th>环境地址</th>
								<th>操作</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!-- 新建环境dialog -->
	<div id="addenv" class="dialog-wrap">
		<form id="addEnvForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">环境id:</label> <input type="text"
								class="form-control input-sm" name="id"
								placeholder="请输入id" data-rule="required;length(4~32);filter;" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="envname">环境名称:</label> <input type="text"
								class="form-control input-sm" name="envname" placeholder="请输入名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="service">环境地址:</label> <input type="text"
								class="form-control input-sm" name="service" placeholder="请输入服务地址"
								data-rule="email" />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>


	<!-- 修改用户信息 -->
	<div id="updateenv" class="dialog-wrap">
		<form id="updateEnvForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<input type="hidden" name="envId" />
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">环境id:</label> <input type="text"
								class="form-control input-sm" name="id"
								placeholder="请输入租户id" data-rule="required;length(2~32);filter;" 
								redeonly="redeonly"/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="envname">环境名称:</label> <input type="text"
								class="form-control input-sm" name="envname" placeholder="请输入租户名称"
								data-rule="email" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="service">环境地址:</label> <input type="text"
								class="form-control input-sm" name="service" placeholder="请输入环境地址"
								data-rule="email" />
						</div>
					</td>

				</tr>
			</table>
		</form>
	</div>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/sso/env_manage.js"></script>
</body>
</html>