package com.msg.serviceImpl;

import com.msg.base.AbstractBaseDao;
import com.msg.entity.admin;
import com.msg.service.AdminService;
import org.springframework.stereotype.Service;


@Service
public class AdminServiceImpl extends AbstractBaseDao<admin,Integer>
		implements AdminService {

}