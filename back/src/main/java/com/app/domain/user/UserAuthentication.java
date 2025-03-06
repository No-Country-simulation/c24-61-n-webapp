package com.app.domain.user;

import jakarta.validation.constraints.NotBlank;

public record UserAuthentication(
        @NotBlank String email,
        @NotBlank String password
) {
}
