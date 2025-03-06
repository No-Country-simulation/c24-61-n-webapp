package com.app.domain.recruiter;

import com.app.infra.enums.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RecruiterRegister(
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
