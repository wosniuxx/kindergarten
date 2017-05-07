package com.bonc.form.service.Impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.form.entity.Form;
import com.bonc.form.entity.UdField;
import com.bonc.form.service.UdFieldService;
import com.bonc.frame.base.dao.DaoHelper;
@Service("udFieldSerice")
public class UdFieldServiceImpl implements UdFieldService{
	
	@Resource
	private DaoHelper daoHelper;

	@Override
	public Map selectByTablename(String start, String length, Map<String,Object>paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.form.UdFileldMapper.selectByTablename",paramMap,start, length);
	}

	@Override
	public List<Map<String, Object>> selectByTablename1(Map<String, Object> paramMap) {
		return  daoHelper.queryForList("com.bonc.frame.web.mapper.form.UdFileldMapper.selectByTablename",paramMap);
	}


	@Override
	public int insert(UdField udField) {
		return daoHelper.insert("com.bonc.frame.web.mapper.form.UdFileldMapper.insertSelective", udField);
	}

	@Override
	public UdField selectById(String id) {
		// TODO Auto-generated method stub
		return (UdField) daoHelper.queryOne("com.bonc.frame.web.mapper.form.UdFileldMapper.selectByPrimaryKey", id);
	}

	@Override
	public int update(UdField udField) {
		return daoHelper.update("com.bonc.frame.web.mapper.form.UdFileldMapper.updateByPrimaryKeySelective", udField);
	}
	
	@Override
	public int updateField(UdField udField) {
		return daoHelper.update("com.bonc.frame.web.mapper.form.UdFileldMapper.updateByPrimaryKey", udField);

	}

}
