package com.kaizen.backend.model;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="username", length = 30, nullable = false)
    private String username;

    @Column(name="password", length = 30, nullable = false)
    private String password;
}
