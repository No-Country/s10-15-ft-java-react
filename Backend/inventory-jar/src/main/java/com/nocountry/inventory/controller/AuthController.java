package com.nocountry.inventory.controller;

import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.requestEntity.LoginRE;
import com.nocountry.inventory.requestEntity.UserRE;
import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.service.AuthService;
import com.nocountry.inventory.service.UserEntityService;
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

    @Autowired
    UserEntityService userEntityService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRE loginRE){

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"Success",authService.login(loginRE)));

    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRE userRE){

        Boolean user = userEntityService.userEntity(userRE.getUserName());

        if(user){
            return ResponseEntity.badRequest().body(new GenericResponseDTO<>(false,"El Usuario Ya existe",""));
        }

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"Success",authService.register(userRE)));

    }

}