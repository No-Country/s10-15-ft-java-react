package com.nocountry.inventory.repository;

import java.util.Optional;

import javax.swing.text.html.Option;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.inventory.entity.ProductEntity;

public interface ProductEntityRepository extends JpaRepository<ProductEntity, Long> {
    /* Optional<UserEntity> findByUsername(String username); */
    Optional<ProductEntity> findByProductName(String productName);
}
