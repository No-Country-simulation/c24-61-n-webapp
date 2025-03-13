package com.app.service.mapper;

import com.app.domain.dto.candidate.CandidateRegisterDto;
import com.app.domain.model.Candidate;

public class CandidateMapper {
    public static Candidate toEntity(CandidateRegisterDto payload) {
        var newCandidate = new Candidate();
        newCandidate.setName(payload.name());
        newCandidate.setIdentification(payload.identification());
        newCandidate.setPhoneNumber(payload.phoneNumber());
        newCandidate.setEmail(payload.email());
        newCandidate.setPassword(payload.password());
        newCandidate.setPosition(payload.position());
        newCandidate.setResume(payload.resume());
        newCandidate.setExperienceLevel(payload.experienceLevel());
        newCandidate.setSkills(payload.skills());
        newCandidate.setEducation(payload.education());
        newCandidate.setLocation(payload.location());
        newCandidate.setAvailableToTravel(payload.availableToTravel());
        return newCandidate;
    }
}
