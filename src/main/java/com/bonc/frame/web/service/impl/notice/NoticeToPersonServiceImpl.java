package com.bonc.frame.web.service.impl.notice;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.frame.web.service.notice.NoticeToPersonService;

@Service
public class NoticeToPersonServiceImpl implements NoticeToPersonService{

	@Resource
	private DaoHelper daoHelper;

	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.notice.NoticeToPersonMapper.noticeToPerson", paramMap, start, length);
	}
}
