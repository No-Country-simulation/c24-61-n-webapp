package com.app.infra.security;

import com.app.domain.user.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${api.security.secret}")
    private String apiSecret;

    public String createToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            return JWT.create()
                    .withIssuer("seekandwork")
                    .withSubject(user.getEmail())
                    .withClaim("id", user.getUserId())
                    .withExpiresAt(createExpirationDate())
                    .sign(algorithm);

        } catch (JWTCreationException exception){
            throw new RuntimeException(exception);
        }
    }


    public String getSubject(String jwt) {
        try {
            var algorithm = Algorithm.HMAC256(apiSecret);
            var verifiedJwt = JWT.require(algorithm)
                    .withIssuer("seekandwork")
                    .build()
                    .verify(jwt);

            if (!verifiedJwt.getSubject().isBlank()) {
                return verifiedJwt.getSubject();
            } else {
                throw new RuntimeException();
            }

        } catch (JWTVerificationException exception){
            throw new RuntimeException(exception);
        }
    }


    private Instant createExpirationDate() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-07:00"));
    }

}
