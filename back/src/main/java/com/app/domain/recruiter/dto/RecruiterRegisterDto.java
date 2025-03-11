package com.app.domain.recruiter.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RecruiterRegisterDto(
        @NotBlank
        String name,
        String identification,
        String phoneNumber,
        @NotBlank @Email
        String email,
        @NotBlank
        String password,
        String position,
        Long companyId
) {
}
