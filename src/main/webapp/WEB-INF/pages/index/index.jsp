<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String webpath = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>幼儿园网站</title>
<meta name="Keywords" content="123" />
<meta name="Description" content="," />

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<link href="<%=webpath%>/resources/css/index/index2016.css"
	type="text/css" rel="stylesheet" />
<script src="<%=webpath%>/resources/js/jquery-1.4.4.min.js"/></script>
<script src="<%=webpath%>/resources/js/index/index2016.js"></script>
	

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
					<li id="menu1"><a href="#situation"> 本园概况 </a></li>
					<li id="menu2"><a href="#notice"> 园区公告 </a></li>
					<li id="menu3"><a href="#teach"> 教学展示 </a></li>
					<li id="menu4"><a href="#classes"> 班级展示 </a></li>
					<li id="menu5"><a href="#recruit"> 招生入口 </a></li>
				</ul>
				<span class="nav_icon"> </span> </nav>
			</div>
		</div>
		</header>
		
		<!--banner-->
		<div class="banner">
			<ul class="pic" id="pic">
				<li
					style="background-image:url(<%=webpath%>/resources/img/index/images/kinder/banner-5.png)">
					<a title="品牌官网设计" href=""> </a>
				</li>
				<li
					style="background-image:url(<%=webpath%>/resources/img/index/images/kinder/banner-7.png)">
					<a title="TI Alliance" href=""> </a>
				</li>
				<li
					style="background-image:url(<%=webpath%>/resources/img/index/images/kinder/banner-2.png)">
					<a title="成功案例" href=""> </a>
				</li>
			</ul>
			<ul class="list" id="list_pic">
				<li class="on"></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
	<!--main-->
	<div id="section2" init="true" class="section section2">
		<div class="wrap">
			<div class="home_title" id="situation">
				<a href="service/index.html" target="_blank"> <img
					src="<%=webpath%>/resources/img/index/images/kinder/p-easy.png"
					width="262" height="78" alt="服务范围" />
				</a>
			</div>
			<div class="service_text">为您详细介绍本园的园区历史、周边环境、社区安全、师资力量</div>
			<div class="serve_column">
				<ul class="fix">
					<li class="c1">
						<dl onclick="tohistory()">
							<dt class="pic">
								<a href="javascript:void(0);" target="_blank"> <img
									src="<%=webpath%>/resources/img/index/images/kinder/a_1.png"
									alt="品牌官网设计" width="270" height="200" />
								</a>
							</dt>
							<dt class="t">
								<a href="javascript:void(0);" target="_blank"> 园区历史 </a>
							</dt>
							<dd>本院从开园至今已由20年余载</dd>
							<dd>拥有自己丰富的历史文化和文化积淀</dd>
							<dd>老师们一直秉承着的一个信念</dd>
							<dd>一切为了孩子的明天</dd>
						</dl>
					</li>
					<li class="c2">
						<dl onclick="toenvironment()">
							<dt class="pic">
								<a href="javascript:void(0);" target="_blank"><img
									src="<%=webpath%>/resources/img/index/images/kinder/a_2.jpg"
									alt="商城网站开发" width="270" height="200" /> </a>
								</a>
							</dt>
							<dt class="t" >
								<a href="javascript:void(0);" rel="noFollow" target="_blank"> 周边环境 </a>
							</dt>
							<dd>本园位于太原市小店区并州南路42号院内</dd>
							<dd>本院属于一个成熟的社区环境之中</dd>
							<dd>面对及沙河街小学以及太原第四十七中学</dd>
							<dd>便于孩子日后的成长</dd>
						</dl>
					</li>
					<li class="c3">
						<dl onclick="tosecurity()">
							<dt class="pic">
								<a href="javascript:void(0);"> <img
									src="<%=webpath%>/resources/img/index/images/kinder/a_3.jpg"
									alt="手机微信网站建设" width="270" height="200" />
								</a>
							</dt>
							<dt class="t">
								<a href="javascript:void(0);"> 社区安全 </a>
							</dt>
							<dd>本园位于一个成熟稳定的单位园区内部</dd>
							<dd>可以从根本上减少外来陌生人员</dd>
							<dd>以及小商小贩对孩子的影响</dd>
							<dd>保护孩子的安全从身边做起</dd>
						</dl>
					</li>
					<li class="c4">
						<dl>
							<dt class="pic">
								<a href="solutions/index.html"> <img
									src="<%=webpath%>/resources/img/index/images/kinder/a_4.jpg"
									alt="解决方案" width="270" height="200" />
								</a>
							</dt>
							<dt class="t">
								<a href="javascript:void(0);"> 师资力量 </a>
							</dt>
							<dd>本园教师毕业于山西省幼儿类师范院校</dd>
							<dd>他们将育儿的理念和实践紧密结合</dd>
							<dd>全方位考虑各种因素，在因材施教的同时</dd>
							<dd>给予孩子最好的发展</dd>
						</dl>
					</li>
				</ul>
				<div class="c"></div>
			</div>
		</div>
		<div class="service_foot">一切为了孩子，为了孩子一切，为了一切孩子</div>
	</div>
	<!--case-->
	<div id="section3" init="false" class="section section3">
		<div class="succeed">
			<div class="succeed_title" id="notice">
				<a href="cases/index.html"> <img
					src="<%=webpath%>/resources/img/index/images/kinder/p-notice.png"
					alt="成功案例" width="262" height="78" />
				</a>
			</div>
		</div>

		<div class="">
				<div class="wrap">
					<div class="home_news_list_inner">

						<div class="home_news_item">
							<dl>
								<dt>2016年12月31日</dt>
								<dd class="t">
									<a> 元旦活动 </a>
								</dd>
								<dd class="spec">
									<a>
										幼儿对自然界的一切都充满了好奇。于是我们便抓住这一幼儿感兴趣组织活动。让幼儿在玩耍的过程中通过观察、感知、比较、交流获取对失事物基本特征的了解…
									</a>
								</dd>
							</dl>
						</div>
						<div class="home_news_item">
							<dl>
								<dt>2016年6月1日</dt>
								<dd class="t">
									<a> 欢度六一  </a>
								</dd>
								<dd class="spec">
									<a>
										我们追求太阳的温暖，却错过了月亮的温柔;我们追求新鲜的生活，却遗忘了最需要滋润的心灵!对我们的童年说声好久不见，允许我们再过上一个儿童节吧!
									</a>
								</dd>
							</dl>
						</div>
						<div class="home_news_item">
							<dl>
								<dt>2017月4月25日</dt>
								<dd class="t">
									<a> 家长开放日 </a>
								</dd>
								<dd class="spec">
									<a>
										他们总是那样精力充沛、精神饱满；他们的想象力连安徒生都要嫉妒三分，他们的创造力令莱特兄弟都佩服。能够发挥自己的想象力，把不同的玩具彼此联系，创造出一个奇妙有趣的玩具世界…
									</a>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>

		<div class="btn_cases_more">
			<a href="javascript:void(0);" title="查看更多" class="btn"> 查看更多 </a>
		</div>
	</div>
	
	
	<br><br><br><br><br><br>
	
	<!-- solutions -->
	<div id="section4" init="false" class="section section4">
		<div class="home_solutions">
			<div class="home_solutions_title" id="teach">
				<a href="javascript:void(0);" target="_blank"> <img
					src="<%=webpath%>/resources/img/index/images/kinder/p-study.png"
					alt="解决方案" width="320" height="95" />
				</a>
			</div>
			<div class="home_solutions_text">给家长最放心的教育，给孩子最欢心的生活</div>
			<div class="home_solutions_list wrap">
				<div class="home_solutions_list_inner">
					<dl class="solu_dl_0" >
						<dt >
							<a href="javascript:void(0);" target="_blank">
							</a>
						</dt>
						<dd class="t">
							<a href="javascript:void(0);" target="_blank"> 名师风采 </a>
						</dd>
						<dd class="spec">优秀的教师，不仅仅可以调节孩子的情绪，还可以调动孩子的思维，使孩子能够更好的成长</dd>
						<dd class="bg"></dd>
					</dl>
					<dl class="solu_dl_1">
						<dt>
							<a href="javascript:void(0);" target="_blank"> </a>
						</dt>
						<dd class="t">
							<a href="javascript:void(0);" target="_blank"> 家园共育 </a>
						</dd>
						<dd class="spec">
							家庭才是孩子最好的教育环境。孩子会模仿父母的一言一行。幼儿园和家庭应该携手，给孩子共同创造更好的成长环境</dd>
						<dd class="bg"></dd>
					</dl>
					<dl class="solu_dl_2">
						<dt>
							<a href="javascript:void(0);" target="_blank"> </a>
						</dt>
						<dd class="t">
							<a href="javascript:void(0);" target="_blank"> 编程思维 </a>
						</dd>
						<dd class="spec">
							随着应用计算机的普及，孩子接受应该趁早。通过编程思维的训练，可以使得孩子富有逻辑性，做事更加调理</dd>
						<dd class="bg"></dd>
					</dl>
					<dl class="solu_dl_3">
						<dt>
							<a href="javascript:void(0);" target="_blank"> </a>
						</dt>
						<dd class="t">
							<a href="javascript:void(0);" target="_blank"> 教材样式 </a>
						</dd>
						<dd class="spec">我们日用教材，均可从中查询定价。若发生教材丢失，家长可根据其自行购买</dd>
						<dd class="bg"></dd>
					</dl>
					<div class="c"></div>
				</div>
			</div>
			<div class="btn_solutions_more">
				<a href="#teach" title="解决方案" class="btn"> 查看更多 </a>
			</div>
		</div>
	</div>
	
	
	<!--news-->
	<div id="section5" init="false" class="section section5">
		<div class="home_news">
			<div class="home_news_title" id="classes">
				<a target="_blank"> <img
					src="<%=webpath%>/resources/img/index/images/kinder/p-classes.png"
					width="320" height="95"  />
				</a>
			</div>
			<div class="home_news_text">给孩子一个看到自己的机会</div>
			<div class="home_news_list">
				<div class="wrap">
					<div class="home_news_list_inner">

						<div class="home_news_item">
							<dl>
								<dt>2017-5-1</dt>
								<dd class="t">
									<a> 小一班 </a>
								</dd>
								<dd class="spec">
									<a>
										幼儿对自然界的一切都充满了好奇。于是我们便抓住这一幼儿感兴趣组织活动。让幼儿在玩耍的过程中通过观察、感知、比较、交流获取对失事物基本特征的了解…
									</a>
								</dd>
							</dl>
						</div>
						<div class="home_news_item">
							<dl>
								<dt>2017-5-1</dt>
								<dd class="t">
									<a> 中一班 </a>
								</dd>
								<dd class="spec">
									<a>
										我们追求太阳的温暖，却错过了月亮的温柔;我们追求新鲜的生活，却遗忘了最需要滋润的心灵!对我们的童年说声好久不见，允许我们再过上一个儿童节吧!
									</a>
								</dd>
							</dl>
						</div>
						<div class="home_news_item">
							<dl>
								<dt>2017-5-1</dt>
								<dd class="t">
									<a> 大一班 </a>
								</dd>
								<dd class="spec">
									<a>
										他们总是那样精力充沛、精神饱满；他们的想象力连安徒生都要嫉妒三分，他们的创造力令莱特兄弟都佩服。能够发挥自己的想象力，把不同的玩具彼此联系，创造出一个奇妙有趣的玩具世界…
									</a>
								</dd>
							</dl>
						</div>
						<div class="c"></div>
					</div>
					<div class="btn_news_more">
						<a href="#classes" title="查看更多" class="btn"> 查看更多 </a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--partner-->
	<div id="section6" init="false" class="section section6">
		<div class="home_partner">
			<div class="home_partner_title" id="recruit">
				<a href="javascript:void(0);" target="_blank"> <img
					src="<%=webpath%>/resources/img/index/images/kinder/p-admissions.png"
					alt="招生" width="350" height="104" />
				</a>
			</div>
			<div class="home_partner_text">为了简化您的流程和不必要的麻烦，我们推出网上报名系统</div>
			<div class="btn_news_more">
				<a href="<%=webpath%>/Recruit/recruit" title="点击此处跳转至报名页" class="btn">
					点击此处跳转至报名页 </a>
			</div>
		</div>
		<footer class="footer">
		<div class="contact">
			<div class="wrap">
				<div class="home_about fl">
					<dl>
						<dt>
							<a href="index.html"> 关于本园 </a>
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
						<a href="#"> 教育理念 </a>
					</h2>
					<a class="sub" href="#"> 以爱为本 </a> <a class="sub" href="#">
						以德为先 </a> <a class="sub" href="#"> 专注于教 </a> <a class="sub" href="#">
						专心于爱 </a> <a class="sub" href="#"> 爱在四季 </a>
				</div>
				<div class="home_contact fl">
					<h2>
						<a href="../contact/index.html"> 联系我们 </a>
					</h2>
					<ul>
						<li></i></li>
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
	</div>
</body>
<script type="text/javascript">
		document.getElementById("menu1").className = "on";
	
		function tohistory(){
			location.href = "<%=request.getContextPath() %>/index/history";
		}
		function toenvironment(){
			location.href = "<%=request.getContextPath() %>/index/environment";
		}
		function tosecurity(){
			location.href = "<%=request.getContextPath() %>/index/security";
		}
</script>
</html>