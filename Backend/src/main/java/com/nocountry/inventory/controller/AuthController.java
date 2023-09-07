package com.nocountry.inventory.controller;

import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.requestEntity.LoginRE;
import com.nocountry.inventory.requestEntity.UserRE;
import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.service.AuthService;
import com.nocountry.inventory.service.UserEntityService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final UserEntityService userEntityService;

    @PostMapping("/login")
    public ResponseEntity<GenericResponseDTO> login(@RequestBody LoginRE loginRE){
        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"FULL",authService.login(loginRE)));
    }

    @PostMapping("/register")
    public ResponseEntity<GenericResponseDTO> register(@RequestBody UserRE userRE){

        Boolean usernameAlreadyRegistered = userEntityService.userExist(userRE.getUserName());

        if(usernameAlreadyRegistered)
            return ResponseEntity.badRequest().body(new GenericResponseDTO<>(false,"El Usuario Ya existe",null));

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"FULL",authService.register(userRE)));
    }
}