package com.msg.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.msg.entity.test;
import com.msg.service.testService;


@Controller

@RequestMapping("/test")
public class testController {
	
	@Autowired
	private testService testService; 
	
	@RequestMapping("/saveTest.do")
	public String saveTest(HttpServletRequest request){
		System.out.println("aaaaaaaaaaa");

		
		return "kx";
	}
}