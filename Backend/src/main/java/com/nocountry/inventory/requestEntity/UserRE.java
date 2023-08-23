package com.nocountry.inventory.requestEntity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRE {

    private String userName;
    private String firstname;
    private String lastname;
    private String password;
    private String country;

}