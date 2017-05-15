<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.HashMap"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>幼儿园网站</title>
<link
	href="<%=webpath%>/resources/plugin/bootstrap-3.3.6/dist/css/bootstrap.css"
	rel="stylesheet">
<meta name="Keywords" content="123" />
<meta name="Description" content="," />
</script>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link href="<%=webpath%>/resources/css/index/index2016.css"
	type="text/css" rel="stylesheet" />
</script>
<script type="text/javascript"
	src="<%=webpath%>/resources/js/jquery-1.4.4.min.js"></script>
</head>


<body>
	<div id="section1" init="true" class="section section1">
		<header class="header">
		<div class="wrap">
			<h1 class="fl">
				<a href="index.html" class="fl logo"> <img
					src="<%=webpath%>/resources/img/index/images/kinder/p-title.png"
					alt="TI Alliance" width="154" height="49" />
				</a>
			</h1>
			<div class="fl logo_text">
				<span style="font-size: 35px; font-weight: 100;">|</span> <span
					style="font-family: '微软雅黑'; font-size: 15px; font-weight: 700;">&nbsp;&nbsp;为了孩子的明天</span>
			</div>
			<div class="fr">
				<div class="top">
					<span class="call"> </span> <span class="call_tel">
						138-8888-8888 </span> <a> <span class="email"> </span>
						kindergarten@tyut.net
					</a>

				</div>
				<nav class="nav">
				<ul class="fix">
					<li id="menu1"><a href="<%=webpath%>/index/index"> 本院概况 </a></li>
					<li id="menu2"><a href="">园区公告 </a></li>
					<li id="menu3"><a href="">教学展示 </a></li>
					<li id="menu4"><a href="">班级展示 </a></li>
					<li id="menu5"><a href="">招生入口 </a></li>
				</ul>
				<span class="nav_icon"> </span> </nav>
			</div>
		</div>
		</header>
		<!--banner-->

		<!--partner-->
		<div id="section6" init="false" class="section section6"
			align="center">
			<div class="home_partner">
				<div class="home_partner_title">
					<a href="news/index.html" target="_blank"> <img
						src="<%=webpath%>/resources/img/index/images/kinder/p-admissions.png"
						alt="招生" width="350" height="104" />
					</a>
				</div>
				<div class="home_partner_text">为了简化您的流程和不必要的麻烦，我们推出网上报名系统</div>
				<p style="font-size: 30px;">&nbsp;</p>
			</div>

			<div>
				<div class="input-group" style="width: 400px">
					<span class="input-group-addon" id="basic-addon1">手机号码:</span> <input
						id="tel" name="tel" type="text" class="form-control"
						 placeholder="请输入你报名时间填写的手机号">
				</div>

				<br>
				<button type="button" id="searchBtn" class="btn btn-info btn-sm">查&nbsp;&nbsp;&nbsp;&nbsp;询</button>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<button type="button" id="resetBtn" class="btn btn-danger btn-sm"
					onclick="resetForm()">重&nbsp;&nbsp;&nbsp;&nbsp;置</button>

				<br> <br> <br> <br>
				<table id="Table" align="center" class="table table-bordered"
					style="width: 85%; font-family: '微软雅黑'; text-align: center;">
					<tr style="font-size: 15px; height: 40px;">
						<td>学生姓名</td>
						<td>学生年龄</td>
						<td>学生血型</td>
						<td>户口所在地</td>
						<td>家长姓名</td>
						<td>联系方式</td>
						<td>居住地址</td>
						<td>录入时间</td>
						<td>是否录取</td>
						<td>是否缴费</td>
					</tr>
				</table>
			</div>
			<br> <br> <br> <br> <br> <br> <br>
			<br> <br>
			<footer class="footer">
			<div class="contact">
				<div class="wrap">
					<div class="home_about fl">
						<dl>
							<dt>
								<a href=""> 关于本园 </a>
							</dt>
							<dd>
								我们树立正确的幼教观与儿童观，遵循幼儿身心发展规律,保教合一，寓教于乐，促进幼儿健康成长。将大爱无声无息播撒在孩子们幼小的心灵中，让他们在爱的四季中度过多彩而宝贵的童年时光。也正因此，幼儿院形成了“以爱为本、以德为先”、“专心于爱、专注于教”的理念，成为孩子们快乐玩耍、健康成长的儿童乐园。
							</dd>
							<dd>
								<a href="index.html" class="more"> 查看更多 >> </a>
							</dd>
						</dl>
					</div>
					<div class="home_case fl">
						<h2>
							<a href="../cases/index.html"> 班级分布 </a>
						</h2>
						<ul>
							<li>
								<h5>
									<a href="#" target="_blank"> 小一班 </a>
								</h5>
							</li>
							<li>
								<h5>
									<a href="#" target="_blank"> 中一班 </a>
								</h5>
							</li>
							<li>
								<h5>
									<a href="#" target="_blank"> 大一班 </a>
								</h5>
							</li>
						</ul>
					</div>
					<div class="home_service fl">
						<h2>
							<a href="#" tppabs="#"> 教育理念 </a>
						</h2>
						<a class="sub" href="#" tppabs="#"> 以爱为本 </a> <a class="sub"
							href="#" tppabs="#"> 以德为先 </a> <a class="sub" href="#" tppabs="#">
							专注于教 </a> <a class="sub" href="#" tppabs="#"> 专心于爱 </a> <a
							class="sub" href="#" tppabs="#"> 爱在四季 </a>
					</div>
					<div class="home_contact fl">
						<h2>
							<a href="../contact/index.html" tppabs="#"> 联系我们 </a>
						</h2>
						<ul>
							<li></li>
							<li><i class="weibo"> </i> Q Q： <a target="_blank"
								rel="nofollow" href="#"> 123456789 </a></li>
							<li><i class="email"> </i> 邮 箱： <a target="_blank"
								rel="nofollow" href="mailto:798099554@qq.com">
									kindergarten@tyut.net </a></li>
							<li><i class="call"> </i> 电 话：138-8888-8888</li>
							<li><i class="weixin"> </i></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="blogroll">
				<p class="copyright">@2010-2017 幼儿园网站建设 Niu ICP备12071364号</p>
			</div>
		</div>
		</footer>
</body>
<script type="text/javascript">
var webpath = "<%=request.getContextPath()%>";
</script>
<script type="text/javascript"
	src="<%=webpath%>/resources/js/recruit/recruitResult.js"></script>
</html>