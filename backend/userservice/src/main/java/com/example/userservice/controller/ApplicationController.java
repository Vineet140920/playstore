package com.example.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.userservice.Entity.Application;
import com.example.userservice.Service.ApplicationService;

import java.util.List;


@RestController
@RequestMapping("/api/applications")
@CrossOrigin("*")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    @CrossOrigin("*")
    public ResponseEntity<List<Application>> getVisibleApplications() {
        return ResponseEntity.ok(applicationService.getVisibleApplications());
    }

    @GetMapping("/top-rated")
    @CrossOrigin("*")
    public ResponseEntity<List<Application>> getTopRatedApplications() {
        return ResponseEntity.ok(applicationService.getApplicationsByRating());
        
    }
    
    @GetMapping("/genre/{genre}")
    @CrossOrigin("*")
    public ResponseEntity<List<Application>> getApplicationsByGenre(@PathVariable String genre) {
        List<Application> applications = applicationService.getApplicationsByGenre(genre);
        if (applications.isEmpty()) {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no applications are found
        }
        return ResponseEntity.ok(applications);
    }
    
    
    @GetMapping("/{applicationId}/download")
    @CrossOrigin("*")
    public ResponseEntity<Application> downloadApplication(@PathVariable Long applicationId) {
        Application application = applicationService.downloadApplication(applicationId);      
        return ResponseEntity.ok(application);
    }

    @GetMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Application> getApplicationById(@PathVariable Long id) {
        Application app = applicationService.getApplicationById(id);
        if (app != null && app.isVisibility()) {
            return ResponseEntity.ok(app);
        }
        return ResponseEntity.status(404).build();
    }
}

