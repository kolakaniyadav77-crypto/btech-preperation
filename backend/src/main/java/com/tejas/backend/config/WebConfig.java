package com.tejas.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // because the application sets `server.servlet.context-path=/api` in application.properties,
        // incoming requests are re-mapped before reaching controllers. using "**" here ensures
        // that all API routes (including /auth and /compile) are covered regardless of context path.
        registry.addMapping("/**")
                .allowedOrigins(
                    "http://localhost:5180",
                    "http://localhost:5173",
                    "http://localhost:3000",
                    "http://127.0.0.1:5180",
                    "http://127.0.0.1:5173",
                    "http://127.0.0.1:3000"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
