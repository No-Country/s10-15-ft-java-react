package com.nocountry.inventory.service;

import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.repository.UserEntityRepository;
import org.hibernate.cache.spi.entry.StructuredCacheEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserEntityService {

    @Autowired
    UserEntityRepository userEntityRepository;

    public Boolean userEntity(String username){
      Optional<UserEntity> user = userEntityRepository.findByUsername(username);
        return user.isPresent();
    }


}
