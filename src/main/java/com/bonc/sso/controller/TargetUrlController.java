package com.bonc.sso.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
import com.bonc.sso.util.SsoConfig;



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
	
	@ResponseBody
    @RequestMapping(value = "/getProname", method = RequestMethod.GET)
    public Map<String,String> getProname() {
	    Map<String,String> map = new HashMap<String,String>();
	    String[] pronames = SsoConfig.getConfigValue(SsoConfig.PRONAME).split(","); 
	    String[] prochnames = SsoConfig.getConfigValue(SsoConfig.PROCHNAME).split(",");
	    for(int i=0;i<pronames.length;i++){
	        map.put(pronames[i], prochnames[i]);
	    }
        return map;
    }
	
	/*public static void main(String[] args) {
	    System.out.println(SsoConfig.getConfigValue(SsoConfig.PROCHNAME));
	    String s = "epmsso,sso-norten";
	    String[] ss = s.split(",");
	    for(int i=0;i<ss.length;i++){
	        System.out.println(ss[i]);
	    }
    }*/
}
