package com.app.service.updater;

import com.app.domain.dto.candidate.CandidateUpdateDto;
import com.app.domain.model.Candidate;
import org.springframework.stereotype.Component;

@Component
public class CandidateUpdater {
    public static Candidate updateCandidateFields(Candidate candidate, CandidateUpdateDto payload) {
        if (payload.name() != null) candidate.setName(payload.name());
        if (payload.identification() != null) candidate.setIdentification(payload.identification());
        if (payload.phoneNumber() != null) candidate.setPhoneNumber(payload.phoneNumber());
        if (payload.email() != null) candidate.setEmail(payload.email());
        if (payload.password() != null) candidate.setPassword(payload.password());
        if (payload.position() != null) candidate.setPosition(payload.position());
        if (payload.resume() != null) candidate.setResume(payload.resume());
        if (payload.experienceLevel() != null) candidate.setExperienceLevel(payload.experienceLevel());
        if (payload.skills() != null) candidate.setSkills(payload.skills());
        if (payload.education() != null) candidate.setEducation(payload.education());
        if (payload.location() != null) candidate.setLocation(payload.location());
        if (payload.availableToTravel() != null) candidate.setAvailableToTravel(payload.availableToTravel());
        return candidate;
    }
}
