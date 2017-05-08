package com.bonc.person.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.person.model.Child;
import com.bonc.person.service.ManageToChildService;

@Service
public class ManageToChildServiceImpl implements ManageToChildService{

	@Resource
	private DaoHelper daoHelper;
	
	@Resource
	private ManageToChildService manageToChildService;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.person.ManageToChildMapper.selectAll", paramMap, start, length);
	}

	@Override
	public Child selectById(String id) {
		return (Child) daoHelper.queryOne("com.bonc.frame.web.mapper.person.ManageToChildMapper.selectByPrimaryKey", id);
	}

	@Override
	public Child selectByName(String name) {
		return (Child) daoHelper.queryOne("com.bonc.frame.web.mapper.person.ManageToChildMapper.selectByName", name);
	}

	@Override
	public List<Child> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.person.ManageToChildMapper.findAll");
	}

	@Override
	public int deleteById(String Id) {
		return daoHelper.delete("com.bonc.frame.web.mapper.person.ManageToChildMapper.deleteByPrimaryKey", Id);
	}

	@Override
	public int insert(Child child) {
		return daoHelper.insert("com.bonc.frame.web.mapper.person.ManageToChildMapper.insert", child);
	}

	@Override
	public int update(Child child) {
		return daoHelper.update("com.bonc.frame.web.mapper.person.ManageToChildMapper.updateByPrimaryKey", child);
	}


}
