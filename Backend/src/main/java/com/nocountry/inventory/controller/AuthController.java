package com.nocountry.inventory.controller;

import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.requestEntity.LoginRE;
import com.nocountry.inventory.requestEntity.UserRE;
import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.service.AuthService;
import com.nocountry.inventory.service.UserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"https://stockflow10.vercel.app/","https://stockflow.netlify.app/","http://localhost:5173/"})
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
            return ResponseEntity.badRequest().body(new GenericResponseDTO<>(false,"El Usuario Ya existe",null));
        }

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"Success",authService.register(userRE)));

    }

}