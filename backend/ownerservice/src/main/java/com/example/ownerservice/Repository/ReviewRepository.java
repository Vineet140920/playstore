package com.example.ownerservice.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ownerservice.Entity.Review;



public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByApplicationId(Long applicationId);
}
