package com.bonc.person.service;

import java.util.List;
import java.util.Map;

import com.bonc.person.model.Child;

public interface ManageToChildService {


	/**
	 * 分页查询所有信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	public Child selectById(String id);
	
	public Child selectByName(String name);
	
	public List<Child> findAll();
	
	public int deleteById(String Id);
	
	public int insert(Child child);
	
	public int update(Child child);
	
}