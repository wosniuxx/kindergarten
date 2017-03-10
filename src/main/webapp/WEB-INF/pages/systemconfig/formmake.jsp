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
						<button type="button" class="b-redBtn btn-i" id="addBtn">
							<i class="iconfont">&#xe635;</i>新建
						</button>
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
						<td width="292"><input name="title" size="25"
							value="" style="width: 270px" type="text"> <input
							name="gid" value="-1665302130088063531" type="hidden"></td>
					</tr>

					<tr>
						<td valign="top" align="right">说明:</td>
						<td><textarea name="remark" cols="50" rows="6" id="remark">zlglyqyb001</textarea>
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
						<td width="292" valign="top" align="left"><input
							name="Button1" value="插入字段"
							onclick="InsertDxField('zlglyqyb001')" type="button"> <textarea
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


	<!-- 字段管理 -->
	<div id="updateTenant" class="dialog-wrap">
		<table id="ziduanManageTable" cellspacing="0" cellpadding="0"
			border="0" width="100%">
			<tbody>
				<tr>
					<td class="webfx-menu-bar" height="26" valign="top">
						<div id="webfx-menu-object-1" class="webfx-menu-bar">
							<div class="webfx-menu--button" id="kaiqi" onclick="changesel(0)"
								onmouseover="" onmouseout="">
								<button type="button" class="b-redBtn btn-i" id="searchBtn">
									<i class="iconfont">&#xe67a;</i>启用字段
								</button>
							</div>
							<div class="webfx-menu--button" id="stop" onclick="changesel(1)"
								onmouseover="" onmouseout="">
								<button type="button" class="b-redBtn btn-i" id="searchBtn">
									<i class="iconfont">&#xe67a;</i>停用字段
								</button>
							</div>
							<div class="webfx-menu--button" id="create" onclick="FieldNew()"
								onmouseover="" onmouseout="">
								<button type="button" class="b-redBtn btn-i" id="searchBtn">
									<i class="iconfont">&#xe67a;</i>新增
								</button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<div
			style="position: absolute; width: 100%; height: 80%; overflow: scroll">
			<script type="text/javascript">
				jqList.scrollList();
				jqList.control();
				sel();
			</script>
			<div id="tbodyid">
				<table id="listTable" class="sort" onclick="sortColumn(event)"
					style="text-align: center" cellspacing="0" cellpadding="0"
					border="0" width="100%">
					<thead>
						<tr class="sort">
							<td style="cursor: hand" width="5%" align="center"><input
								id="FieldIDall" onclick="ALL('FieldIDall','FieldID')"
								type="checkbox"></td>
							<td style="cursor: hand" type="str,0" width="30%">字段名称</td>
							<td style="cursor: hand" type="str,0" width="15%">类 型</td>
							<td style="cursor: hand" type="Number" width="8%">长 度</td>
							<td style="cursor: hand" type="str,0" width="6%">是否为空</td>
							<td style="cursor: hand" type="bool,0" width="6%">查询字段</td>
							<td style="cursor: hand" type="str,0" width="16%">说明</td>
							<td width="14%">操 作</td>
						</tr>
					</thead>
					<tbody>
						<tr onmousemove="this.className='listContentTrOver'"
							onmouseout="this.className='listContentTrOut'"
							onclick="trClickColor(this);" class="listContentTrOut">
							<td class="sort" style="cursor: hand" align="center">&nbsp;<input
								name="FieldID" value="5198149284394385578" type="checkbox"></td>
							<td class="sort" style="cursor: hand"><a href="#" id="color"
								onclick="detailFied('5198149284394385578');return false;">&nbsp;部门(系统默认)</a></td>
							<td class="sort" style="cursor: hand">&nbsp;部门型</td>
							<td class="sort" style="cursor: hand">&nbsp;50</td>
							<td class="sort" style="cursor: hand">&nbsp;是</td>
							<td class="sort">&nbsp;是</td>
							<td class="sort">&nbsp;</td>
							<td class="sort">&nbsp;[<a href="#"
								onclick="updateFild('5198149284394385578');return false;">修改</a>]&nbsp;[<a
								href="#"
								onclick="FieldDelete('5198149284394385578','1');return false;">停用</a>]
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<table cellspacing="0" cellpadding="0" width="100%">
				<tbody>
					<tr>
						<td id="butcolumn" width="20%" align="left">&nbsp;</td>
						<td style="font-size: 12px" width="80%" align="right">&nbsp;
							每页 <input maxlength="3" style="width: 25px" id="pageSize"
							onblur="query2(1)" value="20" onkeyup="txtPageSize(this)"
							onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^d]/g,''))"
							type="text"> 条 共<span id="intCount">13</span>条记录 共<span
							id="intPage">1</span>页<span style="display: none">当前<span
								id="intPageCont">1</span> 页
						</span> <span style="vertical-align: middle"> <a id="Butfirst"
								href="javascript:;" onclick="butQuery(1)" style="display: none">首页</a>
								<span id="Butfirst2" style="font-size: 12px;">首页</span> <a
								id="Butup" href="javascript:;" onclick="butQuery(2)"
								style="display: none">上一页</a> <span id="Butup2"
								style="font-size: 12px;">上一页</span> <a id="Butdown"
								href="javascript:;" onclick="butQuery(3)" style="display: none">下一页</a>
								<span id="Butdown2" style="font-size: 12px;">下一页</span> <a
								id="Butend" href="javascript:;" onclick="butQuery(4)"
								style="display: none">末页</a> <span id="Butend2"
								style="font-size: 12px;">末页</span>
						</span> 第 <input id="pageNo" maxlength="10" style="width: 25px" value="0"
							onblur="butQuery2()" onkeyup="txtPageSize(this)"
							onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^d]/g,''))"
							type="text"> 页 <input value="go" onclick="butQuery2()"
							type="button"> &nbsp;&nbsp; <input id="HidPage"
							type="hidden"> <input id="HidPageSQL" type="hidden">
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>


	<!--子表管理  -->
	<div id="zibiaomanage" class="dialog-wrap">
		<table id="zibaioManageTable" cellspacing="0" cellpadding="0"
			border="0" width="100%">
			<div class="searchWrap">
				<button type="button" class="b-redBtn btn-i" id="searchBtn">
					<i class="iconfont">&#xe67a;</i>新建
				</button>
				<button type="button" class="b-redBtn btn-i" id="resetBtn">
					<i class="iconfont">&#xe647;</i>删除
				</button>
			</div>

			<table id="formTable" cellspacing="0" cellpadding="0" border="0"
				width="100%">
				<thead>
					<tr>
						<th>子表名称</th>
						<th>是否启用</th>
						<th>序号</th>
						<th>操作</th>
					</tr>
				</thead>
			</table>
		</table>
	</div>
	<%@ include file="../common-js.jsp"%>
	<script src="<%=webpath%>/resources/js/systemconfig/form_manage.js"></script>

</body>
</html>