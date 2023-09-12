package com.nocountry.inventory.service;

import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.exception.RequestException;
import com.nocountry.inventory.repository.UserEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserEntityService {

    @Autowired
    UserEntityRepository userEntityRepository;

    public UserEntity register(UserEntity userEntity) {
        return userEntityRepository.save(userEntity);
    }

    public UserEntity update(UserEntity userEntity, Long id) {
        var userUpdate = userEntityRepository.findById(id);

        if (!userUpdate.isPresent()) {
            throw new RequestException("Usuario no encontrado", HttpStatus.NO_CONTENT);
        }

        return userEntityRepository.save(userEntity);
    }

    public UserEntity login(String userName, String password) {
        var datLogin = userEntityRepository.findByUsernameAndPassword(userName, password);
        if (datLogin == null) {
            throw new RequestException("Credenciales Invalidas", HttpStatus.BAD_REQUEST);
        }
        return datLogin;
    }

    public List<UserEntity> listAllUsers() {
        var userList = userEntityRepository.findAll();
        if ((userList.isEmpty())) {
            throw new RequestException("No se han encontrado usuarios", HttpStatus.NO_CONTENT);
        }
        return userList;
    }

    public Optional<UserEntity> getUserById(Long id) {
        var user = userEntityRepository.findById(id);
        if (!user.isPresent()) {
            throw new RequestException("Id del usuario invalida", HttpStatus.BAD_REQUEST);
        }
        return user;
    }

    public void deleteUser(Long id) {
        var user = userEntityRepository.findById(id);

        if (!user.isPresent()) {
            throw new RequestException("Id del usuario invalida", HttpStatus.BAD_REQUEST);
        }
        userEntityRepository.deleteById(id);
    }

    public Boolean userExist(String username) {
        Optional<UserEntity> user = userEntityRepository.findByUsername(username);
        return user.isPresent();
    }

}
