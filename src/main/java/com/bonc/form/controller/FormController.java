package com.bonc.form.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.bonc.form.entity.Form;
import com.bonc.form.service.FormService;
import com.bonc.form.service.UdFieldService;
import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;


	@Controller
	@RequestMapping("/form")
	public class FormController {
		

		@Resource
		private FormService formService;
		@Resource
		private UdFieldService udFieldSerice;

		@RequestMapping("/index")
		public String index() {
			return "form/formmake";
		}
		
		@ResponseBody
		@RequestMapping("/selectPage")
		public Map selectPage(String start, String length, String jsonStr) {
			Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
			Map map = formService.selectAll(start, length, paramMap);
			return map;
		}
		
		@ResponseBody
		@RequestMapping(value = "/insert", method = RequestMethod.POST)
		public int insert(Form form) {
			form.setId(IdUtil.createId());
			return formService.insert(form);
		}
		
		@ResponseBody
		@RequestMapping("/getFormById")
		public Form selectById(String id) {
			Form form = formService.selectById(id);
			return form;
		}
		
		@ResponseBody
		@RequestMapping("/selectField")
		public Map selectField(String start, String length,String jsonStr){
			System.err.println(jsonStr);
			String templatecode=jsonStr;
			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("templatecode",templatecode);
			Object json =  JSONObject.toJSON(paramMap);
			Map<String, Object> paramMap1 = JsonUtils.stringToCollect(JsonUtils.toJSONString(json));
		
			return udFieldSerice.selectByTablename(start, length, paramMap1);
		}
		
		
		@ResponseBody
		@RequestMapping("/select")
		public List  selectField1(String templatecode){
			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("templatecode", templatecode);
			Object json =  JSONObject.toJSON(paramMap);
			Map<String, Object> paramMap1 = JsonUtils.stringToCollect(JsonUtils.toJSONString(json));
			List<Map<String, Object>> m=udFieldSerice.selectByTablename1(paramMap1);
			/*System.err.println(JsonUtils.toJSONString(m));
			JSONArray jsonArray=JSONArray.fromObject(m); */
			return m;
		}
		
		

}
