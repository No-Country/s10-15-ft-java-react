package com.nocountry.inventory.controller;

import com.nocountry.inventory.auth.LoginRequest;
import com.nocountry.inventory.auth.RegisterRequest;
import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"Success",authService.login(request)));

    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"Success",authService.register(request)));

    }

}