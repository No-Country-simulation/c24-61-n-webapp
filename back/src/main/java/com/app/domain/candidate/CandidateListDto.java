package com.app.domain.candidate;

import com.app.infra.enums.Location;

public record CandidateListDto(
    String name,
    String phoneNumber,
    String email,
    String position,
    String resume,
    String experienceLevel,
    String skills,
    String education,
    Location location,
    Boolean availableToTravel
) {
    public CandidateListDto(Candidate candidate) {
        this(
                candidate.getName(),
                candidate.getPhoneNumber(),
                candidate.getEmail(),
                candidate.getPosition(),
                candidate.getResume(),
                candidate.getExperienceLevel(),
                candidate.getSkills(),
                candidate.getEducation(),
                candidate.getLocation(),
                candidate.isAvailableToTravel()
        );
    }
}
