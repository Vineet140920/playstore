package com.example.userservice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.userservice.Entity.Application;
import com.example.userservice.Repository.ApplicationRepository;

import java.util.List;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;

    public List<Application> getVisibleApplications() {
        return applicationRepository.findByVisibilityTrue();
    }

    public List<Application> getApplicationsByRating() {
        return applicationRepository.findByVisibilityTrueOrderByRatingDesc();
    }
    
    public List<Application> getApplicationsByGenre(String genre) {
        return applicationRepository.findByGenreStartingWithAndVisibilityTrue(genre);
    }

    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }
    
    
    public Application downloadApplication(Long applicationId) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));
        application.setDownloadCount(application.getDownloadCount() + 1);
    	SendMail.mailSend("xyz@example.com", application.getName(), application.getName()+ " is downloadded successfully. explore it now");
        return applicationRepository.save(application);
    }

    public void updateRating(Long applicationId, int rating) {
        Application app = getApplicationById(applicationId);
        if (app != null) {
            double newRating = (app.getRating() * app.getDownloadCount() + rating) / (app.getDownloadCount() + 1);
            app.setRating(newRating);
            app.setDownloadCount(app.getDownloadCount() + 1);
            applicationRepository.save(app);
        }
    }
}

