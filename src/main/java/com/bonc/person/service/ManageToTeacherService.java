package com.bonc.person.service;

import java.util.List;
import java.util.Map;

import com.bonc.person.model.Teacher;

public interface ManageToTeacherService {


	/**
	 * 分页查询所有信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	public Teacher selectById(String id);
	
	public Teacher selectByName(String name);
	
	public List<Teacher> findAll();
	
	public int deleteById(String Id);
	
	public int insert(Teacher teacher);
	
	public int update(Teacher teacher);
	
}
