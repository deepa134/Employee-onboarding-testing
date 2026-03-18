package com.onboard.onboarding.services;

import com.onboard.onboarding.entities.*;
import com.onboard.onboarding.repositories.ApplicationRepository;
import com.onboard.onboarding.repositories.TestRepository;
import com.onboard.onboarding.repositories.CandidateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CandidateService {

    private final ApplicationRepository applicationRepo;
    private final TestRepository testRepo;
    private final CandidateRepository candidateRepo; // ✅ NEW
private final EmailService emailService;
    public Application apply(Application application) {

        Application savedApp = applicationRepo.save(application);

        Test onlineTest = new Test();
        onlineTest.setApplication(savedApp);
        onlineTest.setTestType(TestType.ONLINE);
        onlineTest.setTestStatus(TestStatus.SCHEDULED);
        onlineTest.setScore(0);

        testRepo.save(onlineTest);

        return savedApp;
    }

    public Test submitOnlineTest(Long testId, int score) {

        Test test = testRepo.findById(testId)
                .orElseThrow(() -> new RuntimeException("Test not found"));

        test.setScore(score);
        test.setTestStatus(score >= 40 ? TestStatus.PASSED : TestStatus.FAILED);

        return testRepo.save(test);
    }

    // ✅ NEW LOGIN METHOD
    // ✅ UPDATED LOGIN METHOD

    public boolean emailExists(String email){
    return candidateRepo.findByEmail(email).isPresent();
}public Candidate login(String email, String password) {

    Optional<Candidate> optional = candidateRepo.findByEmail(email);

    if (optional.isEmpty()) {
        throw new RuntimeException("Email not registered");
    }

    Candidate c = optional.get();

    if (!c.isEmailVerified()) {
        throw new RuntimeException("Please verify your email first");
    }

    if (c.getPassword() == null) {
        throw new RuntimeException("Password missing");
    }

    if (!c.getPassword().equals(password)) {
        throw new RuntimeException("Invalid password");
    }

    return c;
}
public void resendVerification(String email) {

    Candidate c = candidateRepo.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Email not found"));

    if (c.isEmailVerified()) {
        throw new RuntimeException("Email already verified");
    }

    String token = java.util.UUID.randomUUID().toString();

    c.setVerificationToken(token);
    c.setTokenExpiry(
        java.time.LocalDateTime.now().plusHours(24)
    );

    candidateRepo.save(c);

    String link =
        "http://localhost:4200/verify?token=" + token;

    emailService.sendEmail(
        c.getEmail(),
        "Verify Email",
        "Click to verify: " + link
    );

}
}