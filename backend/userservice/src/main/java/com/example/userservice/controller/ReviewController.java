package com.example.userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.userservice.Entity.Review;
import com.example.userservice.Service.ReviewService;


@RestController
@RequestMapping("/api/reviews")
@CrossOrigin("*")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> submitReview(@RequestBody Review review) {
        return ResponseEntity.ok(reviewService.submitReview(review));
    }
    
    
    @GetMapping("/{applicationId}")
    public ResponseEntity<List<Review>> getReviewsByApplicationId(@PathVariable Long applicationId) {
        List<Review> reviews = reviewService.getReviewsByApplicationId(applicationId);
        if (reviews.isEmpty()) {
            return ResponseEntity.noContent().build(); 
        }
        return ResponseEntity.ok(reviews);
    }
}
