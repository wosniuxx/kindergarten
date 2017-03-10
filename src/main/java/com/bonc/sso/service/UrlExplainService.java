package com.bonc.sso.service;

import java.util.Map;

import com.bonc.frame.web.entity.tenant.Tenant;
import com.bonc.sso.model.UrlExplain;

public interface UrlExplainService {
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
	public UrlExplain selectByEnvId(String id);
	
	/**
	 * 添加接口
	 * @param tenantId 租户Id
	 * @return
	 */
	public void insert(UrlExplain urlExplain);
	
}
