package com.msg.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

import com.msg.entity.message;
import com.msg.entity.test;
import com.msg.service.MessageService;
import com.msg.service.UserService;
import com.msg.service.testService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by kx on 16/1/5.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private MessageService messageService;
    
    @RequestMapping("/Login.do")
    public String saveTest(HttpServletRequest request){
        System.out.println("~~~~~~~~~~");
        System.out.println(request.getParameter("username"));
        System.out.println("~~~~~~~~~~");
        return "kx";
    }
    //用户查询数据信息
    @RequestMapping("/isIdExist.do")
    public void ShowFindMsg(HttpServletRequest request, HttpServletResponse response) throws IOException
    {
    	 System.out.println("user~~~~~~~~~~~~~");
         response.setContentType("text/html;charset=UTF-8");
         request.setCharacterEncoding("UTF-8");
         PrintWriter out = response.getWriter();
         message message = new message();
         message.setM_id(request.getParameter("id"));
         System.out.println(message);
         int flag = messageService.countByCondition(message,".findId");
         System.out.println(flag);
         if(messageService.countByCondition(message,".findId")==1)//查询结果
         {
             out.write("1");//编码存在
         }
         else {
             out.write("2");//编码不存在
         }
    }
    @RequestMapping("/showUserMsg.do")
    public String showUserMsg(HttpServletRequest request){
        System.out.println("~~~~~~~~~~");
        System.out.println(request.getParameter("focusedinput"));
        System.out.println("~~~~~~~~~~");
        return "../service";
    }
}
