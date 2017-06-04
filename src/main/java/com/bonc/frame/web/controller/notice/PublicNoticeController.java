package com.bonc.frame.web.controller.notice;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bonc.frame.web.entity.notice.Notice;
import com.bonc.frame.web.service.notice.PublicNoticeService;

@Controller
@RequestMapping("/publicNotice")
public class PublicNoticeController {

	@Resource
	private PublicNoticeService publicNoticeService;
	
	@RequestMapping("/index")
	public String publicNotice(){
		return "notice/public_notice";
	}
	
	@ResponseBody
	@RequestMapping("/publicnotice")
	public List<Notice> selectToPeople(Model model) {
		List<Notice> list = publicNoticeService.selectToPeople();
		model.addAttribute("lists", list);
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value="/publicNoticeById",method=RequestMethod.POST)
	public Notice publicNoticeById(String noticeId) {
		Notice notice = publicNoticeService.publicNoticeById(noticeId);
		return notice;
	}
}
