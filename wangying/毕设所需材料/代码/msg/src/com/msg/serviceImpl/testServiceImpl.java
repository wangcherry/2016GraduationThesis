package com.msg.serviceImpl;

import org.springframework.stereotype.Service;

import com.msg.base.AbstractBaseDao;
import com.msg.entity.test;
import com.msg.service.testService;


@Service
public class testServiceImpl extends AbstractBaseDao<test,Integer>
		implements testService {

}