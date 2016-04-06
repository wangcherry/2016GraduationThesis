package com.msg.serviceImpl;

import com.msg.base.AbstractBaseDao;
import com.msg.entity.msg_type;
import com.msg.entity.test;
import com.msg.service.Msg_typeService;
import com.msg.service.testService;
import org.springframework.stereotype.Service;


@Service
 public class Msg_typeServiceImpl extends AbstractBaseDao<msg_type,Integer>
		implements Msg_typeService {

}