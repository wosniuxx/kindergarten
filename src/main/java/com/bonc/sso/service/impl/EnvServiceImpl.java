package com.bonc.sso.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.sso.model.Env;
import com.bonc.sso.service.EnvService;

@Service
public class EnvServiceImpl implements EnvService{

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.env.EnvMapper.selectAll", paramMap, start, length);
	}
	
	@Override
	public Env selectByEnvId(String id) {
		return (Env)daoHelper.queryOne("com.bonc.frame.web.mapper.env.EnvMapper.selectByPrimaryKey", id);
	}

	@Override
	public Env selectByEnvName(String envname) {
		return (Env)daoHelper.queryOne("com.bonc.frame.web.mapper.env.EnvMapper.selectByEnvName", envname);
	}

	@Override
	public List<Env> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.env.EnvMapper.findAll");
	}

}
