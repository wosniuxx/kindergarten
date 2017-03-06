package com.fream;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
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
	
	@Bean
	public EmbeddedServletContainerCustomizer containerCustomizer() {

	    return new EmbeddedServletContainerCustomizer() {
	    	@Override
	        public void customize(ConfigurableEmbeddedServletContainer container) {

	            ErrorPage error401Page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/resources/errors/404_error.jsp");
	            ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/resources/errors/404_error.jsp");
	            ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/resources/errors/503_error.jsp");

	            container.addErrorPages(error401Page, error404Page, error500Page);
	        }

	    };
	}
	
}
