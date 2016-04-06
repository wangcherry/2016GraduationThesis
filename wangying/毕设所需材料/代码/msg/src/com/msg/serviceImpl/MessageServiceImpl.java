package com.msg.serviceImpl;

import com.msg.base.AbstractBaseDao;
import com.msg.entity.message;
import com.msg.service.MessageService;
import org.springframework.stereotype.Service;


@Service
public class MessageServiceImpl extends AbstractBaseDao<message,Integer>
		implements MessageService {

}