package com.bonc.sso.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.sso.model.Env;
import com.bonc.sso.model.UrlExplain;
import com.bonc.sso.service.EnvService;
import com.bonc.sso.service.UrlExplainService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;

@Service
public class UrlExplainServiceImpl implements UrlExplainService {
	@Resource
	private DaoHelper daoHelper;
	
	@Resource
	private EnvService envService;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectAll", paramMap, start, length);
	}

	@Override
	public UrlExplain selectByUrlExplainId(String id) {
		return (UrlExplain) daoHelper.queryOne("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectByPrimaryKey", id);
	}

	@Override
	public int deleteByUrlExplainId(String id) {
		return daoHelper.delete("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.deleteByPrimaryKey", id);
	}

	@Override
	public int insert(UrlExplain urlExplain) {
		return daoHelper.insert("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.insertEUrlExplain", urlExplain);
	}

	@Override
	public int update(UrlExplain urlExplain) {
		return daoHelper.update("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.updateByPrimaryKey", urlExplain);
	}
	
	
	
}
