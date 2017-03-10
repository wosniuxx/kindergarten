package com.bonc.sso.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.frame.web.entity.tenant.Tenant;
import com.bonc.frame.web.service.tenant.TenantService;
import com.bonc.sso.model.Env;
import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.service.EnvService;

@Controller
@RequestMapping("/Env")
public class EnvironmentController {
	
	@Autowired
	private EnvService envService;
	
	@RequestMapping("/index")
	public String index() {
		return "sso/envmanage";
	}
	
	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		System.out.println(start+"   "+length+"   "+jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return envService.selectAll(start, length, paramMap);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		System.out.println("shancghula");
		return envService.deleteByEnvId(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(Env env) {
		return envService.insert(env);
	}
	
	@ResponseBody
	@RequestMapping("/getEnvById")
	public Env selectById(String id) {
		Env env = envService.selectByEnvId(id);
		return env;
	}
	
	@ResponseBody
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public int update(Env env){
		System.out.println(env);
		return envService.update(env);
	}
	
}
