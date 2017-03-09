package com.bonc.sso.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.sso.model.GetUserUrl;
import com.bonc.sso.service.GetUserUrlService;
@Service
public class GetUserUrlSericeImpl implements GetUserUrlService{

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.selectAll", paramMap, start, length);
	}
	
	@Override
	public GetUserUrl selectByEnvId(String id) {
		return (GetUserUrl)daoHelper.queryOne("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.selectByPrimaryKey", id);
	}

	@Override
	public List<GetUserUrl> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.findAll");
	}

}
