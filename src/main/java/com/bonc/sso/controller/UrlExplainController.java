package com.bonc.sso.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.JsonUtils;
import com.bonc.sso.service.EnvService;
import com.bonc.sso.service.GetUserUrlService;
import com.bonc.sso.service.TargetUrlService;
import com.bonc.sso.service.UrlExplainService;

@Controller
@RequestMapping("/urlExplain")
public class UrlExplainController {
	
	@Autowired
	private UrlExplainService urlExplainService;
	@Autowired
	private EnvService envService;
	@Autowired
	private TargetUrlService targetUrlService;
	@Autowired
	private GetUserUrlService getUserUrlSerice;
	
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
	
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	public String insert(Model model) {
		System.out.println("---------------------"+envService.findAll().size());
		model.addAttribute("envnames", envService.findAll());
		model.addAttribute("targeturls", targetUrlService.findAll());
		model.addAttribute("geturls", getUserUrlSerice.findAll());
		return "sso/urlexplainadd";
	}

}
