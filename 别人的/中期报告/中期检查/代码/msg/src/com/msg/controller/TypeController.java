package com.msg.controller;

import com.msg.service.Msg_typeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.msg.entity.msg_type;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by kx on 16/1/7.
 */

@Controller

@RequestMapping("/type")
public class TypeController {

    @Autowired
    private Msg_typeService msg_typeService;

    @RequestMapping("/saveType.do")
    public void saveType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        msg_type ms = new msg_type();
        ms.setMt_name(request.getParameter("type"));
        if(msg_typeService.countByCondition(ms,".findType")==0)
        {
            msg_typeService.add(ms);
            request.getRequestDispatcher("../type/showType.do").forward(request, response);
        }
        else {
            out.write("<script type='text/javascript'>alert('添加的类型已存在！');location.replace('../admin/ty_forms.jsp');</script>");

        }


    }
    @RequestMapping("/showType.do")
    public String showType(HttpServletRequest request){
        List<msg_type> msg_typeList = msg_typeService.getAll();
        System.out.println(msg_typeList);
        request.setAttribute("msg_typeList",msg_typeList);
        return "../admin/ty_tables";
    }
}
