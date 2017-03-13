package com.bonc.sso.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.service.TargetUrlService;
@Service
public class TargetUrlServiceImpl implements TargetUrlService {

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.selectAll", paramMap, start, length);
	}
	

	@Override
	public List<TargetUrl> findAll() {
		return daoHelper.queryForList("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.findAll");
	}

	@Override
	public int deleteByTargetUrlId(String TargetUrlId) {
		return daoHelper.delete("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.deleteByPrimaryKey", TargetUrlId);
	}

	@Override
	public int insert(TargetUrl targetUrl) {
		return daoHelper.insert("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.insertTargetUrl", targetUrl);
	}

	@Override
	public int update(TargetUrl targetUrl) {
		return daoHelper.update("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.updateByPrimaryKey", targetUrl);
	}


	@Override
	public TargetUrl selectByTargetUrlId(String id) {
		return (TargetUrl) daoHelper.queryOne("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.selectByPrimaryKey", id);
	}
	
	@Override
	public TargetUrl selectByTargetUrlname(Map nmap) {
		return (TargetUrl) daoHelper.queryOne("com.bonc.frame.web.mapper.targetUrl.TargetUrlMapper.selectByTargetUrlname", nmap);
	}

}
