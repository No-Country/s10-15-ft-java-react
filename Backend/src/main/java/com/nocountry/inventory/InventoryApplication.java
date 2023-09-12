package com.nocountry.inventory;

import com.nocountry.inventory.entity.UserEntity;
import com.nocountry.inventory.repository.UserEntityRepository;
import com.nocountry.inventory.util.ERole;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@SpringBootApplication

public class InventoryApplication {

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	UserEntityRepository userEntityRepository;

	public static void main(String[] args) {
		SpringApplication.run(InventoryApplication.class, args);

	}

	@Bean
	CommandLineRunner init(){
		return args -> {
			UserEntity user =UserEntity.builder()
					.userName("prueba")
					.password(passwordEncoder.encode("1234"))
					.role(ERole.ADMIN)
					.build();
			userEntityRepository.save(user);
		};
	}

}
