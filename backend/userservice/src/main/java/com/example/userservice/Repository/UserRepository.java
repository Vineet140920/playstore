package com.example.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.userservice.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
