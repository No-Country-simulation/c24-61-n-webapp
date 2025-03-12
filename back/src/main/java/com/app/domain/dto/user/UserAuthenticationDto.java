package com.app.domain.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public record UserAuthenticationDto(
        @NotBlank(message = "Email is required")
        @Schema(description = "User Email", example = "leonardo@example.com")
        String email,

        @NotBlank(message = "Password is required")
        @Schema(description = "User password", example = "123")
        String password
) {
}
