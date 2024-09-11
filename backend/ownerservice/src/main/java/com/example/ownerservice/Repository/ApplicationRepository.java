package com.example.ownerservice.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ownerservice.Entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
 
	 List<Application> findByGenre(String genre);
	
}