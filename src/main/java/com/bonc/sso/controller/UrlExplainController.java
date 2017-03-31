package com.bonc.sso.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.bonc.frame.util.JsonUtils;
import com.bonc.sso.model.UrlExplain;
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
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return urlExplainService.selectAll(start, length, paramMap);
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	public String insert(Model model) {
		model.addAttribute("envnames", envService.findAll());
		model.addAttribute("targeturls", targetUrlService.findAll());
		model.addAttribute("geturls", getUserUrlSerice.findAll());
		model.addAttribute("dtstr", "");
		return "sso/urlexplainadd";
	}
	
	@RequestMapping(value = "/tourlexplainyun", method = RequestMethod.GET)
	public String toUrlExplainYun(Model model) {
		model.addAttribute("envnames", envService.findAll());
		model.addAttribute("targeturls", targetUrlService.findAll());
		model.addAttribute("geturls", getUserUrlSerice.findAll());
		model.addAttribute("dtstr", "");
		return "sso/urlexplainyunadd";
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public void insert(UrlExplain urlExplain) {
		urlExplainService.insert(urlExplain);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		return urlExplainService.deleteByUrlExplainId(id);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public String update(String id,Model model,String type) {
		UrlExplain urlExplain = urlExplainService.selectByUrlExplainId(id);
		model.addAttribute("envnames", envService.findAll());
		model.addAttribute("targeturls", targetUrlService.findAll());
		model.addAttribute("geturls", getUserUrlSerice.findAll());
		model.addAttribute("urlExplain", urlExplain);
		model.addAttribute("type", type);
		String JSONStr = JSON.toJSONString(urlExplain);
		model.addAttribute("dtstr", JSONStr);
		return "sso/urlexplainadd";
	}
	
	@ResponseBody
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(UrlExplain urlExplain) {
		urlExplainService.update(urlExplain);
	}
	
	@ResponseBody
	@RequestMapping(value = "/getTargetUrl", method = RequestMethod.POST)
	public Object getTargetUrl(String envname) {
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("envname", envname);
		return JSON.toJSON(targetUrlService.selectByTargetUrlname(map));
	}
	
	//查询并返回sign
	@ResponseBody
	@RequestMapping(value="/selectsign", method = RequestMethod.POST)
	public String selectSign(@RequestParam("sign") String sign){
		System.out.println(sign);
		List<String> selectSignList = urlExplainService.selectsign();
		//String str = JSON.toJSON(selectSignList).toString();
		boolean boo = selectSignList.contains(sign);
		String d;
		if(boo==true){
			d = "1";
		}else{
			d = "-1";
		}
		return d;
	}
}
