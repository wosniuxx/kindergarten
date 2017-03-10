package com.bonc.sso.service;

import java.util.Map;

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
	public UrlExplain selectByUrlExplainId(String id);
	
	/**
	 * 根据环境Id删除该租户
	 * @param tenantId 租户Id
	 * @return
	 */
	public int deleteByUrlExplainId(String UrlExplainId);
	
	/**
	 * 新增租户信息
	 * @param resource 租户对象
	 * @return
	 */
	public int insert(UrlExplain urlExplain);
	
	/**
	 * 更新租户信息
	 * @param tenant 租户对象
	 * @return
	 */
	public int update(UrlExplain urlExplain);
}
