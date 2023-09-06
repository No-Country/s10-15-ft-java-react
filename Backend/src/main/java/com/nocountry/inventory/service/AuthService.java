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
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserEntityRepository userEntityRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public UserEntityDTO login(LoginRE loginRE) {
        return authenticate(loginRE.getUserName(), loginRE.getPassword());
    }

    public UserEntityDTO register(UserRE userRE) {
        UserEntity user = new UserEntity();

        user.setUsername(userRE.getUserName());
        user.setPassword(passwordEncoder.encode(userRE.getPassword()));
        user.setLastname(userRE.getLastname());
        user.setFirstname(userRE.getFirstname());
        user.setRole(ERole.USER);

        userEntityRepository.save(user);

        return authenticate(user.getUsername(), user.getPassword());
    }

    private UserEntityDTO authenticate(String credential, String password){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(credential, password));

        var user = userEntityRepository.findByUsername(credential).orElseThrow();
        String token = jwtService.getToken(user);
        return UserEntityDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .country(user.getCountry())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .token(token)
                .build();
    }
}
