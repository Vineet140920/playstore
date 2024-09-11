package com.example.ownerservice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ownerservice.Entity.Review;
import com.example.ownerservice.Repository.ReviewRepository;


@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ApplicationService applicationService;

    public List<Review> getReviewsByApplicationId(Long applicationId) {
        return reviewRepository.findByApplicationId(applicationId);
    }
}
