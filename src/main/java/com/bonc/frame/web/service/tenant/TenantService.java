package com.bonc.frame.web.service.tenant;

import java.util.Map;

import com.bonc.frame.web.entity.role.Role;
import com.bonc.frame.web.entity.tenant.Tenant;

public interface TenantService {
	
	/**
	 * 查询所有租户
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	/**
	 * 根据租户Id删除该租户
	 * @param tenantId 租户Id
	 * @return
	 */
	public int deleteByTenantId(String tenantId);
	
	/**
	 * 新增租户信息
	 * @param resource 租户对象
	 * @return
	 */
	public int insert(Tenant tenant);
	
	/**
	 * 根据租户Id查询该租户信息
	 * @param tenantId 租户Id
	 * @return
	 */
	public Tenant selectByTenantId(String tenantId);
	/**
	 * 更新租户信息
	 * @param tenant 租户对象
	 * @return
	 */
	public int update(Tenant tenant);
}
