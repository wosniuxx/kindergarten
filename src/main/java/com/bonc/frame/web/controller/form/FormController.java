package com.bonc.frame.web.controller.form;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.IdUtil;
import com.bonc.frame.util.JsonUtils;
import com.bonc.frame.web.entity.form.Form;
import com.bonc.frame.web.entity.tenant.Tenant;
import com.bonc.frame.web.service.form.FormService;
	@Controller
	@RequestMapping("/form")
	public class FormController {
		

		@Resource
		private FormService formService;

		@RequestMapping("/index")
		public String index() {
			return "systemconfig/formmake";
		}
		
		
		@RequestMapping("/design")
		public String design() {
			return "systemconfig/design";
		}
		
		@ResponseBody
		@RequestMapping("/selectPage")
		public Map selectPage(String start, String length, String jsonStr) {
			System.out.println(start+"   "+length+"   "+jsonStr);
			Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
			return formService.selectAll(start, length, paramMap);
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
}
