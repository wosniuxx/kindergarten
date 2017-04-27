package com.bonc.frame.security.authication.provider;

import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import com.bonc.frame.security.authication.IAuthication;
import com.bonc.frame.security.repository.ISecurityRepository;
import com.bonc.frame.security.repository.SecurityRepositoryFactory;
import com.bonc.frame.security.util.Constant;
import com.bonc.frame.security.util.Constant.ResourceType;
import com.bonc.frame.util.MD5Util;
import com.bonc.frame.util.OnlineUserList;
import com.bonc.frame.util.UserUtil;
import com.bonc.frame.web.entity.log.UserLoginLog;
import com.bonc.frame.web.entity.resources.Resources;
import com.bonc.frame.web.entity.user.User;
import com.bonc.frame.web.exception.LoginException;
import com.bonc.frame.web.exception.LoginException.ExceptionType;
import com.bonc.frame.web.service.resources.ResourceService;
import com.bonc.frame.web.service.user.UserService;
import com.bonc.security.client.SecurityRestClient;

/**
 * @author 作者: 吕一凡 
 * @date 2017年1月9日 下午9:02:57 
 * @version 版本: 1.0
 * 普通登录用户信息校验实现类
 */
@Component("normalAuthicationProvider")
public class NormalAuthicationProvider implements IAuthication{
	
	private Log log = LogFactory.getLog(this.getClass());
	
	@Resource
	private UserService userService;
	
	@Resource
	private ResourceService resourceService;
	
	private ISecurityRepository securityRepository = SecurityRepositoryFactory.getRepository();
	
	//用户未被锁定
	public final static String UNLOCK = "1";
	
	//用户已锁定
	public final static String LOCK = "-1";
	
	private OnlineUserList ul=OnlineUserList.getInstance();
	
	//校验用户名密码是否正确，返回userId 不是loginId
	@Override
	public Map<String, String> authCheck(HttpServletRequest request) throws LoginException {
		Map<String,String> map = new HashMap<String,String>();
	    SecurityRestClient restClient = new SecurityRestClient();
		//String loginId = request.getParameter("loginId");
		String loginId = request.getParameter("loginId");
		System.out.println("-----------------"+loginId);
		if("".equals(loginId)){
			throw new LoginException(ExceptionType.isEmpty);
		}
		User user = userService.selectByLoginId(loginId);
		if(user == null){
			throw new LoginException(ExceptionType.notExist);
		}else if(!getMD5Passwd(request.getParameter("password")).equals(user.getPassword())){
			throw new LoginException(ExceptionType.pwdFalse);
		}else if(LOCK.equals(user.getState())){
			throw new LoginException(ExceptionType.isLocked);
		}
		map.put("userId", user.getUserId());
		map.put("loginId", user.getLoginId());
		return map;
	}
	
	@Override
	public void putUserResource(HttpServletRequest request,String userId) {
		securityRepository.putResourceByType(Constant.ResourceType.UserResource, request, userService.selectByUserId(userId));
	}

	@Override
	public void putUserMenuResource(HttpServletRequest request,String userId) {
		securityRepository.putResourceByType(Constant.ResourceType.UserMenuResourceList, request, resourceService.userMenuTree(userId));
	}

	@Override
	public void putMenuResource(HttpServletRequest request,String userId) {
		Pattern pat = Pattern.compile("(/\\w+?/).*");  		
		List<Resources> resourceList = resourceService.selectAll(userId);
		for(Resources r : resourceList){
			if(r.getUrl() == null)continue;
			Matcher matcher = pat.matcher(r.getUrl());
			if(matcher.find()) r.setUrl(matcher.group(1)+"**");
		}
		securityRepository.putResourceByType(Constant.ResourceType.MenuResourceList, request, resourceList);
	}


	@Override
	public void putButtonResource(HttpServletRequest request, String userId) {
		securityRepository.putResourceByType(Constant.ResourceType.ButtonResourceList, request, resourceService.selectAllButton(userId));
	}
	
	@Override
	public void updateUserPasswd(HttpServletRequest request, String newPasswd) {
		User user = (User) securityRepository.getResourceByType(ResourceType.UserResource, request);
		user.setPassword(newPasswd);
		user.setPwdUpdateDate(new Date());
		userService.update(user);
		securityRepository.putResourceByType(ResourceType.UserResource, request, user);
	}
	
	@Override
	public void doUserLoginLog(HttpServletRequest request, String loginId) {
		UserLoginLog log = new UserLoginLog();
		log.setUserId(loginId);
		log.setLoginIp(request.getRemoteAddr());
		userService.doUserLoginLog(log);
	}

	@Override
	public void invalidateSessionResource(HttpServletRequest request) {
		request.getSession().invalidate();
	}
	
	private String getMD5Passwd(String orgPasswd){
		try {
			return MD5Util.Bit32(orgPasswd);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			log.error("密码转换失败！", e);
			return null;
		}
	}
	
	@Override
	public void countOnlineUser(HttpServletRequest request,String userId){
		ul.setUser(UserUtil.getUserResource(request));
		request.getSession().setAttribute("OnlineUserList", ul);
	}

}
