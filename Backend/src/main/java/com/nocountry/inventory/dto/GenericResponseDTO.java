package com.nocountry.inventory.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenericResponseDTO <T> {
    private boolean success;
    private String message;
    private T data;
}
