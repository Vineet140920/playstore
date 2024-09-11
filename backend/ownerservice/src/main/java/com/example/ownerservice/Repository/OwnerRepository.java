package com.example.ownerservice.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ownerservice.Entity.Owner;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
	 Owner findByUsername(String username);
}
