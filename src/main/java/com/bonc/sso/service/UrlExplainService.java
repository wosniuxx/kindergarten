package com.bonc.sso.service;

import java.util.List;
import java.util.Map;

import com.bonc.sso.model.UrlExplain;

public interface UrlExplainService {
	/**
	 * 查询所有环境信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	
	/**
	 * 添加接口
	 * @param tenantId 租户Id
	 * @return
	 */
	public void insert(UrlExplain urlExplain);

	/**
	 * 根据环境Id删除该租户
	 * @param tenantId 租户Id
	 * @return
	 */
	public int deleteByUrlExplainId(String UrlExplainId);
	
	/**
	 * 根据id查询
	 * @param id
	 * @return
	 */
	public UrlExplain selectByUrlExplainId(String id);
	
	/**
	 * 更新url信息
	 * @param tenant 租户对象
	 * @return
	 */
	public int update(UrlExplain urlExplain);
	
	/**
	 * 查找全部的sign标签
	 * @param
	 * @return
	 */
	public List<String> selectsign();
}
