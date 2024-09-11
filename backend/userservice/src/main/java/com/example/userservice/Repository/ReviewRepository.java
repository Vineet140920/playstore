package com.example.userservice.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.userservice.Entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByApplicationId(Long applicationId);
}
