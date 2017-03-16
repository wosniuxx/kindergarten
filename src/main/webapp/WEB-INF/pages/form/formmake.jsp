<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>表单制作</title>
<%@ include file="../common-head.jsp"%>
<%@ include file="../common-layer-ext.jsp"%>
<%@ include file="../common-body-css.jsp"%>
<style type="text/css">
body {
	overflow: hidden;
}

#tenantTable {
	width: 100%;
}

#text_area {
	width: 407px;
	height: 80px;
	border: 1px solid #ccc;
}

.webfx-menu--button {
	cursor: pointer;
	float: left;
	clear: none;
	height: 25px;
	white-space: nowrap;
	padding-top: 3px;
	padding-right: 8px;
	text-decoration: none;
}

</style>
</head>
<body>
	<div class="row">
		<div class="col-lg-12 col-md-12 row-tab">
			<div id="org-panel" class="panel panel-default common-wrapper">
				<div class="panel-heading common-part">
					<i class="iconfont">&#xe6ca;</i><span>表单列表</span>
				</div>
				<div class="panel-body common-content">
					<div class="searchWrap">
					<form class="form-inline" id="formSearchForm">
					<div class="form-group">
    									<label for="tablecnname">表单名称:</label>
    									<input type="text" class="form-control input-sm" name="tablecnname" />
  									</div>
  									<button type="button" class="b-redBtn btn-i" id="searchBtn"><i class="iconfont">&#xe67a;</i>查询</button>
  									<button type="button" class="b-redBtn btn-i" id="resetBtn"><i class="iconfont">&#xe647;</i>重置</button>
						<button type="button" class="b-redBtn btn-i" id="addBtn"><i class="iconfont">&#xe635;</i>新建</button>
						<button type="button" class="b-redBtn btn-i" id="resetBtn">
							<i class="iconfont">&#xe647;</i>删除
						</button>
						</form>
					</div>

					<table id="formTable" cellspacing="0" cellpadding="0" border="0"
						width="100%">
						<thead>
							<tr>
								<th>表单名称</th>
								<th>说明</th>
								<th>操作</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	</div>


	<!--新建表单dialog  -->
	<div id="addForm" class="dialog-wrap">
		<form name="frm" id="frm" method="post"
			action="userdefined!templateNewSave.action" target="fromiframe"
			data-validator-option="{timely:2, theme:'yellow_right'}">
			<table border="0" width="100%">
				<tbody>
					<tr>
						<table border="0" width="80%">
							<tbody>
								<tr>
									<td width="40%" align="right">表单名称:</td>
									<td width="60%"><input name="tablecnname" id="tablecnname"
										style="width: 90%" type="text"></td>
								</tr>
								<tr>
									<td width="40%" align="right">表单代码:</td>
									<td width="60%"><input name="udtemplateCode" id="udtemplateCode"
										style="width: 90%" maxlength="100" type="text"></td>
								</tr>
								<tr>
									<td width="40%" align="right">备&nbsp;&nbsp;&nbsp;&nbsp;注:
									</td>
									<td width="60%"><textarea name="remark"
											style="width: 90%" rows="3"></textarea></td>
								</tr>

								<tr>
									<td width="40%" align="right">&nbsp;</td>

								</tr>
							</tbody>
						</table>
					</tr>
				</tbody>
			</table>
		</form>
	</div>


	<!--  修改表单dialog-->
	<div id="updateForm" class="dialog-wrap">
		<form name="updateFormTable"
			action="userdefined!updateUdTemplateById.action" method="post"
			target="groupFrame">
			<table style="font-size: 12px" align="center">
				<tbody>
					<tr>
						<td width="82" align="right"><font color="red">*</font>表单名称:</td>
						<td width="292"><input name="table_cnname" size="25"
							value="" style="width: 270px" type="text"></td>
					</tr>

					<tr>
						<td valign="top" align="right">说明:</td>
						<td><textarea name="remark" cols="40" rows="3" id="remark"></textarea>
						</td>
					</tr>
					<tr style="display: none;">
						<td width="82" align="right">表单标题字段:</td>
						<td width="292"><select id="selFieldTitle"
							name="selFieldTitle" style="width: 270px">
								<option value="">请选择</option>
								<option value="-549068322717744500">编号</option>
						</select></td>
					</tr>
					<tr>
						<td width="82" valign="top" align="right">表单标题格式:</td>
						<td width="292" valign="top" align="left">
						<div id="btn"></div>
							 <textarea
								id="exampletitle" name="exampletitle"
								style="width: 95%; height: 50px"></textarea></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
					</tr>
				</tbody>
			</table>
		</form>
	</div>
    <!--插入字段  -->
    <div id="insertField" class="dialog-wrap">
    <table id="fieldTable" cellspacing="0" cellpadding="0" border="0"
						width="100%">
						<thead>
							<tr>
								<th>字段名称</th>
								<th>字段类型</th>
							</tr>
						</thead>
					</table>
    </div>

	<!-- 字段管理 -->
	<div id="fieldManage" class="dialog-wrap">
	<div id="fieldBtn">
		<table id="ManageTable" cellspacing="0" cellpadding="0"
			border="0" width="100%">
			<tbody>
				<tr>
						<div id="webfx-menu-object-1" class="webfx-menu-bar">
							<div class="webfx-menu--button" style="float:left" id="kaiqi" onclick="changesel(0)"
								onmouseover="" onmouseout="">
								<button type="button" class="b-redBtn btn-i" id="searchBtn">
									<i class="iconfont">&#xe67a;</i>启用字段
								</button>
							</div>
							<div class="webfx-menu--button" style="float:left" id="stop" onclick="changesel(1)"
								onmouseover="" onmouseout="">
								<button type="button" class="b-redBtn btn-i" id="searchBtn">
									<i class="iconfont">&#xe67a;</i>停用字段
								</button>
							</div>
							<div class="webfx-menu--button" style="float:left" id="create" onclick="FieldNew()"
								onmouseover="" onmouseout="">
								<button type="button" class="b-redBtn btn-i" id="searchBtn">
									<i class="iconfont">&#xe67a;</i>新增
								</button>
							</div>
						</div>
				</tr>
			</tbody>
		</table>
		</div>
		<div id="tbodyid">
				<table id="fieldManageTable" 
					style="text-align: center" cellspacing="0" cellpadding="0"
					border="0" width="100%">
					<thead>
						<tr class="sort">
							<!-- <th ><input id="FieldIDall" type="checkbox"></th> -->
							<th>字段名称</th>
							<th>类 型</th>
							<th>长 度</th>
							<th>是否为空</th>
							<th>查询字段</th>
							<!-- <td>说明</td> -->
							<th>操 作</th> 
						</tr>
					</thead>
					
				</table>
		</div>
	</div>



	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/form/form_manage.js"></script>

</body>
</html>