package com.nacro.SpringApp.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.nacro.SpringApp.dao.UserRepository;
import com.nacro.SpringApp.entity.User;
@Service
@EnableTransactionManagement
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User createUser(User user) {
        userRepository.save(user);
        return user;
    }

	@Override
	public void saveOrUpdate(User user) {
		userRepository.save(user);  
		
	}

	@Override
	public void delete(long id) {
	userRepository.deleteById(id);  
		
	}
	@Override
	public User getUsersById(long id)   
	{  
	return userRepository.findById(id).get();  
	}  
	@Override
	public void update(User user, int userid) {
		// TODO Auto-generated method stub
		userRepository.save(user);  
	}
}
