/*package com.bonc.sso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.service.TargetUrlService;
@Controller
@RequestMapping("TargetUrl")
public class TargetUrlController {

	@Autowired
	private TargetUrlService targetUrlService;
	
	@RequestMapping(value="/findAll",method=RequestMethod.GET)
	public String findAll(Model model){
		model.addAttribute("targetUrls", targetUrlService.selectAll(start, length, paramMap));
		return "targetAll";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.GET)
	public String add(Model model){
		return "targetAdd";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(TargetUrl urlExplain){
		targetUrlService.add(urlExplain);
		return "redirect:/targetUrl/findAll";
	}
	
	@RequestMapping(value="/update/{id}",method=RequestMethod.GET)
	public String update(Model model,@PathVariable String id){
		model.addAttribute("target",targetUrlService.findById(id));
		return "targetUpdate";
	}
	
	@RequestMapping(value="/update/{id}",method=RequestMethod.POST)
	public String update(TargetUrl targetUrl,@PathVariable String id){
		targetUrl.setId(id);
		targetUrlService.update(targetUrl);
		return "redirect:/urlExplain/findAll";
	}
	
	@RequestMapping(value="/delete/{id}",method=RequestMethod.GET)
	public String delete(@PathVariable String id){
		targetUrlService.delete(id);
		return "redirect:/TargetUrl/findAll";
	}
}
*/