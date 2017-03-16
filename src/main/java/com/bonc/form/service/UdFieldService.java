package com.bonc.form.service;

import java.util.List;
import java.util.Map;

import com.bonc.form.entity.Form;

public interface UdFieldService {
	/**
	 * 查询所有字段
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	/**
	 * 新增字段
	 * @param resource 
	 * @return
	 */
	public int insert(Form form);
	
	/**
	 * 根据表单查询该表单字段
	 * @param 表单
	 * @return
	 */
	public Map selectByTablename(String start,String  length, Map<String,Object>paramMap);

	
	public List<Map<String, Object>> selectByTablename1(Map<String, Object> paramMap);
}
