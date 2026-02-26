package com.tejas.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    // create demo user on startup if none exist
    @Bean
    public CommandLineRunner dataLoader(com.tejas.backend.repository.UserRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                com.tejas.backend.model.User demo = new com.tejas.backend.model.User();
                demo.setEmail("demo@example.com");
                demo.setPassword("Demo@123!");
                demo.setFullName("Demo User");
                repo.save(demo);
                System.out.println("✓ Demo user created (demo@example.com / Demo@123!)");
            }
        };
    }
}
