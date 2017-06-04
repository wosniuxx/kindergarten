package com.bonc.frame.web.service.impl.notice;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.frame.web.entity.notice.Notice;
import com.bonc.frame.web.service.notice.PublicNoticeService;

@Service("publicNoticeService")
public class PublicNoticeServiceImpl implements PublicNoticeService{

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public List<Notice> selectToPeople() {
		List<Notice> list = daoHelper.queryForList("com.bonc.frame.web.mapper.notice.PublicNoticeMapper.publicNotice");
		return list;
	}

	@Override
	public Notice publicNoticeById(String noticeId) {
		return (Notice) daoHelper.queryOne("com.bonc.frame.web.mapper.notice.PublicNoticeMapper.publicNoticeById", noticeId);
	}

}
