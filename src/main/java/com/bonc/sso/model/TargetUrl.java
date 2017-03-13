package com.bonc.sso.model;

/**
 * 目标地址
 * @author ZY
 *
 */
public class TargetUrl {
	private String id;
	/**
	 * 目标地址名称
	 */
	private String name;
	/**
	 * 目标地址url
	 */
	private String targetUrl;
	/**
	 * 目标环境名称
	 */
	private String envname;
	/**
	 * 目标状态
	 */
	private String state;
	
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
	public String getTargetUrl() {
		return targetUrl;
	}
	public void setTargetUrl(String targetUrl) {
		this.targetUrl = targetUrl;
	}
	public String getEnvname() {
		return envname;
	}
	public void setEnvname(String envname) {
		this.envname = envname;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
}
