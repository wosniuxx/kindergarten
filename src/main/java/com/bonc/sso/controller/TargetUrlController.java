package com.bonc.sso.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.service.TargetUrlService;



@Controller
@RequestMapping("/targetUrl")
public class TargetUrlController {
	
	@Autowired
	private TargetUrlService targetUrlService;
	
	@RequestMapping("/index")
	public String index() {
		return "sso/targeturlmanage";
	}
	
	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return targetUrlService.selectAll(start, length, paramMap);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		return targetUrlService.deleteByTargetUrlId(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(TargetUrl targetUrl) {
		targetUrl.setId(IdUtil.createId());
		return targetUrlService.insert(targetUrl);
	}
	
	@ResponseBody
	@RequestMapping("/getTargetUrlById")
	public TargetUrl selectById(String id) {
		TargetUrl targetUrl = targetUrlService.selectByTargetUrlId(id);
		return targetUrl;
	}
	
	@ResponseBody
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public int update(TargetUrl targetUrl){
		return targetUrlService.update(targetUrl);
	}
	
	@ResponseBody
	@RequestMapping(value = "/getTargetUrl", method = RequestMethod.POST)
	public Object getTargetUrl(String envname) {
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("envname", envname);
		return JSON.toJSON(targetUrlService.selectByTargetUrlname(map));
	}
	
	@ResponseBody
	@RequestMapping(value = "/getTargetUrlPro", method = RequestMethod.POST)
	public Object getTargetUrlPro(String name) {
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("name", name);
		return JSON.toJSON(targetUrlService.selectByTargetUrlname(map));
	}
}
