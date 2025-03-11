package com.app.domain.candidate;

import com.app.domain.candidate.dto.CandidateRegisterDto;
import com.app.domain.candidate.dto.CandidateUpdateDto;
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

    public Candidate updateCandidate(Long id, CandidateUpdateDto payload) {
        var candidate = candidateRepository.findById(id).orElseThrow();
        return CandidateUpdater.updateCandidateFields(candidate, payload);
    }
}
