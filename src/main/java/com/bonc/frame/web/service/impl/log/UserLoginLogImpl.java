package com.bonc.frame.web.service.impl.log;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bonc.frame.base.dao.DaoHelper;
import com.bonc.frame.web.service.log.UserLoginLogService;

@Service
public class UserLoginLogImpl implements UserLoginLogService{

	@Resource
	private DaoHelper daoHelper;
	
	@Override
	public Map selectAll(String start, String length, Map<String, Object> paramMap) {
		return daoHelper.queryForPageList("com.bonc.frame.web.mapper.log.UserLoginLogMapper.selectAll", paramMap, start, length);
	}

}
