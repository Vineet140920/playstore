package com.example.ownerservice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ownerservice.Entity.Application;
import com.example.ownerservice.Service.ApplicationService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping
    public Application createApplication(@RequestBody Application application) {
        return applicationService.createApplication(application);
    }

    @PutMapping("/{id}")
    public Application updateApplication(@PathVariable Long id, @RequestBody Application application) {
        return applicationService.updateApplication(id, application);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }
    
    @GetMapping("/{id}/toggle-visibility")
    public Application toggleVisibility(@PathVariable Long id) {
        return applicationService.toggleVisibility(id);
    }

    @GetMapping("/{id}")
    public Application getApplication(@PathVariable Long id) {
        return applicationService.getApplication(id);
    }

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }
    
    
    @GetMapping("/genre/{genre}")
    public ResponseEntity<List<Application>> getApplicationsByGenre(@PathVariable String genre) {
        List<Application> applications = applicationService.getAllApplicationsByGenre(genre);
        if (applications.isEmpty()) {
            return ResponseEntity.noContent().build(); 
        }
        return ResponseEntity.ok(applications);
    }
    
}
