package com.app.domain.dto.recruiter;

import com.app.domain.model.Recruiter;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

public record RecruiterResponseDto(
        @Schema(description = "Full name of the recruiter", example = "Brian Gamarra")
        String name,

        @Schema(description = "Identity code (Passport, Driver licence, etc.)", example = "LOAJ090807HBTPLZA8")
        String identification,

        @Schema(description = "Recruiter's phone number", example = "6122147891")
        String phoneNumber,

        @Schema(description = "Recruiter's email", example = "brian@example.com")
        String email,

        @Schema(description = "Recruiter's password", example = "$2a$12$O/zUumqjXvkgxt16q4imb.uioBDpNJjCBnDEcLHin/9RIAtBkcQVS")
        String password,

        @Schema(description = "Recruiter's Position or short what-I-do description", example = "Human resource management")
        String position,

        @Schema(description = "The company to which the recruiter belongs", example = "Microsoft")
        Long companyId,

        @Schema(description = "Recruiter's creation date and time", example = "2025-03-05T01:24:48.119187")
        LocalDateTime createdAt,

        @Schema(description = "Recruiter's update date and time", example = "2025-03-05T01:24:48.119256")
        LocalDateTime updatedAt
) {
    public RecruiterResponseDto(Recruiter recruiter) {
        this(
                recruiter.getName(),
                recruiter.getIdentification(),
                recruiter.getPhoneNumber(),
                recruiter.getEmail(),
                recruiter.getPassword(),
                recruiter.getPosition(),
                recruiter.getCompanyId(),
                recruiter.getCreatedAt(),
                recruiter.getUpdatedAt()
        );
    }
}
