package com.bonc.frame.web.controller.tenant;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.frame.web.entity.role.Role;
import com.bonc.frame.web.entity.tenant.Tenant;
import com.bonc.frame.web.service.tenant.TenantService;

@Controller
@RequestMapping("/tenant")
public class TenantController {

	@Resource
	private TenantService tenantService;

	@RequestMapping("/index")
	public String index() {
		return "systemconfig/tenantmanage";
	}

	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return tenantService.selectAll(start, length, paramMap);
	}

	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String tenantId) {
		System.out.println("shancghula");
		return tenantService.deleteByTenantId(tenantId);
	}

	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(Tenant tenant) {
		tenant.setTenantId(IdUtil.createId());
		return tenantService.insert(tenant);
	}

	@ResponseBody
	@RequestMapping("/getTenantById")
	public Tenant selectById(String tenantId) {
		Tenant tenant = tenantService.selectByTenantId(tenantId);
		return tenant;
	}
	
	@ResponseBody
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public int update(Tenant tenant){
		return tenantService.update(tenant);
	}
}
