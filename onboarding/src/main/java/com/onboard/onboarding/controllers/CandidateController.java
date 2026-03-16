package com.onboard.onboarding.controllers;
import com.onboard.onboarding.entities.Application;
import com.onboard.onboarding.entities.Candidate;
import com.onboard.onboarding.entities.Test;
import com.onboard.onboarding.repositories.CandidateRepository;
import com.onboard.onboarding.services.CandidateService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidate")
@RequiredArgsConstructor
public class CandidateController {

    private final CandidateService candidateService;
    private final CandidateRepository candidateRepository;

    
    @PostMapping("/apply")
    public Application apply(@RequestBody Application application) {
        return candidateService.apply(application);
    }

    @PostMapping("/tests/{testId}/submit")
    public Test submitOnlineTest(
            @PathVariable Long testId,
            @RequestBody ScoreRequest request) {
        return candidateService.submitOnlineTest(testId, request.getScore());
    }

    @Data
    static class ScoreRequest {
        private int score;
    }
    @PostMapping("/login")
public Candidate login(@RequestBody LoginRequest request){
    return candidateService.login(request.getEmail(), request.getPassword());
}

@Data
static class LoginRequest {
    private String email;
    private String password;
}
@GetMapping("/check-email")
public boolean checkEmail(@RequestParam String email){
    return candidateService.emailExists(email);
}
@PostMapping("/register")
public Candidate register(@RequestBody Candidate candidate){
    return candidateRepository.save(candidate);
}
}
