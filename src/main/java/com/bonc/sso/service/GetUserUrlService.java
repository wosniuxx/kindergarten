package com.bonc.sso.service;

import java.util.Map;

import com.bonc.sso.model.GetUserUrl;

public interface GetUserUrlService {

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
	public GetUserUrl selectByEnvId(String id);
}
