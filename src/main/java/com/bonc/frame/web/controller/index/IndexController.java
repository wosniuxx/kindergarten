package com.bonc.frame.web.controller.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/index")
public class IndexController {

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		return "index/index";
	}
	
	@RequestMapping(value = "/history", method = RequestMethod.GET)
	public String history() {
		return "index/history";
	}
	
	@RequestMapping(value = "/environment", method = RequestMethod.GET)
	public String environment() {
		return "index/environment";
	}
	
	@RequestMapping(value = "/security", method = RequestMethod.GET)
	public String security() {
		return "index/security";
	}
}
