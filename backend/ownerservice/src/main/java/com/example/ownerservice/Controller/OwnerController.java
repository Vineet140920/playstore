package com.example.ownerservice.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ownerservice.Entity.Owner;
import com.example.ownerservice.Service.OwnerService;
import com.example.ownerservice.config.JwtUtil;


@CrossOrigin
@RestController
@RequestMapping("/api/owners")
public class OwnerController {

    @Autowired
    private OwnerService ownerService;
    
    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/register")
    public Owner register(@RequestBody Owner owner) {
        return ownerService.registerOwner(owner);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestParam String username, @RequestParam String password) {
        Owner user = ownerService.loginOwner(username, password);
        if (user != null) {
            String token = jwtUtil.generateToken(username);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("username", user.getUsername());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
