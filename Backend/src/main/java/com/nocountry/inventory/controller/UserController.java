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
@CrossOrigin(origins = { "*" })
public class UserController {

    @Autowired
    UserEntityService userEntityService;
    
    @CrossOrigin(origins = { "*" })
    @PostMapping
    public ResponseEntity<UserEntity> register(@RequestBody @Valid UserEntity userEntity) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userEntityService.register(userEntity));
    }
    @CrossOrigin(origins = { "*" })
    @PutMapping("/{id}")
    public ResponseEntity<UserEntity> update(@Valid @RequestBody UserEntity userEntity,@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(userEntityService.update(userEntity, id));
    }

    @PostMapping("/login")
    public ResponseEntity<UserEntity> login(@Valid @RequestParam String username, @Valid @RequestParam String password) {
        return ResponseEntity.status(HttpStatus.OK).body(userEntityService.login(username, password));
    }
    @CrossOrigin(origins = { "*" })
    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> getUserById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(userEntityService.getUserById(id));
    }

    @CrossOrigin(origins = { "*" })
    @GetMapping("/listAll")
    public ResponseEntity<?> listAllUsers(){
        return ResponseEntity.ok().body(new GenericResponseDTO<>(true,"FULL",userEntityService.listAllUsers()));
    }
    @CrossOrigin(origins = { "*" })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userEntityService.deleteUser(id);
         return ResponseEntity.status(HttpStatus.OK).build();
    }



}
