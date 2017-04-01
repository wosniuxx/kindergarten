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
import com.bonc.sso.model.UrlModel;
import com.bonc.sso.service.EnvService;
import com.bonc.sso.service.GetUserUrlService;
import com.bonc.sso.service.TargetUrlService;
import com.bonc.sso.service.UrlModelService;

@Controller
@RequestMapping("/urlModel")
public class UrlModelController {
	
	@Autowired
	private UrlModelService urlModelService;
	@Autowired
	private TargetUrlService targetUrlService;
	@Autowired
	private GetUserUrlService getUserUrlSerice;
	
	@RequestMapping("/index")
	public String index() {
		return "sso/urlModelmanage";
	}

	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return urlModelService.selectAll(start, length, paramMap);
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	public String insert(Model model) {
		model.addAttribute("targeturls", targetUrlService.findAll());
		model.addAttribute("geturls", getUserUrlSerice.findAll());
		model.addAttribute("dtstr", "");
		return "sso/urlModeladd";
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public void insert(UrlModel UrlModel) {
	    urlModelService.insert(UrlModel);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		return urlModelService.deleteByUrlModelId(id);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public String update(String id,Model model,String type) {
		UrlModel urlModel = urlModelService.selectByUrlModelId(id);
		model.addAttribute("targeturls", targetUrlService.findAll());
		model.addAttribute("geturls", getUserUrlSerice.findAll());
		model.addAttribute("urlModel", urlModel);
		model.addAttribute("type", type);
		String JSONStr = JSON.toJSONString(urlModel);
		model.addAttribute("dtstr", JSONStr);
		return "sso/urlModeladd";
	}
	
	@ResponseBody
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(UrlModel urlModel) {
	    urlModelService.update(urlModel);
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
		List<String> selectSignList = urlModelService.selectsign();
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
