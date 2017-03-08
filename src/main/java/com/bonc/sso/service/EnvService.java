package com.bonc.sso.service;

import java.util.Map;

import com.bonc.sso.model.Env;

public interface EnvService {

	/**
	 * 查询所有环境信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	/**
	 * 根据租户Id查询该环境信息
	 * @param tenantId 租户Id
	 * @return
	 */
	public Env selectByEnvId(String id);
	
	/**
	 * 根据环境名称查询该环境地址
	 * @param tenantId 租户Id
	 * @return
	 */
	public Env selectByEnvName(String envname);

}
