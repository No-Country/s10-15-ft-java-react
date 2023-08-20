package com.nocountry.inventory.service;




import com.nocountry.inventory.auth.AuthResponse;
import com.nocountry.inventory.auth.LoginRequest;
import com.nocountry.inventory.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    public AuthResponse login(LoginRequest request) {
        return null;
    }


    public AuthResponse register(RegisterRequest request) {
        return null;
    }
}