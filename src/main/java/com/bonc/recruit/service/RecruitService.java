package com.bonc.recruit.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.bonc.person.model.Child;
import com.bonc.recruit.model.Recruit;

public interface RecruitService {
	/**
	 * 分页查询所有信息
	 * @return
	 */
	public Map selectAll(String start,String length,Map<String,Object>paramMap);
	
	public Recruit selectById(String id);
	
	public Recruit selectByName(String name);
	
	public List<Recruit> findAll();
	
	public int deleteById(String Id);
	
	public int insert(Recruit recruit);
	
	public int update(Recruit recruit);

	public List<Recruit> selectBytel(String tel);
	
}
