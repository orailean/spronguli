package com.kaizen.backend.controller;

import com.kaizen.backend.exception.ResourceNotFoundException;
import com.kaizen.backend.model.User;
import com.kaizen.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value="/list")
    public ResponseEntity<List<User>> getAllUsers(){
        try {
            return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") int userid){
        User user = userService.findById(userid).orElseThrow(
                () -> new ResourceNotFoundException("Not found User with id " + userid)
        );
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping(value="/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") int id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
