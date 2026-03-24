package com.onboard.onboarding.controllers;

import com.onboard.onboarding.entities.Candidate;
import com.onboard.onboarding.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private CandidateRepository candidateRepository;

    @GetMapping("/token")
    public String getToken(@RequestParam String email) {

        Optional<Candidate> optional =
                candidateRepository.findByEmail(email);

        if (optional.isEmpty()) {
            return "NOT_FOUND";
        }

        Candidate c = optional.get();

        return c.getVerificationToken();
    }
}