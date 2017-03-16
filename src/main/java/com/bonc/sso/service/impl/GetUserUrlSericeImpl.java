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
	public List<GetUserUrl> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.findAll");
	}

	@Override
	public GetUserUrl selectByGetUserUrlId(String id) {
		return (GetUserUrl) daoHelper.queryOne("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.selectByPrimaryKey", id);
	}

	@Override
	public int deleteByGetUserUrlId(String GetUserUrlId) {
		return daoHelper.delete("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.deleteByPrimaryKey", GetUserUrlId);
	}

	@Override
	public int insert(GetUserUrl getUserUrl) {
		return daoHelper.insert("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.insertGetUserUrl", getUserUrl);
	}

	@Override
	public int update(GetUserUrl getUserUrl) {
		return daoHelper.update("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.updateByPrimaryKey", getUserUrl);
	}

	@Override
	public GetUserUrl selectByGetUserUrlName(String name) {
		return (GetUserUrl) daoHelper.queryOne("com.bonc.frame.web.mapper.getUserUrl.GetUserUrlMapper.selectByGetUserUrlName", name);
	}

}
