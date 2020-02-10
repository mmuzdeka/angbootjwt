package com.jwtauth.service;

import com.jwtauth.model.User;
import com.jwtauth.model.UserDto;
import java.util.List;

/**
 *
 * @author Milan
 */
public interface UserService {
    
    User save(UserDto user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);
    User findById(Long id);
}
