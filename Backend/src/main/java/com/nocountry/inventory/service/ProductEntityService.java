package com.nocountry.inventory.service;

import java.util.List;
import java.util.Optional;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.inventory.entity.ProductEntity;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.repository.ProductEntityRepository;

@Service
public class ProductEntityService {
    private final ProductEntityRepository productEntityRepository;

    @Autowired
    public ProductEntityService(ProductEntityRepository productEntityRepository) {
        this.productEntityRepository = productEntityRepository;
    }

    public Boolean productEntity(String productName) {
        Optional<ProductEntity> product = productEntityRepository.findByProductName(productName);
        return product.isPresent();
    }

    public ProductEntity saveProduct(ProductEntity productEntity) {
        return productEntityRepository.save(productEntity);
    }

    public Optional<ProductEntity> getProductById(Long id) {
        return productEntityRepository.findById(id);
    }

    public void deleteProductById(Long id) {
        productEntityRepository.deleteById(id);
    }

    // Get all products
    public List<ProductEntity> getAllProducts() {
        System.out.println("getAllProducts() called");
        System.out.println(productEntityRepository.findAll());
        return productEntityRepository.findAll();
    }

    public Object updateProduct(ProductEntity productEntity) {
        ProductEntity product = productEntityRepository.findById(productEntity.getId())
                .orElseThrow(() -> new RuntimeException("Message not found"));
        if (productEntity.getProductName() != null) product.setProductName(productEntity.getProductName());
        if (productEntity.getItemCode() != null) product.setItemCode(productEntity.getItemCode());
        if (productEntity.getCategory() != null) product.setCategory(productEntity.getCategory());
        if (productEntity.getUniPrice() != null) product.setUniPrice(productEntity.getUniPrice());
        if (productEntity.getQuantityStock() != null) product.setQuantityStock(productEntity.getQuantityStock());
        if (productEntity.getPathImage() != null) product.setPathImage(productEntity.getPathImage());
        if (productEntity.getLocationDeposit() != null) product.setLocationDeposit(productEntity.getLocationDeposit());
        if (productEntity.getProvider() != null) product.setProvider(productEntity.getProvider());
        if (productEntity.getDescription() != null) product.setDescription(productEntity.getDescription());
        if (productEntity.getWarehouseStatus() != null) product.setWarehouseStatus(productEntity.getWarehouseStatus());
        return productEntityRepository.save(product);
    }

    public Object getProductByName(String productName) {
        return null;
    }

}
