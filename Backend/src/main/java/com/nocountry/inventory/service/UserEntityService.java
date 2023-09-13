package com.nocountry.inventory.service;

import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.exception.RequestException;
import com.nocountry.inventory.repository.UserEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserEntityService {

    @Autowired
    UserEntityRepository userEntityRepository;

    @Transactional
    public UserEntity register(UserEntity userEntity) {
        var existingEmail = userEntityRepository.findByEmail(userEntity.getEmail());
        if (existingEmail != null) {
            throw new RequestException("El email ya se encuentra en uso", HttpStatus.BAD_REQUEST);
        }
        return userEntityRepository.save(userEntity);
    }

    @Transactional
    public UserEntity update(UserEntity userEntity, Long id) {
        var userUpdate = userEntityRepository.findById(id);

        if (!userUpdate.isPresent()) {
            throw new RequestException("Usuario no encontrado", HttpStatus.NOT_FOUND);
        }

        UserEntity existingUser = userUpdate.get();
        existingUser.setUsername(userEntity.getUsername());
        existingUser.setPassword(userEntity.getPassword());
        existingUser.setEmail(userEntity.getEmail());
        existingUser.setRole(userEntity.getRole());

        return userEntityRepository.save(existingUser);
    }

    @Transactional
    public UserEntity login(String username, String password) {
        var datLogin = userEntityRepository.findByUsernameAndPassword(username, password);
        if (datLogin == null) {
            throw new RequestException("Credenciales Invalidas", HttpStatus.BAD_REQUEST);
        }

        return datLogin;
    }

    @Transactional
    public List<UserEntity> listAllUsers() {
        var userList = userEntityRepository.findAll();
        if ((userList.isEmpty())) {
            throw new RequestException("No se han encontrado usuarios", HttpStatus.NO_CONTENT);
        }
        return userList;
    }

    @Transactional
    public Optional<UserEntity> getUserById(Long id) {
        var user = userEntityRepository.findById(id);
        if (!user.isPresent()) {
            throw new RequestException("Id del usuario invalida", HttpStatus.BAD_REQUEST);
        }
        return user;
    }

    @Transactional
    public void deleteUser(Long id) {
        var user = userEntityRepository.findById(id);

        if (!user.isPresent()) {
            throw new RequestException("Id del usuario invalida", HttpStatus.BAD_REQUEST);
        }
        userEntityRepository.deleteById(id);
    }

    @Transactional
    public Boolean userExist(String username) {
        Optional<UserEntity> user = userEntityRepository.findByUsername(username);
        return user.isPresent();
    }

}
