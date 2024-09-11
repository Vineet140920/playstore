package com.example.ownerservice.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ownerservice.Entity.Review;
import com.example.ownerservice.Service.ReviewService;


@CrossOrigin
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/{applicationId}")
    public ResponseEntity<List<Review>> getReviewsByApplicationId(@PathVariable Long applicationId) {
        List<Review> reviews = reviewService.getReviewsByApplicationId(applicationId);
        if (reviews.isEmpty()) {
            return ResponseEntity.noContent().build(); 
        }
        return ResponseEntity.ok(reviews);
    }
}
