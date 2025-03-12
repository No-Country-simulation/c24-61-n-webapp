package com.app.service;

import com.app.service.updater.CandidateUpdater;
import com.app.domain.dto.candidate.CandidateRegisterDto;
import com.app.domain.dto.candidate.CandidateUpdateDto;
import com.app.domain.model.Candidate;
import com.app.repository.CandidateRepository;
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
