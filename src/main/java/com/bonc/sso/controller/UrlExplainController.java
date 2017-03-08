package com.bonc.sso.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.JsonUtils;
import com.bonc.sso.service.UrlExplainService;

@Controller
@RequestMapping("/urlExplain")
public class UrlExplainController {
	
	@Autowired
	private UrlExplainService urlExplainService;
	
	@RequestMapping("/index")
	public String index() {
		return "sso/urlexplainmanage";
	}

	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		System.out.println(start+"   "+length+"   "+jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return urlExplainService.selectAll(start, length, paramMap);
	}
	

}
