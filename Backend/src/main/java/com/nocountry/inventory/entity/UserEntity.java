package com.nocountry.inventory.entity;

import com.nocountry.inventory.util.ERole;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "S_user",uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank
    private String userName;

    @Column(nullable = false)
    @NotBlank
    private String password;

    @Email
    @Column(nullable = false)
    @NotBlank
    private String email;

    @NotBlank
    @Enumerated(EnumType.STRING)
    ERole role;

}
