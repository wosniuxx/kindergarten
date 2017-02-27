package com.bonc.frame.security.authication.loader;

import java.util.List;

/**
 * @author 作者: 吕一凡 
 * @date 2017年1月9日 下午9:07:42 
 * @version 版本: 1.0
 * 权限资源加载接口
 */
public interface AuthicationLoader {
	
	/**
	 * 权限资源加载方法
	 * @return
	 */
	public Object authLoader(Object object);
}
