package com.app.domain.dto.recruiter;

import com.app.domain.model.Candidate;
import com.app.domain.model.Recruiter;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

public record RecruiterListDto(
        @Schema(description = "Full name of the candidate", example = "Jesús Leonardo López Almaraz")
        String name,

        @Schema(description = "Candidate's phone number", example = "6122147891")
        String phoneNumber,

        @Schema(description = "Candidate's email", example = "leonardo@example.com")
        String email,

        @Schema(description = "Candidate's Position or short what-I-do description", example = "Java Developer")
        String position,

        @Schema(description = "The company to which the recruiter belongs", example = "Microsoft")
        Long companyId,

        @Schema(description = "Candidate's creation date and time", example = "2025-03-05T01:24:48.119187")
        LocalDateTime createdAt,

        @Schema(description = "Candidate's update date and time", example = "2025-03-05T01:24:48.119256")
        LocalDateTime updatedAt
) {
    public RecruiterListDto(Recruiter recruiter) {
        this(
                recruiter.getName(),
                recruiter.getPhoneNumber(),
                recruiter.getEmail(),
                recruiter.getPosition(),
                recruiter.getCompanyId(),
                recruiter.getCreatedAt(),
                recruiter.getUpdatedAt()
        );

    }
}