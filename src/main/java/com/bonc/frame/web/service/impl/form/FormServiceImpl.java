package com.bonc.frame.web.service.impl.form;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.frame.web.entity.form.Form;
import com.bonc.frame.web.service.form.FormService;
@Service("formService")
public class FormServiceImpl implements FormService{

	
	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.form.FormMapper.selectAll", paramMap, start, length);
	}

	@Override
	public int insert(Form form) {
		return daoHelper.insert("com.bonc.frame.web.mapper.form.FormMapper.insertSelective", form);
	}

	@Override
	public Form selectById(String id) {
		// TODO Auto-generated method stub
		return (Form) daoHelper.queryOne("com.bonc.frame.web.mapper.form.FormMapper.selectByPrimaryKey", id);
	}

}
