<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
<%@ include file="../common-head.jsp"%>
<title>获取用户接口配置</title>
<%@ include file="../common-layer-ext.jsp"%>
<%@ include file="../common-body-css.jsp"%>
<style type="text/css">
body {
	overflow: hidden;
}

#getuserurlTable {
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
						<form class="form-inline" id="getuserurlSearchForm">
							<div class="form-group">
								<label for="name">接口名称:</label> <input type="text"
									class="form-control input-sm" name="name" />
							</div>
							<button type="button" class="b-redBtn btn-i" id="searchBtn">
								<i class="iconfont">&#xe67a;</i>查询
							</button>
							<button type="button" class="b-redBtn btn-i" id="resetBtn">
								<i class="iconfont">&#xe647;</i>重置
							</button>
							<button type="button" class="b-redBtn btn-i"
								id="addgetuserurlBtn">
								<i class="iconfont">&#xe635;</i>新建
							</button>
						</form>
					</div>

					<table id="getuserurlTable">
						<thead>
							<tr>
								<th>接口名称</th>
								<th>获取用户接口</th>
								<th>用户数据类型</th>
								<th>是否需要提供token</th>
								<th>操作</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!-- 新建环境dialog -->
	<div id="addgetuserurl" class="dialog-wrap">
		<form id="addGetUserUrlForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="name">接口名称:</label> <input type="text"
								class="form-control input-sm" name="name" placeholder="请输入接口名称"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="getUserUrl">获取用户接口:</label> <input type="text"
								class="form-control input-sm" name="getUserUrl"
								placeholder="请输入获取用户接口" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="method">用户数据类型:</label> <input type="text"
								class="form-control input-sm" name="method"
								placeholder="请输入获取用户接口" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="isToken">是否需要isToken:</label> 
							<label> 
							<input type="radio" value="1" name="isToken" data-rule="checked(1)">
								是
							</label> 
							<label> 
							<input type="radio" value="-1" name="isToken"
								data-rule="checked(1)"> 否
							</label>
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>


	<!-- 修改用户信息 -->
	<div id="updategetuserurl" class="dialog-wrap">
		<form id="updateGetUserUrlForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<input type="hidden" name="getuserurlId" />
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">接口id:</label> <input type="text"
								class="form-control input-sm" name="id" placeholder="接口id"
								 readonly="readonly" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="name">接口名称:</label> <input type="text"
								class="form-control input-sm" name="name" placeholder="请输入接口名称"
								 />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="getUserUrl">获取用户接口:</label> <input type="text"
								class="form-control input-sm" name="getUserUrl"
								placeholder="请输入获取用户接口" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="method">用户数据类型:</label> <input type="text"
								class="form-control input-sm" name="method"
								placeholder="请输入用户数据类型" />
						</div>
					</td>
				</tr>
				<tr>
	                <td id="001">
	                    <div class="form-group">
						  <label for="isToken">是否需要isToken:</label>
					      <label>
						  <input type="radio" value="1" name="isToken" data-rule="checked(1)" checked>
						    是
						  </label>
						  <label>
						  <input type="radio" value="-1" name="isToken" data-rule="checked(1)" >
						   否
						  </label>
				   		</div>
	                </td>
	             </tr>
			</table>
		</form>
	</div>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/sso/getuserurl_manage.js"></script>
</body>
</html>