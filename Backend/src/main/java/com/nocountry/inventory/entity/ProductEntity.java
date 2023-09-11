package com.nocountry.inventory.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*Table s_products

id INT
productName VARCHAR(255)
itemCode VARCHAR(50)
category INT
uniPrice Decimal
quantityStock Eck INT
pathlmage VARCHAR(255)
locationDeposit V ARCHAR(255)
provider INT
description  TEXT
warehouseStatus VARCHAR(50) */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "s_Products")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private String itemCode;
    private Integer category; // Usar Integer para mapear INT
    private Double uniPrice; // Usar Double para mapear Decimal
    private Integer quantityStock; // Usar Integer para mapear INT
    private String pathImage; // Corregir el nombre del campo
    private String locationDeposit;
    private String provider;
    private String description;
    private String warehouseStatus;
}