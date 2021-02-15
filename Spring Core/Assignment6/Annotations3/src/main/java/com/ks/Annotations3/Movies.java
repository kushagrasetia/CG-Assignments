package com.ks.Annotations3;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:dbConfig.properties")
public class Movies {
	
	
	private BollywoodMovies industry;
	private HollywoodMovies industry2;
	private TollywoodMovies industry3;
	
	@Autowired
	public Movies() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Movies(BollywoodMovies industry, HollywoodMovies industry2, TollywoodMovies industry3) {
		super();
		this.industry = industry;
		this.industry2 = industry2;
		this.industry3 = industry3;
	}
	public BollywoodMovies getIndustry() {
		return industry;
	}
	@Resource
	public void setIndustry(BollywoodMovies industry) {
		this.industry = industry;
	}
	public HollywoodMovies getIndustry2() {
		return industry2;
	}
	@Resource
	public void setIndustry2(HollywoodMovies industry2) {
		this.industry2 = industry2;
	}
	public TollywoodMovies getIndustry3() {
		return industry3;
	}
	@Resource
	public void setIndustry3(TollywoodMovies industry3) {
		this.industry3 = industry3;
	}
	@Override
	public String toString() {
		return "Movies [industry=" + industry + ", industry2=" + industry2 + ", industry3=" + industry3 + "]";
	}
	
	
}
