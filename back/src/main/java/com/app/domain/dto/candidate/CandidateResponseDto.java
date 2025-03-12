package com.app.domain.dto.candidate;

import com.app.domain.model.Candidate;
import com.app.domain.model.Location;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

public record CandidateResponseDto(
        @Schema(description = "Candidate's ID", example = "1")
        Long userId,

        @Schema(description = "Full name of the candidate", example = "Jesús Leonardo López Almaraz")
        String name,

        @Schema(description = "Identity code (Passport, Driver licence, etc.)", example = "LOAJ090807HBTPLZA8")
        String identification,

        @Schema(description = "Candidate's phone number", example = "6122147891")
        String phoneNumber,

        @Schema(description = "Candidate's email", example = "leonardo@example.com")
        String email,

        @Schema(description = "Candidate's password", example = "$2a$12$O/zUumqjXvkgxt16q4imb.uioBDpNJjCBnDEcLHin/9RIAtBkcQVS")
        String password,

        @Schema(description = "Candidate's Position or short what-I-do description", example = "Java Developer")
        String position,

        @Schema(description = "Short description about the candidate's business (about me)",
        example = "Junior Java Developer with hands-on experience in Java, Spring Boot, and database management. " +
        "Passionate about learning, coding, and delivering solutions in collaborative environments.")
        String resume,

        @Schema(description = "Candidate's years or months of experience", example = ".1 year 6 months")
        String experienceLevel,

        @Schema(description = "Soft & Technical skills", example = "Java, Spring boot, MySQL, Git")
        String skills,

        @Schema(description = "Relevant schools or courses", example = "Bachelors Degree in Harvard University, " +
        "Back-End Development certification in Oracle Next Education")
        String education,

        @Schema(description = "Candidate's location or job preference", examples = {"REMOTE", "MADRID"})
        Location location,

        @Schema(description = "Candidate's travel preference", examples = {"true", "false"})
        Boolean availableToTravel,

        @Schema(description = "Candidate's creation date and time", example = "2025-03-05T01:24:48.119187")
        LocalDateTime createdAt,

        @Schema(description = "Candidate's update date and time", example = "2025-03-05T01:24:48.119256")
        LocalDateTime updatedAt
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
                candidate.getResume(),
                candidate.getExperienceLevel(),
                candidate.getSkills(),
                candidate.getEducation(),
                candidate.getLocation(),
                candidate.isAvailableToTravel(),
                candidate.getCreatedAt(),
                candidate.getUpdatedAt()
        );
    }
}
