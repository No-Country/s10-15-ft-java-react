package com.nocountry.inventory.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterRequest {

    private String userName;
    private String firstname;
    private String lastname;
    private String password;
    private String phone;

}