package com.nocountry.inventory.controller;


import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.service.UserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {

    @Autowired
    UserEntityService userEntityService;

    @GetMapping("/listAll")
    public ResponseEntity<?> listAllUsers(){

        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"FULL",userEntityService.listAllUsers()));

    }


}
