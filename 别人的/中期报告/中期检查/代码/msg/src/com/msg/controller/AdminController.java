package com.msg.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.msg.entity.admin;
import com.msg.entity.test;
import com.msg.service.AdminService;
import com.msg.service.testService;


@Controller

@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private testService testService; 
	@Autowired
	private AdminService adminService;
	
	@RequestMapping("/saveTest.do")
	public String saveTest(HttpServletRequest request){
		System.out.println("aaaaaaaaaaa");

		
		return "kx";
	}
	//管理员登录
	@RequestMapping("/login.do")
	public void login(HttpServletRequest request,HttpServletResponse response) throws IOException
	{
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		System.out.println("username="+username);
		System.out.println("password="+password);
		admin admin = new admin();
		admin.setA_username(username);
		admin.setA_password(password);
		if (adminService.countByCondition(admin, ".login") == 1) {
			System.out.println("验证通过");
			admin = adminService.findOne(admin, ".findaid");
			HttpSession hs = request.getSession(true);
			hs.setAttribute("aid", admin.getA_id());
			response.sendRedirect("../admin/main.jsp");
		} else {
			response.sendRedirect("../admin/login.jsp");
		}		
		
	}
	//管理员更改密码
	@RequestMapping("/changePassword.do")
	public void changePassword(HttpServletRequest request,HttpServletResponse response) throws IOException{
		String oldpassword = request.getParameter("oldpassword");
		String newpassword = request.getParameter("newpassword");
		String twopassword = request.getParameter("twopassword");
		System.out.println("oldpassword="+oldpassword);
		System.out.println("newpassword="+newpassword);
		System.out.println("twopassword="+twopassword);
		HttpSession hs = request.getSession(true);
		int id=(Integer) hs.getAttribute("aid");
		admin admin = new admin();
		admin.setA_password(twopassword);
		admin.setA_id(id);
		System.out.println(admin);
		adminService.update(admin);
		response.sendRedirect("../admin/login.jsp");
	}
	//验证管理员密码是否正确
	@RequestMapping("isPasswordTrue.do")
	public void isPasswordTrue(HttpServletRequest request,HttpServletResponse response) throws IOException{
		 response.setContentType("text/html;charset=UTF-8");
	        request.setCharacterEncoding("UTF-8");
	        PrintWriter out = response.getWriter();
		String password = request.getParameter("id");
		System.out.println("AJAX"+password);
		HttpSession hs = request.getSession(true);
		int id=(Integer) hs.getAttribute("aid");
		admin admin = new admin();
		admin.setA_password(password);
		admin.setA_id(id);
		if (adminService.countByCondition(admin, ".checkpwd") == 1) {
			out.write("密码正确");
		}else
		{
			out.write("密码错误");
		}
	}
}