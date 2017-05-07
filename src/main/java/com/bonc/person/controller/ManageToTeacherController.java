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
import com.bonc.person.model.Teacher;
import com.bonc.person.service.ManageToTeacherService;
import com.bonc.sso.model.Env;

@Controller
@RequestMapping("/Teacher")
public class ManageToTeacherController {

	@Autowired
	private ManageToTeacherService manageToTeacherService;
	
	@RequestMapping("/index")
	public String index(){
		return "person/teacher";
	}
	
	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		System.out.println(start+"   "+length+"   "+jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return manageToTeacherService.selectAll(start, length, paramMap);
	}

	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		return manageToTeacherService.deleteById(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(Teacher teacher) {
		teacher.setId(IdUtil.createId());
		return manageToTeacherService.insert(teacher);
	}
	
	@ResponseBody
	@RequestMapping("/getById")
	public Teacher selectById(String id) {
		Teacher teacher = manageToTeacherService.selectById(id);
		return teacher;
	}
	
	@ResponseBody
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public int update(Teacher teacher){
		return manageToTeacherService.update(teacher);
	}
	
	@ResponseBody
	@RequestMapping("/findAll")
	public List<Teacher> selectPage() {
		return manageToTeacherService.findAll();
	}
}
