package com.bonc.frame.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/** 
 * @author 作者: jxw 
 * @date 创建时间: 2016年11月8日 下午2:35:35 
 * @version 版本: 1.0 
*/
public class SpringUtils implements ApplicationContextAware{
	
	private static ApplicationContext applicationContext;

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		SpringUtils.applicationContext = applicationContext;
	}
    
	public static Object getBean(String name){
        return applicationContext.getBean(name);
    }
}

