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

#targeturlTable {
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
						<form class="form-inline" id="targeturlSearchForm">
							<div class="form-group">
								<label for="name">名称:</label> <input type="text"
									class="form-control input-sm" name="name" />
							</div>
							<button type="button" class="b-redBtn btn-i" id="searchBtn">
								<i class="iconfont">&#xe67a;</i>查询
							</button>
							<button type="button" class="b-redBtn btn-i" id="resetBtn">
								<i class="iconfont">&#xe647;</i>重置
							</button>
							<button type="button" class="b-redBtn btn-i" id="addtargeturlBtn">
								<i class="iconfont">&#xe635;</i>新建
							</button>
						</form>
					</div>

					<table id="targeturlTable">
						<thead>
							<tr>
								<th>目标地址名称</th>
								<th>目标地址路径</th>
								<th>环境名称</th>
								<th>环境状态</th>
								<th>产品名称</th>
								<th>操作</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!-- 新建环境dialog -->
	<div id="addtargeturl" class="dialog-wrap">
		<form id="addTargetUrlForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="name">目标地址名称:</label> <input type="text"
								class="form-control input-sm" name="name" placeholder="请输入名称"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="targetUrl">目标地址路径:</label> <input type="text"
								class="form-control input-sm" name="targetUrl" placeholder="请输入服务地址"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="envname">环境名称:</label> <input type="text"
								class="form-control input-sm" name="envname" placeholder="请输入服务地址"
								 />
						</div>
					</td>
				</tr>
				<tr>
	                <td>
	                    <div class="form-group">
						  <label for="state">目标状态:</label>
					      <label>
						  <input type="radio" value="1" name="state" data-rule="checked(1)">
						    正常
						  </label>
						  <label>
						  <input type="radio" value="0" name="state" data-rule="checked(1)">
						   异常
						  </label>
				   		</div>
	                </td>
	             </tr>
	             <tr>
					<td>
						<div class="form-group">
							<label for="productname">产品名称:</label> <input type="text"
								class="form-control input-sm" name="productname" placeholder="请输入产品名称"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="service">操作:</label> <input type="text"
								class="form-control input-sm" name="service" placeholder="请输入服务地址"
								 />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>


	<!-- 修改用户信息 -->
	<div id="updatetargeturl" class="dialog-wrap">
		<form id="updateTargetUrlForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<input type="hidden" name="targeturlId" />
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">目标地址编号:</label> <input type="text"
								class="form-control input-sm" name="id"
								placeholder="请输入id"  redeonly="redeonly" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="name">目标地址名称:</label> <input type="text"
								class="form-control input-sm" name="name" placeholder="请输入名称"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="targetUrl">目标地址路径:</label> <input type="text"
								class="form-control input-sm" name="targetUrl" placeholder="请输入服务地址"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="envname">环境名称:</label> <input type="text"
								class="form-control input-sm" name="envname" placeholder="请输入服务地址"
								 />
						</div>
					</td>
				</tr>
				<tr>
	                <td>
	                    <div class="form-group">
						  <label for="state">目标状态:</label>
					      <label>
						  <input type="radio" value="1" name="state" data-rule="checked(1)">
						    是
						  </label>
						  <label>
						  <input type="radio" value="0" name="state" >
						   否
						  </label>
				   		</div>
	                </td>
	             </tr>
	             <tr>
					<td>
						<div class="form-group">
							<label for="productname">产品名称:</label> <input type="text"
								class="form-control input-sm" name="productname" placeholder="请输入产品名称"
								 />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/sso/targeturl _manage.js"></script>
</body>
</html>