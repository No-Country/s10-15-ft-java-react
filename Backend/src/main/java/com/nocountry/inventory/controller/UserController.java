package com.nocountry.inventory.controller;


import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.service.UserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.management.relation.RoleStatus;
import javax.print.DocFlavor;

@RequestMapping("/user")
@RestController
@Secured("ROLE_ADMIN")
@CrossOrigin(origins = {"https://stockflow10.vercel.app/","https://stockflow.netlify.app/","http://localhost:5173/"})
public class UserController {

    @Autowired
    UserEntityService userEntityService;

    @GetMapping("/listAll")
    public ResponseEntity<?> listAllUsers(){
        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"FULL",userEntityService.listAllUsers()));
    }





}
