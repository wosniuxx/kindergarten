package com.bonc.frame.web.controller.log;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.JsonUtils;
import com.bonc.frame.web.service.log.UserLoginLogService;

@Controller
@RequestMapping("/userLoginLog")
public class UserLoginLogController {

	@Autowired
	private UserLoginLogService userLoginLogService;

	@RequestMapping("/index")
	public String index() {
		return "log/userLoginLog";
	}

	@ResponseBody
	@RequestMapping(value="/selectPage",method=RequestMethod.POST)
	public Map selectPage(String start, String length, String jsonStr) {
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		HashMap map = (HashMap) userLoginLogService.selectAll(start, length, paramMap);
		return map;
	}

}
