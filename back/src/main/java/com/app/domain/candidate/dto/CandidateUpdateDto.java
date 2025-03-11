package com.app.domain.candidate.dto;

import com.app.infra.enums.Location;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CandidateUpdateDto(
        @NotBlank(message = "Name is required")
        @Schema(description = "Full name of the candidate", example = "Jesús Leonardo López Almaraz")
        String name,

        @Schema(description = "Identity code (Passport, Driver licence, etc.)", example = "LOAJ090807HBTPLZA8")
        String identification,

        @Schema(description = "Candidate's phone number", example = "6122147891")
        String phoneNumber,

        @NotBlank(message = "Email is required")
        @Email
        @Schema(description = "Candidate's email", example = "leonardo@example.com")
        String email,

        @NotBlank(message = "Password is required")
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

        @NotNull(message = "Location is required")
        @Schema(description = "Candidate's location or job preference", examples = {"REMOTE", "MADRID"})
        Location location,

        @NotNull(message = "Available to travel preference is required")
        @Schema(description = "Candidate's travel preference", examples = {"true", "false"})
        Boolean availableToTravel
) {
}
