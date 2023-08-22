package com.nocountry.inventory.service;




import com.nocountry.inventory.auth.AuthResponse;
import com.nocountry.inventory.repository.UserEntityRepository;
import com.nocountry.inventory.requestEntity.LoginRE;
import com.nocountry.inventory.requestEntity.UserRE;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.util.ERole;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    @Autowired
    UserEntityRepository userEntityRepository;

    @Autowired
    JwtService jwtService;


    public AuthResponse login(LoginRE loginRE) {
        return null;
    }

    public UserEntity register(UserRE userRE) {
        UserEntity user = new UserEntity();

        if (userRE.getUserName() != null)
                user.setUsername(userRE.getUserName());
        if (userRE.getPassword() != null)
                user.setPassword(userRE.getPassword());
        user.setLastname(userRE.getLastname());
        user.setFirstname(userRE.getFirstname());
        user.setCountry(userRE.getCountry());
        user.setRole(ERole.USER);

        userEntityRepository.save(user);


      return user;

              // new AuthResponse(jwtService.getToken(user));

    }
}
