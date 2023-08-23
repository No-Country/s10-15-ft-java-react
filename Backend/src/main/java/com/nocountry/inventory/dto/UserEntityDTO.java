package com.nocountry.inventory.dto;


import com.nocountry.inventory.auth.AuthResponse;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.service.JwtService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntityDTO {


    private Long id;
    private String username;
    private String lastname;
    private String firstname;
    private String country;
    private AuthResponse token;

    public UserEntityDTO(UserEntity user,AuthResponse token){

        if(user.getId()!=null)
            this.id = user.getId();
        if(user.getUsername()!=null)
            this.username = user.getUsername();

        this.lastname = user.getLastname();
        this.firstname = user.getFirstname();
        this.country = user.getCountry();

        this.token = token;

    }


}
