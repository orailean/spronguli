package com.kaizen.backend.service;

import com.kaizen.backend.model.User;

import java.util.List;
import java.util.Optional;

public interface UserInterface {
    List<User> getAllUsers();
    User addUser(User user);
    Optional<User> findById(int id);
    void deleteById(int id);

}
