package com.nocountry.inventory.controller;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.entity.ProductEntity;
import com.nocountry.inventory.service.ProductEntityService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequestMapping("/product")
@RestController
@CrossOrigin(origins = { "*" })
public class ProductController {
    @Autowired
    ProductEntityService productEntityService;

    // Get all products
    @GetMapping("/listAll")
    public ResponseEntity<?> listAllProducts() {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.getAllProducts()));
    }

    // Get product by id
    @GetMapping("/list/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.getProductById(id)));
    }

    // Post product
    @CrossOrigin(origins = { "*" })
    @PostMapping(value = "/save")
    public ResponseEntity<?> saveProduct(@RequestBody ProductEntity productEntity) {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.saveProduct(productEntity)));
    }

    // update product
    @CrossOrigin(origins = { "*" })
    @PutMapping(value = "/update")
    public ResponseEntity<?> updateProduct(@RequestBody ProductEntity productEntity) {
        // Mostrando lo que se recibe
        System.out.println(productEntity);
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.updateProduct(productEntity)));
    }

    // delete product
    @CrossOrigin(origins = { "*" })
    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productEntityService.deleteProductById(id);
        return ResponseEntity.ok().body(new GenericResponseDTO<>(true, "FULL", "Product deleted"));
    }

    // Get product by name
    @GetMapping("/list/name/{productName}")
    public ResponseEntity<?> getProductByName(@PathVariable String productName) {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.getProductByName(productName)));
    }

}
