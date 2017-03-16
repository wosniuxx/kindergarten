package com.bonc.sso.service;

import java.util.List;
import java.util.Map;

import com.bonc.sso.model.Env;
import com.bonc.sso.model.TargetUrl;

public interface TargetUrlService {

	/**
	 * 分页查询所有信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	/**
	 * 根据Id查询
	 * @param
	 * @return
	 */
	public TargetUrl selectByTargetUrlId(String id);
	
	/**
	 * 查询所有信息
	 * @return
	 */
	public List<TargetUrl> findAll();
	
	/**
	 * 根据Id删除
	 * @param 
	 * @return
	 */
	public int deleteByTargetUrlId(String TargetUrlId);
	
	/**
	 * 新增目标地址配置
	 * @param 
	 * @return
	 */
	public int insert(TargetUrl targetUrl);
	
	/**
	 * 更新目标地址配置
	 * @param 
	 * @return
	 */
	public int update(TargetUrl targetUrl);
	
	/**
	 * 根据名称查询
	 */
	public List<TargetUrl> selectByTargetUrlname(Map nmap);
}
