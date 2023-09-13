package com.nocountry.inventory.repository;

import com.nocountry.inventory.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByUsername(String username);

    @Query("SELECT u FROM UserEntity u WHERE u.username = :username AND u.password = :password")
    UserEntity findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    UserEntity findByEmail(String email);

}
