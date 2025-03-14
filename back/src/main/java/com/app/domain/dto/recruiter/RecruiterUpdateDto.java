package com.app.domain.dto.recruiter;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RecruiterUpdateDto(
        @NotBlank(message = "Name is required")
        @Schema(description = "Full name of the recruiter", example = "Brian Gamarra")
        String name,

        @Schema(description = "Identity code (Passport, Driver licence, etc.)", example = "LOAJ090807HBTPLZA8")
        String identification,

        @Schema(description = "Recruiter's phone number", example = "6122147891")
        String phoneNumber,

        @NotBlank(message = "Email is required")
        @Email
        @Schema(description = "Recruiter's email", example = "brian@example.com")
        String email,

        @NotBlank(message = "Password is required")
        @Schema(description = "Recruiter's password", example = "$2a$12$O/zUumqjXvkgxt16q4imb.uioBDpNJjCBnDEcLHin/9RIAtBkcQVS")
        String password,

        @Schema(description = "Recruiter's Position or short what-I-do description", example = "Human resource management")
        String position,

        @Schema(description = "The company to which the recruiter belongs", example = "Microsoft")
        Long companyId
) {

}
