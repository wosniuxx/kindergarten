<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.bonc.frame.util.SystemPropertiesUtils"
	language="java"%>
<%@ page import="com.bonc.frame.util.UserUtil"
	language="java"%>
<%@ page import="java.util.List"
	language="java"%>
<%@ page import="com.bonc.frame.web.entity.user.User"
	language="java"%>
<%@ page import="com.bonc.frame.web.entity.orgnization.Orgnization"
	language="java"%>
<%@ page import="com.bonc.frame.security.util.Constant"
	language="java"%>
<%@ page import="com.bonc.frame.util.DateUtil"
	language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	String webpath = request.getContextPath();
	User user = UserUtil.getUserResource(request);
	List<Orgnization> orgs = user.getOrgnization();
	StringBuffer sb = new StringBuffer();
	for (Orgnization org : orgs) {
		sb.append(org.getOrgName()).append(",");
	}
	if (orgs != null && orgs.size() > 0) {
		sb.deleteCharAt(sb.length() - 1);
	}
	String frameStyle = SystemPropertiesUtils.getFrameStyle().trim();
%>
<!DOCTYPE html>
<html>
<head>
<jsp:include page="../common-head.jsp"></jsp:include>
<title>我的工作台</title>
<link rel="stylesheet"
	href="<%=webpath%>/resources/css/workbench/index.css" />
</head>
<body>
	<div class="container-fluid content row">
		<div class="col-lg-4 col-md-4">
			<div class="part userInfo">
				<img src="<%=webpath%>/resources/img/index/images/kinder/p-yuan.png"
					class="userIcon">
				<div class="userMain">
					<div class="info">
						<p>
							<span>你好，</span><span class="userName"><%=user.getUserName() %></span>
						</p>
						
						<p>
							<span>今天是：</span><span class="today" id="time">
								<script>     
									document.getElementById('time').innerHTML=new Date().toLocaleString();     
									setInterval("document.getElementByIdx_x('time').innerHTML=new Date().toLocaleString();",1000);  
								</script> 
							</span>
						</p>
						
						<p>
							<span>地区：</span><span class="LaseLoginPos">山西省太原市</span>
						</p>
					</div>
					<div class="editLinkWrapper">
						<div class="editLinks">
							<a href="#" class="fl likeIcon"><i class="icon"></i><span>教师管理</span></a>
							<a href="#" class="fl personalIcon"><i class="icon"></i><span>学生管理</span></a>
							<a href="#" class="fl editIcon"><i class="icon"></i><span>个人设置</span></a>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-4">
			<div class="part appList">
				<p class="title">应用列表</p>
				<hr>
				<div class="applistWrap">
					<a href="#" class="fl"><i class="list1 icon"></i><span>教师管理</span></a>
					<a href="#" class="fl"><i class="list2 icon"></i><span>学生管理</span></a>
					<a href="#" class="fl"><i class="list3 icon"></i><span>公告管理</span></a>
					<a href="#" class="fl"><i class="list4 icon"></i><span>报名查询</span></a>
					<a href="#" class="fl"><i class="list5 icon"></i><span>医院联系</span></a>
					<a href="#" class="fl"><i class="list7 icon"></i><span>物业费</span></a>
					<a href="#" class="fl"><i class="list8 icon"></i><span>园区制度</span></a>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-4">
			<div class="part sortList">
				<p class="title">最新新闻</p>
				<hr>
				<div class="sortListWrap">
					<ul>
						<li class="firSort"><span class="sort">01</span><a href="#"><span
								class="newsName">教育部率央媒访桂 关注职教服务“一带一路”、多元普惠幼儿园</span></a><span class="newsTime">12/12</span></li>
						<li><span class="sort">02</span><a href="#"><span
								class="newsName">
教育部:正在制定防治学生欺凌暴力的指导手册</span></a><span class="newsTime">12/12</span></li>
						<li><span class="sort">03</span><a href="#"><span
								class="newsName">教育部:中小学幼儿园安全风险防控情况 将纳入学校考核内容</span></a><span
							class="newsTime">12/12</span></li>
						<li><span class="sort">04</span><a href="#"><span
								class="newsName">河南针扎幼儿被拘 教育部对涉事民办幼儿园下发整改通知书 </span></a><span class="newsTime">12/12</span></li>
						<li><span class="sort">05</span><a href="#"><span
								class="newsName">
教育部:鼓励中小学校幼儿园在厨房配餐间安装监控</span></a><span class="newsTime">12/12</span></li>
						<li><span class="sort">06</span><a href="#"><span
								class="newsName">国务院紧急通知排查中小学幼儿园安全隐患:谁主管谁负责</span></a><span class="newsTime">12/12</span></li>
						
					</ul>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-4">
			<div class="part history">
				<p class="title">来访登记</p>
				<p>&nbsp;</p>
				<table border="1">
					<tr>
						<td>来访人姓名</td>
						<td>来访人证件</td>
						<td>拜访人姓名</td>
						<td>来访原由</td>
					</tr>
					<tr>
						<td>李四</td>
						<td>身份证</td>
						<td>李莲英（园长）</td>
						<td>办理手续</td>
					</tr>
					<tr>
						<td>王四</td>
						<td>身份证</td>
						<td>李莲英（园长）</td>
						<td>办理手续</td>
					</tr>
					<tr>
						<td>张三</td>
						<td>身份证</td>
						<td>李莲英（园长）</td>
						<td>办理手续</td>
					</tr>
				</table>
				
			</div>
		</div>
		<div class="col-lg-4 col-md-4">
			<div class="part summary">
				<p class="title">薪资信息</p>
				<hr>
				<div class="summaryWrap">
					<p class="red">
						<span class="sumTit">基本信息 :</span>
					</p>
					<div class="container-fluid basicTopInfo">
						<div class="col-md-4 basicName">
							<p class="red">姓名</p>
							<p>石建</p>
						</div>
						<div class="col-md-4 basicApm">
							<p class="red">部门</p>
							<p>食堂大师傅</p>
						</div>
						<div class="col-md-4 basicId">
							<p class="red">人员编号</p>
							<p>201387</p>
						</div>
					</div>
					<hr>
					<div class="container-fluid basicTopInfo">
						<div class="col-md-6 basicAcount">
							<p class="red">账户编号</p>
							<p>9999 9988 889</p>
						</div>
						<div class="col-md-6">
							<p class="red">实际月收入</p>
							<p>3850</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-4">
			<div class="part date">
				<p class="title">日程安排</p>
				<hr>
				<div class="dateWrap">
					<div id="dateArrange"></div>
				</div>
			</div>
		</div>
	</div>

	<script>
	var webpath = '<%=webpath%>';
	</script>
	<jsp:include page="../common-js.jsp"></jsp:include>
	<script src="<%=webpath%>/resources/plugin/echarts3/echarts.min.js"></script>
	<script src="<%=webpath%>/resources/js/workbench/index.js"></script>
</body>
</html>