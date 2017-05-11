package com.bonc.frame.web.controller.notice;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.util.JsonUtils;
import com.bonc.frame.web.entity.notice.Notice;
import com.bonc.frame.web.service.notice.NoticeToPersonService;

@Controller
@RequestMapping("/noticeToPerson")
public class NoticeToPersonController {

	@Autowired
	private NoticeToPersonService noticeToPersonService;
	
	@ResponseBody
	@RequestMapping("/selectPage")
	public Map selectPage(String start, String length, String jsonStr) {
		System.out.println(start+"   "+length+"   "+jsonStr);
		Map<String, Object> paramMap = JsonUtils.stringToCollect(jsonStr);
		return noticeToPersonService.selectAll(start, length, paramMap);
	}
}
