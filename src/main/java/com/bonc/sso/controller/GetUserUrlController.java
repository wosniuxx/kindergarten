package com.bonc.sso.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.sso.model.GetUserUrl;
import com.bonc.sso.service.GetUserUrlService;

@Controller
@RequestMapping("/GetUserUrl")
public class GetUserUrlController {

	@Autowired
	private GetUserUrlService getUserUrlService;
	
	@RequestMapping("/index")
	public String index(){
		return "/sso/getuserurlmanage";
	}
	
	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start,String length,String jsonStr){
		System.out.println(start+"   "+length+"   "+jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return getUserUrlService.selectAll(start, length, paramMap);
	}
	
	@ResponseBody
	@RequestMapping(value="/delete",method=RequestMethod.POST)
	public int delete(String id){
		return getUserUrlService.deleteByGetUserUrlId(id);
	}
	
	@ResponseBody
	@RequestMapping(value="/insert",method=RequestMethod.POST)
	public int insert(GetUserUrl getUserUrl){
		getUserUrl.setId(IdUtil.createId());
		return getUserUrlService.insert(getUserUrl);
	}
	
	@ResponseBody
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public int update(GetUserUrl getUserUrl){
		return getUserUrlService.update(getUserUrl);
	}
	
	@ResponseBody
	@RequestMapping("/getGetUserUrlById")
	public GetUserUrl selectById(String id){
		GetUserUrl getUserUrl = getUserUrlService.selectByGetUserUrlId(id);
		return getUserUrl;
	}
}
