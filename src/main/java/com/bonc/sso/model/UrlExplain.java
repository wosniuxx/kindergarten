package com.bonc.sso.model;

/**
 * 接口配置
 * @author ZY
 *
 */
public class UrlExplain {
	private String id;
	/**
	 * 接口名称
	 */
	private String introduce;
	/**
	 * 接口环境
	 */
	private String envname;
	/**
	 * 获取用户接口
	 */
	private String getUserUrl;
	/**
	 * 目标地址
	 */
	private String targetUrl;
	
	/**
	 * url标识
	 */
	private String sign;
	/**
	 * 是否启用
	 */
	private String status;
	/**
	 * 最后的拼接url
	 */
	private String finalUrl;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIntroduce() {
		return introduce;
	}
	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}
	public String getEnvname() {
		return envname;
	}
	public void setEnvname(String envname) {
		this.envname = envname;
	}
	public String getGetUserUrl() {
		return getUserUrl;
	}
	public void setGetUserUrl(String getUserUrl) {
		this.getUserUrl = getUserUrl;
	}
	public String getTargetUrl() {
		return targetUrl;
	}
	public void setTargetUrl(String targetUrl) {
		this.targetUrl = targetUrl;
	}
	public String getFinalUrl() {
		return finalUrl;
	}
	public void setFinalUrl(String finalUrl) {
		this.finalUrl = finalUrl;
	}
	public String getSign() {
		return sign;
	}
	public void setSign(String sign) {
		this.sign = sign;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

}
