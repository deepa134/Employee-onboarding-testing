package com.onboard.onboarding.entities;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "candidates")
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    private String password; 
      // ✅ NEW FIELD
       private boolean emailVerified = false;

    // ✅ token
    private String verificationToken;

    // ✅ expiry time
    private LocalDateTime tokenExpiry;
}