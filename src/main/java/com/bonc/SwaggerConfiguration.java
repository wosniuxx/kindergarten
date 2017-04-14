package com.bonc;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@ComponentScan(basePackages = {"com.bonc.frame.web","com.bonc.sso.controller"})
public class SwaggerConfiguration {

}
