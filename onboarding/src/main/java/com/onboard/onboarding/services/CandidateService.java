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
    public Candidate login(String email, String password) {

        Optional<Candidate> candidate = candidateRepo.findByEmail(email);

        if(candidate.isEmpty()){
            throw new RuntimeException("Email not registered");
        }

        Candidate c = candidate.get();

        if(!c.getPassword().equals(password)){
            throw new RuntimeException("Invalid password");
        }

        return c;
    }
    public boolean emailExists(String email){
    return candidateRepo.findByEmail(email).isPresent();
}
}