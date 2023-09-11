package com.nocountry.inventory.config;

import com.nocountry.inventory.config.jwt.JwtAuthenticationFilter;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final JwtAuthenticationFilter jwtAuthenticationFilter;

  private final AuthenticationProvider authenticationProvider;

    @Bean
  public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(auth -> {
          auth.requestMatchers("/auth/login").permitAll();
          auth.requestMatchers("/auth/register").permitAll();
          auth.requestMatchers("/user/listAll").permitAll();
          /* testing product */
          auth.requestMatchers("/product/listAll").permitAll();
          auth.requestMatchers("/product/list/**").permitAll();
          auth.requestMatchers("/product/save").permitAll();
          auth.requestMatchers("/product/update/").permitAll();
          auth.requestMatchers("/product/delete/**").permitAll();
          /* Fin testing product */

          /* Testing upload file */
          auth.requestMatchers("/files/upload").permitAll();
          auth.requestMatchers("/files/delete").permitAll();
          // Para acceder a la imagen
          auth.requestMatchers("/images/**").permitAll();
          /* Fin Testing upload file */
          auth.anyRequest().authenticated();
        })
        .sessionManagement(session -> {
          session.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        })
        .cors(Customizer.withDefaults())
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
        .build();
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(
        List.of("https://stockflows10.vercel.app", "http://localhost:5173", "https://stockflows10.netlify.app"));
    configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH"));
    configuration.setAllowedHeaders(List.of("Authorization"));

    UrlBasedCorsConfigurationSource sourse = new UrlBasedCorsConfigurationSource();
    sourse.registerCorsConfiguration("/**", configuration);
    return sourse;

    
  }

}
