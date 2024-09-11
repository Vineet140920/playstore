package com.example.ownerservice.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.ownerservice.Entity.Owner;
import com.example.ownerservice.Repository.OwnerRepository;


@Service
public class OwnerService implements UserDetailsService {

    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Owner owner = ownerRepository.findByUsername(username);
        if (owner == null) {
            throw new UsernameNotFoundException("Owner not found");
        }
        return new org.springframework.security.core.userdetails.User(owner.getUsername(), owner.getPassword(), new ArrayList<>());
    }

    public Owner registerOwner(Owner owner) {
        owner.setPassword(new BCryptPasswordEncoder().encode(owner.getPassword()));
        return ownerRepository.save(owner);
    }

    public Owner loginOwner(String username, String password) {
        Owner owner = ownerRepository.findByUsername(username);
        if (owner != null && new BCryptPasswordEncoder().matches(password, owner.getPassword())) {
            return owner;
        }
        return null;
    }
}

