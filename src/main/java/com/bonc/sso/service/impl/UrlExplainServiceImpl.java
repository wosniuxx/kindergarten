package com.bonc.sso.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.frame.util.IdUtil;
import com.bonc.sso.model.TargetUrl;
import com.bonc.sso.model.UrlExplain;
import com.bonc.sso.service.EnvService;
import com.bonc.sso.service.GetUserUrlService;
import com.bonc.sso.service.TargetUrlService;
import com.bonc.sso.service.UrlExplainService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;

@Service
public class UrlExplainServiceImpl implements UrlExplainService {
	@Resource
	private DaoHelper daoHelper;
	
	@Resource
	private EnvService envService;
	
	@Resource
	private TargetUrlService targetUrlService;
	
	@Resource
	private GetUserUrlService getUserUrlService;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		Map<String,Object> map = new HashMap<String, Object>();
		map = daoHelper.queryForPageList("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectAll", paramMap, start, length);
		Page<UrlExplain> page = (Page) map.get("data");
		PageInfo<UrlExplain> pageinfo = new PageInfo<UrlExplain>(page);
		for(UrlExplain urlExplain:pageinfo.getList()){
			String turl = null;
			String proname = null;
			Map<String,Object> nmap = new HashMap<String, Object>();
			nmap.put("name",urlExplain.getTargetUrl());
			nmap.put("envname", urlExplain.getEnvname());
			List<TargetUrl> targeturls = targetUrlService.selectByTargetUrlname(nmap);
			for(TargetUrl targeturl:targeturls){
				turl = targeturl.getTargetUrl();
				proname = targeturl.getProductname();
			}
			if(null != envService.selectByEnvName(urlExplain.getEnvname()) && null != turl){
				String finalUrl = envService.selectByEnvName(urlExplain.getEnvname()).getService()+"/"+proname+
						urlExplain.getSign()+"?return="+
						turl;
				if(getUserUrlService.selectByGetUserUrlName(urlExplain.getGetUserUrl()).getIsToken().equals("1")){
					finalUrl = finalUrl + "&token=";
				}
				urlExplain.setFinalUrl(finalUrl);
			}
		}
		map.put("data", pageinfo.getList());
		return map;
	}
	
	@Override
	public void insert(UrlExplain urlExplain) {
		urlExplain.setId(IdUtil.createId());
		urlExplain.setCreateDate(new Date());
		if(urlExplain.getSign().indexOf("/")<0){
		    urlExplain.setSign("/"+urlExplain.getSign());
		}
		daoHelper.insert("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.insert", urlExplain);
	}
	
	@Override
	public int deleteByUrlExplainId(String id) {
		return daoHelper.delete("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.deleteByPrimaryKey", id);
	}

	@Override
	public UrlExplain selectByUrlExplainId(String id) {
		return (UrlExplain) daoHelper.queryOne("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectByPrimaryKey", id);
	}

	@Override
	public int update(UrlExplain urlExplain) {
		return daoHelper.update("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.updateByPrimaryKey", urlExplain);
	}

	@Override
	public List<String> selectsign() {
		List<String> selectSignList = new ArrayList<String>(); 
		selectSignList = daoHelper.queryForList("com.bonc.frame.web.mapper.urlExplain.UrlExplainMapper.selectsignonly");
		return selectSignList;
	}
	
}
