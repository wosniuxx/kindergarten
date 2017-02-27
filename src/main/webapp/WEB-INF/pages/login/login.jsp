<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.bonc.frame.util.SystemPropertiesUtils"
	language="java"%>
<%
   String webpath = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
  <%@ include file="../common-head.jsp"%>
  <title><%=SystemPropertiesUtils.getSystemTitle() %></title>
  <link rel="stylesheet" href="<%=webpath %>/resources/css/login/login.css" />
</head> 
<body onkeydown="keyEnter();"> 
	<div class="login-container">
		<div class="login-bgimg"></div>
		<div class="login-content">
			<h2 class="logo">
				<img src="<%=webpath %>/resources/img/frame/logo.png" title="河南联通大数据精细化营销平台" alt="河南联通大数据精细化营销平台">
				<span><%=SystemPropertiesUtils.getSystemTitle() %></span>
			</h2>
			<div class="login-wrapper">
				<div class="form-wrap">
					<form id="loginForm" method="post"  action="<%=webpath %>/login/actionLogin" >
						<div class="username inp-wrap">
							<label for="userName">用户名</label>
							<div class="txt-wrapper clearfix">
								<span class="login-img"><i></i></span>
								<span class="login-inp login-name"><input id="userName" type="text" name="loginId" placeholder="请输入用户名"></span>								
							</div>
						</div>
						<div class="password inp-wrap">
							<label for="password">密码</label>
							<div class="txt-wrapper clearfix">
								<span class="login-img"><i></i></span>
								<span class="login-inp login-pass"><input id="password" type="password" name="password" placeholder="请输入密码"></span>								
							</div>
						</div>
						<div class="inp-wrap rem-wrap clearfix">
							<div class="fl clearfix">
								<a href="javascript:;" onclick="chooseCheckbox(this);"></a>
								<span class="rem-txt">记住密码</span>
							</div>
							<span class="fr tips"></span>
						</div>
						<div class="inp-wrap sub-wrapper">
							<input type="button" value="登&nbsp录" id="login" onclick="loginFun();">
						</div>
					</form>
				</div>
			</div>
			<div class="login-foot">
				<a href="javascript:;">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="javascript:;">联系我们</a>
			</div>
		</div>
	</div>
	<script src="<%=request.getContextPath() %>/resources/plugin/forIE/browser-fix.js"></script>
	<script src="<%=request.getContextPath() %>/resources/plugin/jquery/jquery-1.10.2.js"></script>
	<script src="<%=request.getContextPath() %>/resources/plugin/bootstrap-menu/BootstrapMenu.min.js"></script>
	<!--[if lte IE 9]>
		<script src="<%=request.getContextPath() %>/resources/plugin/forIE/html5shiv.js"></script>
		<script src="<%=request.getContextPath() %>/resources/plugin/forIE/respond.js"></script>
	<![endif]-->
	<script src="<%=request.getContextPath() %>/resources/plugin/layer/layer.js"></script>
	<script src="<%=request.getContextPath() %>/resources/plugin/frame-fix/ajax-fix.js"></script>
	<script src="<%=request.getContextPath() %>/resources/plugin/utils/jquery-ext.js"></script>
	<script src="<%=request.getContextPath() %>/resources/plugin/utils/json.js"></script>
	<script src="<%=request.getContextPath() %>/resources/js/common.js"></script>
	<script src="<%=webpath %>/resources/js/login/login.js"></script>
	<script src="<%=webpath %>/resources/plugin/jquery/jquery.cookie.js"></script>  
	<script>
		var webpath = '<%=webpath%>';
		if(top.location != location){//解决iframe中跳到登陆页面的问题  
			window.parent.location.reload();
		}
		$(function(){
			if('<%=request.getAttribute("message") %>' == 'notExist'){
				$('.tips').html("<font color='#da392e'>用户名不存在</font>");
			}else if('<%=request.getAttribute("message")%>' == 'pwdFalse'){
				$('.tips').html("<font color='#da392e'>密码错误</font>");
			}else if('<%=request.getAttribute("message")%>' == 'isLocked'){
				$('.tips').html("<font color='#da392e'>用户已被锁定</font>");
			}else if('<%=request.getAttribute("message")%>' == 'isEmpty'){
				$('.tips').html("<font color='#da392e'>用户名为空</font>");
			}
		})
	</script>
</body>
</html>