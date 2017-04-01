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
import com.bonc.sso.model.UrlModel;
import com.bonc.sso.service.EnvService;
import com.bonc.sso.service.GetUserUrlService;
import com.bonc.sso.service.TargetUrlService;
import com.bonc.sso.service.UrlModelService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;

@Service
public class UrlModelServiceImpl implements UrlModelService {
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
		map = daoHelper.queryForPageList("com.bonc.frame.web.mapper.urlModel.UrlModelMapper.selectAll", paramMap, start, length);
		Page<UrlModel> page = (Page) map.get("data");
		PageInfo<UrlModel> pageinfo = new PageInfo<UrlModel>(page);
		for(UrlModel urlModel:pageinfo.getList()){
			String turl = null;
			String proname = null;
			Map<String,Object> nmap = new HashMap<String, Object>();
			nmap.put("name",urlModel.getTargetUrl());
			List<TargetUrl> targeturls = targetUrlService.selectByTargetUrlname(nmap);
			for(TargetUrl targeturl:targeturls){
				turl = targeturl.getTargetUrl();
				proname = targeturl.getProductname();
			}
			urlModel.setFinalUrl("aaaaa");
		}
		map.put("data", pageinfo.getList());
		return map;
	}
	
	@Override
	public void insert(UrlModel urlModel) {
	    urlModel.setId(IdUtil.createId());
	    urlModel.setCreateDate(new Date());
		if(urlModel.getSign().indexOf("/")<0){
		    urlModel.setSign("/"+urlModel.getSign());
		}
		daoHelper.insert("com.bonc.frame.web.mapper.urlModel.UrlModelMapper.insert", urlModel);
	}
	
	@Override
	public int deleteByUrlModelId(String id) {
		return daoHelper.delete("com.bonc.frame.web.mapper.urlModel.UrlModelMapper.deleteByPrimaryKey", id);
	}

	@Override
	public UrlModel selectByUrlModelId(String id) {
		return (UrlModel) daoHelper.queryOne("com.bonc.frame.web.mapper.urlModel.UrlModelMapper.selectByPrimaryKey", id);
	}

	@Override
	public int update(UrlModel UrlModel) {
		return daoHelper.update("com.bonc.frame.web.mapper.urlModel.UrlModelMapper.updateByPrimaryKey", UrlModel);
	}

	@Override
	public List<String> selectsign() {
		List<String> selectSignList = new ArrayList<String>(); 
		selectSignList = daoHelper.queryForList("com.bonc.frame.web.mapper.urlModel.UrlModelMapper.selectsignonly");
		return selectSignList;
	}
	
}
