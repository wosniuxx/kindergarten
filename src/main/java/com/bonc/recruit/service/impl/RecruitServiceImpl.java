package com.bonc.recruit.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.recruit.model.Recruit;
import com.bonc.recruit.service.RecruitService;

@Service
public class RecruitServiceImpl implements RecruitService{

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.recruit.RecruitMapper.selectAll", paramMap, start, length);
	}

	@Override
	public Recruit selectById(String id) {
		return (Recruit) daoHelper.queryOne("com.bonc.frame.web.mapper.recruit.RecruitMapper.selectByPrimaryKey", id);
	}

	@Override
	public Recruit selectByName(String name) {
		return (Recruit) daoHelper.queryOne("com.bonc.frame.web.mapper.recruit.RecruitMapper.selectByName", name);
	}

	@Override
	public List<Recruit> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.recruit.RecruitMapper.findAll");
	}

	@Override
	public int deleteById(String Id) {
		return daoHelper.delete("com.bonc.frame.web.mapper.recruit.RecruitMapper.deleteByPrimaryKey", Id);
	}
	
	@Override
	public int insert(Recruit recruit) {
		return daoHelper.insert("com.bonc.frame.web.mapper.recruit.RecruitMapper.insert", recruit);
	}

	@Override
	public int update(Recruit recruit) {
		return daoHelper.update("com.bonc.frame.web.mapper.recruit.RecruitMapper.updateByPrimaryKey", recruit);
	}

	@Override
	public Map selectBytel(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.recruit.RecruitMapper.selectBytel", paramMap, start, length);
	}

}
