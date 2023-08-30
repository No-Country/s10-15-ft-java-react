package com.nocountry.inventory.requestEntity;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductRE {
    private Long id;
    private String productName;
    private String itemCode;
    private Integer category; // Usar Integer para mapear INT
    private BigDecimal unitPrice;
    private Integer quantityStock; // Usar Integer para mapear INT
    private String pathImage; // Corregir el nombre del campo
    private String locationDeposit;
    private String provider;
    private String description;
    private String warehouseStatus;
}
