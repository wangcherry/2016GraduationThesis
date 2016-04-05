package com.msg.serviceImpl;

import com.msg.base.AbstractBaseDao;
import com.msg.entity.user;
import com.msg.service.UserService;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl extends AbstractBaseDao<user,Integer>
		implements UserService {

}