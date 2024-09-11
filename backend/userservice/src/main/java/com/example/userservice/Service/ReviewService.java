package com.example.userservice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.userservice.Entity.Review;
import com.example.userservice.Repository.ReviewRepository;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ApplicationService applicationService;

    public Review submitReview(Review review) {
        reviewRepository.save(review);
        applicationService.updateRating(review.getApplicationId(), review.getRating());
        return review;
    }
    
    public List<Review> getReviewsByApplicationId(Long applicationId) {
        return reviewRepository.findByApplicationId(applicationId);
    }
}
