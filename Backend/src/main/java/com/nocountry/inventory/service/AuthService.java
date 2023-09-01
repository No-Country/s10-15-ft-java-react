package com.nocountry.inventory.service;




import com.nocountry.inventory.auth.AuthResponse;
import com.nocountry.inventory.dto.UserEntityDTO;
import com.nocountry.inventory.repository.UserEntityRepository;
import com.nocountry.inventory.requestEntity.LoginRE;
import com.nocountry.inventory.requestEntity.UserRE;
import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.util.ERole;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    @Autowired
    UserEntityRepository userEntityRepository;

    @Autowired
    JwtService jwtService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRE loginRE) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRE.getUserName(),loginRE.getPassword()));
        UserDetails user =userEntityRepository.findByUsername(loginRE.getUserName()).orElseThrow();
        String token = jwtService.getToken(user);
        return new AuthResponse(token);
    }

    public UserEntityDTO register(UserRE userRE) {
        UserEntity user = new UserEntity();

        if (userRE.getUserName() != null)
                user.setUsername(userRE.getUserName());
        if (userRE.getPassword() != null)
                user.setPassword(passwordEncoder.encode(userRE.getPassword()));
        user.setLastname(userRE.getLastname());
        user.setFirstname(userRE.getFirstname());
        user.setCountry(userRE.getCountry());
        user.setRole(ERole.USER);
        userEntityRepository.save(user);

        AuthResponse token = new AuthResponse(jwtService.getToken(user));
        return new UserEntityDTO(user,token);
    }
}
