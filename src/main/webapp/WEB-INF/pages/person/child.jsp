<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
<%@ include file="../common-head.jsp"%>
<title>学生管理</title>
<%@ include file="../common-layer-ext.jsp"%>
<%@ include file="../common-body-css.jsp"%>
<style type="text/css">
body {
	overflow: hidden;
}

#Table {
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
					<i class="iconfont">&#xe6ca;</i><span>学生列表</span>
				</div>
				<div class="panel-body common-content">
					<div class="searchWrap">
						<form class="form-inline" id="SearchForm">
							<div class="form-group">
								<label for="name">学生名称:</label> <input type="text"
									class="form-control inpu-sm" name="name" />
							</div>
							<button type="button" class="b-redBtn btn-i" id="searchBtn">
								<i class="iconfont">&#xe67a;</i>查询
							</button>
							<button type="button" class="b-redBtn btn-i" id="resetBtn">
								<i class="iconfont">&#xe647;</i>重置
							</button>
							<button type="button" class="b-redBtn btn-i" id="addBtn">
								<i class="iconfont">&#xe635;</i>新增学生信息
							</button>
						</form>
					</div>

					<table id="Table">
						<thead>
							<tr>
								<th>学生编号</th>
								<th>名称</th>
								<th>密码</th>
								<th>班级</th>
								<th>操作</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!-- 新建环境dialog -->
	<div id="add" class="dialog-wrap">
		<form id="addForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="teachernum">学生编号:</label> <input type="text"
								class="form-control input-sm" name="teachernum" placeholder="请输入名称"/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="name">名称:</label> <input type="text"
								class="form-control input-sm" name="name"
								placeholder="请输入"/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="password">密码:</label> <input type="text"
								class="form-control input-sm" name="password"
								placeholder="请输入服务地址"/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="classes">班级:</label> <input type="text"
								class="form-control input-sm" name="classes"
								placeholder="请输入服务地址" />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>


	<!-- 修改用户信息 -->
	<div id="update" class="dialog-wrap">
		<form id="updateForm" class="form-inline"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<input type="hidden" name="Id" />
			<table class="form-table">
				<tr>
					<td>
						<div class="form-group">
							<label for="id">id:</label> <input type="text"
								class="form-control input-sm" name="id" placeholder="请输入环境编号:" readonly="readonly" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="teachernum">学生编号:</label> <input type="text"
								class="form-control input-sm" name="teachernum"
								placeholder="请输入租户名称"/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="name">名称:</label> <input type="text"
								class="form-control input-sm" name="name"
								placeholder="请输入环境地址"/>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="password">密码:</label> <input type="password"
								class="form-control input-sm" name="password"
								placeholder="请输入环境地址" />
						</div>
					</td>
				</tr>
				<tr>
					<td>
						<div class="form-group">
							<label for="classes">班级:</label> <input type="text"
								class="form-control input-sm" name="classes"
								placeholder="请输入环境地址" />
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/person/child.js"></script>
</body>
</html>