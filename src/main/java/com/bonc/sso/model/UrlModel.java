package com.bonc.sso.model;

import java.util.Date;

/**
 * 接口配置
 * @author ZY
 *
 */
public class UrlModel {
    private String id;
    /**
     * 接口名称
     */
    private String introduce;
    /**
     * 获取用户接口
     */
    private String getUserUrl;
    /**
     * 目标地址
     */
    private String targetUrl;
    
    /**
     * url标识
     */
    private String sign;
    /**
     * 是否启用
     */
    private String status;
    /**
     * 测试环境的拼接url
     */
    private String prefinalUrl;
    /**
     * 正式环境的拼接url
     */
    private String profinalUrl;
    /**
     * 创建时间
     */
    private Date createDate;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getIntroduce() {
        return introduce;
    }
    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }
    public String getGetUserUrl() {
        return getUserUrl;
    }
    public void setGetUserUrl(String getUserUrl) {
        this.getUserUrl = getUserUrl;
    }
    public String getTargetUrl() {
        return targetUrl;
    }
    public void setTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
    }
    public String getSign() {
        return sign;
    }
    public void setSign(String sign) {
        this.sign = sign;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Date getCreateDate() {
        return createDate;
    }
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
    public String getPrefinalUrl() {
        return prefinalUrl;
    }
    public void setPrefinalUrl(String prefinalUrl) {
        this.prefinalUrl = prefinalUrl;
    }
    public String getProfinalUrl() {
        return profinalUrl;
    }
    public void setProfinalUrl(String profinalUrl) {
        this.profinalUrl = profinalUrl;
    }
    
    
}