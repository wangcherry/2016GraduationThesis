package com.msg.controller;

import com.msg.entity.msg_type;
import com.msg.service.MessageService;
import com.msg.service.Msg_typeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.msg.entity.message;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by kx on 16/1/7.
 */

@Controller

@RequestMapping("/Msg")
public class MsgController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private Msg_typeService msg_typeService;

    @RequestMapping("/saveMsg.do")
    public void saveMsg(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
        System.out.println("进入信息提交");
        message message = new message();
        message.setM_id(request.getParameter("focusedinput"));
        message.setM_name(request.getParameter("name"));
        message.setType(request.getParameter("selector1"));
        message.setText(request.getParameter("txtarea1"));
        System.out.println(message);
        messageService.add(message);
        request.getRequestDispatcher("../Msg/showMs_tables.do").forward(request, response);

    }
    @RequestMapping("/isIdExist.do")
    public void isIdExist(HttpServletRequest request,HttpServletResponse response) throws IOException {
        System.out.println("~~~~~~~~~~~~~");
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        message message = new message();
        message.setM_id(request.getParameter("id"));
        System.out.println(message);
        int flag = messageService.countByCondition(message,".findId");
        System.out.println(flag);
        if(messageService.countByCondition(message,".findId")==0)
        {
            out.write("该编码可用");
        }
        else {
            out.write("该编码已存在");
        }
    }
    //数据提交表单类型显示
    @RequestMapping("/showMs_forms.do")
    public String showMs_forms(HttpServletRequest request){
        List<msg_type> msg_typeList = msg_typeService.getAll();
        System.out.println(msg_typeList);
        request.setAttribute("msg_typeList", msg_typeList);
        return "../admin/ms_forms";
    }
    //数据表单显示
    @RequestMapping("/showMs_tables.do")
    public String showMs_tables(HttpServletRequest request){
        System.out.println("进入展示信息");
        List<message> messageList = messageService.getAll();
        //List<message> messageList = messageService.getList(1);
        System.out.println(messageList);
        request.setAttribute("messageList", messageList);
        return "../admin/ms_tables";
    }
   
}
