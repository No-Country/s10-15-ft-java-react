package com.nocountry.inventory.dto;


import com.nocountry.inventory.auth.AuthResponse;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.service.JwtService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserEntityDTO {
    private Long id;
    private String username;
    private String lastname;
    private String firstname;
    private String country;
    private String token;


}
