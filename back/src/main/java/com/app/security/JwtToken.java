package com.app.security;

import io.swagger.v3.oas.annotations.media.Schema;

public record JwtToken(
        @Schema(description = "JWT Token generated from user credentials",
        example = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZW9uYXJkb0BleGFtcGxlLmNvbSIsImlzcyI6InNlZWthbmR3b3JrIiwiaWQiOjMsImV4cCI6MTc0MTc0NDU0M30.EKtQnJqz8H4htHHkvq8eskWGO0AOVRx_kGsas2xX9cU")
        String jwt
) {
}
