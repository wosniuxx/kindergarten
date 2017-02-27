package com.fream;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.bonc.frame.security.SpringMVCSecurityInterceptor;

@SpringBootApplication
@EnableTransactionManagement
@Configuration
@ComponentScan(basePackages = "com.bonc")
@MapperScan("com.bonc.frame.base.dao")
public class FreamSpringbootApplication extends WebMvcConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(FreamSpringbootApplication.class, args);
	}
	
	public void addInterceptors(InterceptorRegistry registry) {  
        registry.addInterceptor(new SpringMVCSecurityInterceptor())
        	.addPathPatterns("/**")  
        	.excludePathPatterns("/login/toLogin","/login/actionLogin","/resources/**");
        super.addInterceptors(registry);
    } 
	
}
