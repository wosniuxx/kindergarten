package com.bonc.sso.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.service.TargetUrlService;
@Service
public class TargetUrlServiceImpl implements TargetUrlService {

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.selectAll", paramMap, start, length);
	}
	
	@Override
	public TargetUrl selectByEnvId(String id) {
		return (TargetUrl)daoHelper.queryOne("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.selectByPrimaryKey", id);
	}

}
