package com.nocountry.inventory.controller;


import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.service.UserEntityService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/user")
@RestController
public class UserController {

    @Autowired
    UserEntityService userEntityService;

    @PostMapping
    public ResponseEntity<UserEntity> register(@RequestBody @Valid UserEntity userEntity) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userEntityService.register(userEntity));
    }

    @PutMapping
    public ResponseEntity<UserEntity> update(@Valid @RequestBody UserEntity userEntity, Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(userEntityService.update(userEntity, id));
    }

    @PostMapping("/login")
    public ResponseEntity<UserEntity> login(@Valid String userName, String pasword) {
        return ResponseEntity.status(HttpStatus.OK).body(userEntityService.login(userName, pasword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> getUserById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(userEntityService.getUserById(id));
    }


    @GetMapping("/listAll")
    public ResponseEntity<?> listAllUsers(){
        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"FULL",userEntityService.listAllUsers()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userEntityService.deleteUser(id);
         return ResponseEntity.status(HttpStatus.OK).build();
    }



}
