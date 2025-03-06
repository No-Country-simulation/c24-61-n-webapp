package com.app.domain.candidate;

import com.app.infra.enums.Location;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CandidateRegisterDto(
        @NotBlank
        String name,
        String identification,
        String phoneNumber,
        @NotBlank @Email
        String email,
        @NotBlank
        String password,
        String position,
        String resume,
        String experienceLevel,
        String skills,
        String education,
        Location location,
        Boolean availableToTravel
) {
}
