package com.bonc.sso.model;

/**
 * 环境说明
 * @author ZY
 *
 */
public class Env {
	private String id;
	/**
	 * 环境名称
	 */
	private String envname;
	/**
	 * 环境地址
	 */
	private String service;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getEnvname() {
		return envname;
	}
	public void setEnvname(String envname) {
		this.envname = envname;
	}
	
	
	
	
}
