package com.bonc.person.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.person.model.Teacher;
import com.bonc.person.service.ManageToTeacherService;

@Service
public class ManageToTeacherServiceImpl implements ManageToTeacherService{

	@Resource
	private DaoHelper daoHelper;
	
	@Resource
	private ManageToTeacherService manageToTeacherService;

	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.selectAll", paramMap, start, length);
	}

	@Override
	public Teacher selectById(String id) {
		return (Teacher) daoHelper.queryOne("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.selectByPrimaryKey", id);
	}

	@Override
	public Teacher selectByName(String name) {
		return (Teacher) daoHelper.queryOne("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.selectByName", name);
	}

	@Override
	public List<Teacher> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.findAll");
	}

	@Override
	public int deleteById(String Id) {
		return daoHelper.delete("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.deleteByPrimaryKey", Id);
	}

	@Override
	public int insert(Teacher teacher) {
		return daoHelper.insert("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.insert", teacher);
	}

	@Override
	public int update(Teacher teacher) {
		return daoHelper.update("com.bonc.frame.web.mapper.person.ManageToTeacherMapper.updateByPrimaryKey", teacher);
	}

	
}
