package com.app.domain.candidate;

import com.app.infra.enums.Location;

import java.time.LocalDateTime;

public record CandidateResponseDto(
        Long userId,
        String name,
        String identification,
        String phoneNumber,
        String email,
        String password,
        String position,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,

        // Candidate fields
        String resume,
        String experienceLevel,
        String skills,
        String education,
        Location location,
        Boolean availableToTravel
) {
    public CandidateResponseDto(Candidate candidate) {
        this(
                candidate.getUserId(),
                candidate.getName(),
                candidate.getIdentification(),
                candidate.getPhoneNumber(),
                candidate.getEmail(),
                candidate.getPassword(),
                candidate.getPosition(),
                candidate.getCreatedAt(),
                candidate.getUpdatedAt(),
                candidate.getResume(),
                candidate.getExperienceLevel(),
                candidate.getSkills(),
                candidate.getEducation(),
                candidate.getLocation(),
                candidate.isAvailableToTravel()
        );
    }
}
