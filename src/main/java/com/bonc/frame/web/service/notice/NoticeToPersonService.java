package com.bonc.frame.web.service.notice;

import java.util.Map;


public interface NoticeToPersonService {

	public Map selectAll(String start,String length,Map<String,Object>paramMap);
}
