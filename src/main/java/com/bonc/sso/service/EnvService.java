package com.bonc.sso.service;

import java.util.List;
import java.util.Map;

import com.bonc.frame.web.entity.tenant.Tenant;
import com.bonc.sso.model.Env;

public interface EnvService {

	/**
	 * 分页查询所有环境信息
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
	
	/**
	 * 查询所有环境信息
	 * @return
	 */
	public List<Env> findAll();
	
	/**
	 * 根据环境Id删除该租户
	 * @param tenantId 租户Id
	 * @return
	 */
	public int deleteByEnvId(String EnvId);
	
	/**
	 * 新增租户信息
	 * @param resource 租户对象
	 * @return
	 */
	public int insert(Env env);
	
	/**
	 * 更新租户信息
	 * @param tenant 租户对象
	 * @return
	 */
	public int update(Env env);
	
}
