/*package com.bonc.sso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bonc.sso.model.Environment;
import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.service.EnvironmentService;

@Controller
@RequestMapping("Environment")
public class EnvironmentController {

	@Autowired
	private EnvironmentService environmentService;
	
	@RequestMapping(value="/findAll",method=RequestMethod.GET)
	public String findAll(Model model){
		model.addAttribute("environment", environmentService.findAll());
		return "environmentAll";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.GET)
	public String add(Model model){
		return "environmentAdd";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(Environment environment){
		environmentService.add(environment);
		return "redirect:/Environment/findAll";
	}
	
	@RequestMapping(value="/update/{id}",method=RequestMethod.GET)
	public String update(Model model,@PathVariable String id){
		model.addAttribute("target",environmentService.findById(id));
		return "environmentUpdate";
	}
	
	@RequestMapping(value="/update/{id}",method=RequestMethod.POST)
	public String update(Environment environment,@PathVariable String id){
		environment.setId(id);
		environmentService.update(environment);
		return "redirect:/urlExplain/findAll";
	}
	
	@RequestMapping(value="/delete/{id}",method=RequestMethod.GET)
	public String delete(@PathVariable String id){
		environmentService.delete(id);
		return "redirect:/Environment/findAll";
	}
}
*/