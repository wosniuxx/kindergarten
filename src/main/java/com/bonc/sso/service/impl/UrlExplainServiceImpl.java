package com.bonc.sso.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.sso.model.UrlExplain;
import com.bonc.sso.service.EnvService;
import com.bonc.sso.service.UrlExplainService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;

@Service
public class UrlExplainServiceImpl implements UrlExplainService {
	@Resource
	private DaoHelper daoHelper;
	
	@Resource
	private EnvService envService;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		Map<String,Object> map = new HashMap<String, Object>();
		map = daoHelper.queryForPageList("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectAll", paramMap, start, length);
		Page<UrlExplain> page = (Page) map.get("data");
		PageInfo<UrlExplain> pageinfo = new PageInfo<UrlExplain>(page);
		for(UrlExplain urlExplain:pageinfo.getList()){
			String finalUrl = envService.selectByEnvName(urlExplain.getEnvname()).getService()+"/"+urlExplain.getSign()+"?return="+
					urlExplain.getTargetUrl()+"token=";
			urlExplain.setFinalUrl(finalUrl);
		}
		map.put("data", pageinfo.getList());
		return map;
	}
	
	@Override
	public UrlExplain selectByEnvId(String id) {
		return (UrlExplain)daoHelper.queryOne("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectByPrimaryKey", id);
	}
	
	
}
