package com.bonc.sso.service;

import java.util.List;
import java.util.Map;

import com.bonc.sso.model.GetUserUrl;

public interface GetUserUrlService {

	/**
	 * 分页查询所有获取用户信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	/**
	 * 根据租户Id查询该环境信息
	 * @param tenantId 租户Id
	 * @return
	 */
	public GetUserUrl selectByGetUserUrlId(String id);
	
	/**
	 * 查询所有获取用户信息
	 * @return
	 */
	public List<GetUserUrl> findAll();
	
	/**
	 * 根据环境Id删除该租户
	 * @param tenantId 租户Id
	 * @return
	 */
	public int deleteByGetUserUrlId(String GetUserUrlId);
	
	/**
	 * 新增租户信息
	 * @param resource 租户对象
	 * @return
	 */
	public int insert(GetUserUrl getUserUrl);
	
	/**
	 * 更新租户信息
	 * @param tenant 租户对象
	 * @return
	 */
	public int update(GetUserUrl getUserUrl);
	
	/**
	 * 根据名称查找
	 * @param getUserUrl
	 * @return
	 */
	public GetUserUrl selectByGetUserUrlName(String getUserUrl);
}
