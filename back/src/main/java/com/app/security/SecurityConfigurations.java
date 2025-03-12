package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Autowired
    private SecurityFilter securityFilter;

//    @Bean
//    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("https://kzmk6so15813h5xcbdjk.lite.vusercontent.net:4200",
//                "http://localhost:4200"));
//        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.cors(Customizer.withDefaults()).csrf(csrf -> csrf.disable())
                .sessionManagement(sm ->
                        sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(req -> {
                    req.requestMatchers(HttpMethod.POST, "/login", "/candidates").permitAll();
                    req.requestMatchers("/v3/api-docs/**", "/swagger-ui/**",
                            "/swagger-ui.html", "/auth/login").permitAll();
                    req.anyRequest().authenticated();
                })
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Para diferentes perfiles de acceso para los usuarios
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        return http.csrf().disable()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and().authorizeRequests()
//                .antMatchers(HttpMethod.POST, "/login").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/medicos").hasRole("ADMIN")
//                .antMatchers(HttpMethod.DELETE, "/pacientes").hasRole("ADMIN")
//                .anyRequest().authenticated()
//                .and().addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
//                .build();
//    }

    // Lo mismo anterior, sólo para Controllers
//    @GetMapping("/{id}")
//    @Secured("ROLE_ADMIN")
//    public ResponseEntity detallar(@PathVariable Long id) {
//        var medico = repository.getReferenceById(id);
//        return ResponseEntity.ok(new DatosDetalladoMedico(medico));
//    }
    //Se agrega esto: @EnableMethodSecurity(securedEnabled = true) en SecurityConfigurations
}
