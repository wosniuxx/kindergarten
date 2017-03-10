package com.bonc.sso.model;
/**
 * 获取用户接口
 * @author ZY
 *
 */
public class GetUserUrl {
	private String id;
	
	/**
	 * 接口名称
	 */
	private String name;
	/**
	 * 获取用户接口
	 */
	private String getUserUrl;
	/**
	 * 获取用户数据类型
	 * json或者xml
	 * @return
	 */
	private String method;
	/**
	 * 是否需要提供token,1为是
	 */
	private String isToken;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGetUserUrl() {
		return getUserUrl;
	}
	public void setGetUserUrl(String getUserUrl) {
		this.getUserUrl = getUserUrl;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public String getIsToken() {
		return isToken;
	}
	public void setIsToken(String isToken) {
		this.isToken = isToken;
	}
	
	
	
	

}
