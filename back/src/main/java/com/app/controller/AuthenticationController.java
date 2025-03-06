package com.app.controller;

import com.app.domain.user.User;
import com.app.domain.user.UserAuthentication;
import com.app.infra.security.JwtToken;
import com.app.infra.security.TokenService;
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
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity authenticateUser(@RequestBody @Valid UserAuthentication userAuthentication) {

        Authentication token = new UsernamePasswordAuthenticationToken(
                userAuthentication.email(), userAuthentication.password());

        var authenticatedToken = authenticationManager.authenticate(token);
        var jwt = tokenService.createToken((User) authenticatedToken.getPrincipal());

        return ResponseEntity.ok(new JwtToken(jwt));
    }

}
