package com.example.ownerservice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ownerservice.Entity.Application;
import com.example.ownerservice.Repository.ApplicationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public Application createApplication(Application application) {
    	SendMail.mailSend("xyz@example.com", "New app added to the Playstore", application.getName()+ " is added to the playstore. explore it now");
        return applicationRepository.save(application);
    }

    public Application updateApplication(Long id, Application application) {
        if (applicationRepository.existsById(id)) {
            application.setId(id);
            return applicationRepository.save(application);
        } else {
            throw new RuntimeException("Application not found");
        }
    }
    
    public List<Application> getAllApplicationsByGenre(String genre) {
        return applicationRepository.findByGenre(genre);
    }
    
    public Application toggleVisibility(Long id) {
        Optional<Application> optionalApplication = applicationRepository.findById(id);
        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();
            application.setVisibility(!application.isVisibility());  
            return applicationRepository.save(application);
        } else {
            return null;
        }
    }
    public void deleteApplication(Long id) {
        if (applicationRepository.existsById(id)) {
            applicationRepository.deleteById(id);
        } else {
            throw new RuntimeException("Application not found");
        }
    }

    public Application getApplication(Long id) {
        Optional<Application> application = applicationRepository.findById(id);
        return application.orElseThrow(() -> new RuntimeException("Application not found"));
    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }
}
