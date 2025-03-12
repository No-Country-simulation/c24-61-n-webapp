package com.app.controller;

import com.app.domain.model.user.User;
import com.app.domain.dto.user.UserAuthenticationDto;
import com.app.security.JwtToken;
import com.app.security.TokenService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
@Tag(name = "Authentication", description = "Endpoints for authentication purposes")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    @Operation(summary = "User login", description = "Authenticates user credentials, and returns a JWT")
    @ApiResponse(
            responseCode = "200",
            description = "Successful authentication",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = JwtToken.class))
    )
    public ResponseEntity<JwtToken> authenticateUser(@RequestBody @Valid UserAuthenticationDto userAuthenticationDto) {
        Authentication token = new UsernamePasswordAuthenticationToken(
                userAuthenticationDto.email(), userAuthenticationDto.password());

        var authenticatedToken = authenticationManager.authenticate(token);
        var jwt = tokenService.createToken((User) authenticatedToken.getPrincipal());

        return ResponseEntity.ok(new JwtToken(jwt));
    }
}
