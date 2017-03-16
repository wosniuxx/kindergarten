package com.bonc.form.service;

import java.util.Map;

import com.bonc.form.entity.Form;

public interface FormService {
	
	/**
	 * 查询所有表单
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	/**
	 * 新增表单
	 * @param resource 表单对象
	 * @return
	 */
	public int insert(Form form);
	
	/**
	 * 根据Id查询该表单信息
	 * @param id 表单Id
	 * @return
	 */
	public Form selectById(String id);

}
