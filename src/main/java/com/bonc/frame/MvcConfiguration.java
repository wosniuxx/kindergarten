package com.bonc.frame; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.bonc.frame.security.SpringMVCSecurityInterceptor;


@Configuration
@ComponentScan(basePackages = "com.bonc")  
public class MvcConfiguration extends WebMvcConfigurerAdapter {
	@Autowired
	SpringMVCSecurityInterceptor springMVCSecurityInterceptor;
	
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {  
        registry.addInterceptor(springMVCSecurityInterceptor)
        	.addPathPatterns("/**")  
        	.excludePathPatterns("/login/toLogin","/login/actionLogin","/resources/**");
        super.addInterceptors(registry);
    }
}