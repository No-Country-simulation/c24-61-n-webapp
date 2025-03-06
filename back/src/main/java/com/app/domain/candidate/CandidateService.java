package com.app.domain.candidate;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CandidateService {
    private final CandidateRepository candidateRepository;

    public Candidate registerCandidate(CandidateRegisterDto payload) {
        var newCandidate = new Candidate(payload);
        return candidateRepository.save(newCandidate);
    }

    public List<Candidate> getCandidates() {
        return candidateRepository.findAll();
    }
}
