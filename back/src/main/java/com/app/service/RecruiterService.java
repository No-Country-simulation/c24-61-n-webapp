package com.app.service;

import com.app.service.updater.RecruiterUpdater;
import com.app.domain.dto.recruiter.RecruiterUpdateDto;
import com.app.service.mapper.RecruiterMapper;
import com.app.domain.dto.recruiter.RecruiterRegisterDto;
import com.app.domain.model.Recruiter;
import com.app.repository.RecruiterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecruiterService {
    private final RecruiterRepository recruiterRepository;

    public Recruiter registerRecruiter(RecruiterRegisterDto payload) {
        var newRecruiter = RecruiterMapper.toEntity(payload);
        return recruiterRepository.save(newRecruiter);
    }

    public List<Recruiter> getRecruiters() {
        return recruiterRepository.findAll();
    }

    public Recruiter getRecruiter(Long id) {
        return recruiterRepository.findById(id).orElseThrow();
    }

    public Recruiter updateRecruiter(Long id, RecruiterUpdateDto payload) {
        var recruiter = recruiterRepository.findById(id).orElseThrow();
        return RecruiterUpdater.updateRecruiter(recruiter, payload);
    }

    public void deleteRecruiter(Long id) {
        var recruiter = recruiterRepository.findById(id).orElseThrow();
        recruiterRepository.delete(recruiter);
    }
}
