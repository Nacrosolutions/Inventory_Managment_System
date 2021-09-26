package com.nacro.SpringApp.service;

import java.util.List;

import com.nacro.SpringApp.entity.User;


public interface UserService {
    public List<User> getAllUsers();
 
    public  User createUser(User user);
  public void saveOrUpdate(User user);
  public void delete(long id);
  public void update(User user, int userid);
public User getUsersById(long id);   
}

