package com.bonc.recruit.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.recruit.model.Recruit;
import com.bonc.recruit.service.RecruitService;

@Controller
@RequestMapping("/Recruit")
public class RecruitController {

	@Autowired
	private RecruitService recruitService;

	@RequestMapping("/index")
	public String index() {
		return "recruit/index";
	}

	@RequestMapping("/recruit")
	public String recruit() {
		return "recruit/recruit";
	}
	
	@RequestMapping("/recruitResult")
	public String recruitResult() {
		return "recruit/recruitResult";
	}

	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		System.out.println(start + "   " + length + "   " + jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return recruitService.selectAll(start, length, paramMap);
	}
	
	@ResponseBody
	@RequestMapping("/selectbytel")
	public List<Recruit> selectbytel(String tel, Model model) {
		List<Recruit> list = recruitService.selectBytel(tel);
		model.addAttribute("list", list);
		return list;
	}

	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public int delete(String id) {
		return recruitService.deleteById(id);
	}

	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(Recruit recruit) {
		// 获取当前时间
		String temp_str = "";
		Date dt = new Date();
		// 最后的aa表示“上午”或“下午” HH表示24小时制 如果换成hh表示12小时制
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		temp_str = sdf.format(dt);
		recruit.setId(IdUtil.createId());
		recruit.setCreatetime(temp_str);
		return recruitService.insert(recruit);
	}

	@ResponseBody
	@RequestMapping(value = "/insert2", method = RequestMethod.GET)
	public String insert2(@RequestParam("childname") String childname, 
			@RequestParam("childage") String childage, 
			@RequestParam("blood_type") String blood_type, 
			@RequestParam("id_residence") String id_residence, 
			@RequestParam("parentname") String parentname,
			@RequestParam("tel") String tel, 
			@RequestParam("residence") String residence) {
		
		Recruit recruit = new Recruit();
		recruit.setId(IdUtil.createId());
		recruit.setChildname(childname);
		recruit.setChildage(childage);
		recruit.setBlood_type(blood_type);
		recruit.setId_residence(id_residence);
		recruit.setParentname(parentname);
		recruit.setTel(tel);
		recruit.setResidence(residence);
		
		// 获取当前时间
		String temp_str = "";
		Date dt = new Date();
		// 最后的aa表示“上午”或“下午” HH表示24小时制 如果换成hh表示12小时制
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		temp_str = sdf.format(dt);

		recruit.setCreatetime(temp_str);
		recruitService.insert(recruit);
		return "success!";
	}

	@ResponseBody
	@RequestMapping("/getById")
	public Recruit selectById(String id) {
		Recruit recruit = recruitService.selectById(id);
		return recruit;
	}

	@ResponseBody
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public int update(Recruit recruit) {
		return recruitService.update(recruit);
	}

	@ResponseBody
	@RequestMapping("/findAll")
	public List<Recruit> selectPage() {
		return recruitService.findAll();
	}
}
