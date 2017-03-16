package com.bonc.form.service.Impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.form.entity.Form;
import com.bonc.form.service.UdFieldService;
import com.bonc.frame.base.dao.DaoHelper;
@Service("udFieldSerice")
public class UdFieldServiceImpl implements UdFieldService{
	
	@Resource
	private DaoHelper daoHelper;

	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Form form) {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public Map selectByTablename(String start, String length, Map<String,Object>paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.form.UdFileldMapper.selectByTablename",paramMap,start, length);
	}

	@Override
	public List<Map<String, Object>> selectByTablename1(Map<String, Object> paramMap) {
		return  daoHelper.queryForList("com.bonc.frame.web.mapper.form.UdFileldMapper.selectByTablename",paramMap);
	}

}
