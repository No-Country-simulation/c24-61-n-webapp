package com.app.infra.springdoc;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfiguration {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components()
                        .addSecuritySchemes("bearer-key",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")))
                .info(new Info()
                        .title("Seek & Work API")
                        .description("API RESTful de la aplicación Seek & Work, que contiene las funcionalidades" +
                                " CRUD de candidatos, reclutadores, vacantes y compañías, además de postulaciones" +
                                " y gestión de usuarios como administrador")
                        .contact(new Contact()
                                .name("Equipo Backend")
                                .email("backend@seekandwork.com"))
                        .license(new License()
                                .name("Licencia MIT")
                                .url("https://kzmin9wef22oc54ypdu9.lite.vusercontent.net/licencia")));
    }
}
