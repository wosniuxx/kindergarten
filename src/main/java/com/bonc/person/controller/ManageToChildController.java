package com.bonc.person.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.person.model.Child;
import com.bonc.person.service.ManageToChildService;

@Controller
@RequestMapping("/Child")
public class ManageToChildController {


	@Autowired
	private ManageToChildService manageToChildService;
	
	@RequestMapping("/index")
	public String index(){
		return "person/child";
	}
	
	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		System.out.println(start+"   "+length+"   "+jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return manageToChildService.selectAll(start, length, paramMap);
	}

	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		return manageToChildService.deleteById(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(Child child) {
		child.setId(IdUtil.createId());
		return manageToChildService.insert(child);
	}
	
	@ResponseBody
	@RequestMapping("/getById")
	public Child selectById(String id) {
		Child child = manageToChildService.selectById(id);
		return child;
	}
	
	@ResponseBody
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public int update(Child child){
		return manageToChildService.update(child);
	}
	
	@ResponseBody
	@RequestMapping("/findAll")
	public List<Child> selectPage() {
		return manageToChildService.findAll();
	}
}
