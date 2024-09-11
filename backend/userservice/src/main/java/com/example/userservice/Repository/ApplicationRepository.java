package com.example.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.userservice.Entity.Application;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByVisibilityTrue();
    List<Application> findByVisibilityTrueOrderByRatingDesc();
    List<Application> findByGenreStartingWithAndVisibilityTrue(String prefix);
    
}
