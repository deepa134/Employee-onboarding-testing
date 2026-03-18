package com.onboard.onboarding.controllers;

import com.onboard.onboarding.entities.Application;
import com.onboard.onboarding.entities.Candidate;
import com.onboard.onboarding.entities.Test;
import com.onboard.onboarding.repositories.CandidateRepository;
import com.onboard.onboarding.services.CandidateService;
import com.onboard.onboarding.services.EmailService;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/candidate")
@RequiredArgsConstructor
public class CandidateController {

    private final CandidateService candidateService;
    private final CandidateRepository candidateRepository;
    private final EmailService emailService;


    // ================= APPLY =================

    @PostMapping("/apply")
    public Application apply(@RequestBody Application application) {
        return candidateService.apply(application);
    }


    // ================= TEST =================

    @PostMapping("/tests/{testId}/submit")
    public Test submitOnlineTest(
            @PathVariable Long testId,
            @RequestBody ScoreRequest request) {

        return candidateService.submitOnlineTest(
                testId,
                request.getScore()
        );
    }

    @Data
    static class ScoreRequest {
        private int score;
    }


    // ================= LOGIN =================

    @PostMapping("/login")
    public Candidate login(@RequestBody LoginRequest request){

        return candidateService.login(
                request.getEmail(),
                request.getPassword()
        );
    }

    @Data
    static class LoginRequest {
        private String email;
        private String password;
    }


    // ================= CHECK EMAIL =================

    @GetMapping("/check-email")
    public boolean checkEmail(@RequestParam String email){
        return candidateService.emailExists(email);
    }


    // ================= REGISTER =================

    @PostMapping("/register")
    public Candidate register(@RequestBody Candidate candidate){

        String token = UUID.randomUUID().toString();

        candidate.setEmailVerified(false);
        candidate.setVerificationToken(token);
        candidate.setTokenExpiry(
                LocalDateTime.now().plusHours(24)
        );

        Candidate saved =
                candidateRepository.save(candidate);

        String link =
                "http://localhost:4200/verify?token=" + token;

        String body =
                "Click this link to verify email:\n" + link;

        emailService.sendEmail(
                saved.getEmail(),
                "Verify Email",
                body
        );

        return saved;
    }


    // ================= VERIFY =================

    @GetMapping("/verify")
    public String verify(@RequestParam String token){

        Optional<Candidate> optional =
                candidateRepository.findByVerificationToken(token);

        if(optional.isEmpty()){
            return "Invalid token";
        }

        Candidate c = optional.get();

        if(c.getTokenExpiry()
                .isBefore(LocalDateTime.now())){
            return "Token expired";
        }

        c.setEmailVerified(true);
        c.setVerificationToken(null);

        candidateRepository.save(c);

        return "Email verified";
    }


    // ================= RESEND =================

    @PostMapping("/resend")
    public String resend(@RequestParam String email){

        Optional<Candidate> optional =
                candidateRepository.findByEmail(email);

        if(optional.isEmpty()){
            return "User not found";
        }

        Candidate c = optional.get();

        if(c.isEmailVerified()){
            return "Already verified";
        }

        String token = UUID.randomUUID().toString();

        c.setVerificationToken(token);
        c.setTokenExpiry(
                LocalDateTime.now().plusHours(24)
        );

        candidateRepository.save(c);

        String link =
                "http://localhost:4200/verify?token=" + token;

        emailService.sendEmail(
                c.getEmail(),
                "Verify Email",
                "Click to verify:\n" + link
        );

        return "Verification email sent";
    }

}