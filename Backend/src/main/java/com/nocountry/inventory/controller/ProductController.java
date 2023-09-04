package com.nocountry.inventory.controller;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
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
@Secured("ROLE_ADMIN")
@CrossOrigin(origins = {"https://stockflow10.vercel.app/","https://stockflow.netlify.app/","http://localhost:5173/"})
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
    @PostMapping(value = "/save")
    public ResponseEntity<?> saveProduct(@RequestBody ProductEntity productEntity) {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.saveProduct(productEntity)));
    }

    // update product
    @PutMapping(value = "/update")
    public ResponseEntity<?> updateProduct(@RequestBody ProductEntity productEntity) {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "FULL", productEntityService.updateProduct(productEntity)));
    }

    // delete product
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
