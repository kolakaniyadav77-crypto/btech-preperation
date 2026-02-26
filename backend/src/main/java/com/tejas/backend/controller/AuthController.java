package com.tejas.backend.controller;

import com.tejas.backend.model.User;
import com.tejas.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")   // context-path "/api" is added by application.properties, so final URL becomes /api/auth
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    static class SignupRequest {
        public String email;
        public String password;
        public String fullName;
    }

    static class LoginRequest {
        public String email;
        public String password;
    }

    static class UserResponse {
        public Long id;
        public String email;
        public String fullName;
        public Instant createdAt;
        public String photoURL;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest req) {
        if (req.email == null || req.password == null || req.fullName == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("Missing required fields"));
        }
        if (userRepository.findByEmail(req.email).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ErrorResponse("Email already registered"));
        }
        User user = new User();
        user.setEmail(req.email);
        user.setPassword(req.password);
        user.setFullName(req.fullName);
        user.setCreatedAt(Instant.now());
        userRepository.save(user);

        UserResponse resp = new UserResponse();
        resp.id = user.getId();
        resp.email = user.getEmail();
        resp.fullName = user.getFullName();
        resp.createdAt = user.getCreatedAt();
        resp.photoURL = user.getPhotoURL();

        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        if (req.email == null || req.password == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse("Email and password required"));
        }

        // perform lookup and build response explicitly to avoid generic inference issues
        var maybeUser = userRepository.findByEmail(req.email);
        if (maybeUser.isPresent() && maybeUser.get().getPassword().equals(req.password)) {
            User u = maybeUser.get();
            UserResponse resp = new UserResponse();
            resp.id = u.getId();
            resp.email = u.getEmail();
            resp.fullName = u.getFullName();
            resp.createdAt = u.getCreatedAt();
            resp.photoURL = u.getPhotoURL();
            return ResponseEntity.ok(resp);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new ErrorResponse("Invalid email or password"));
    }

    @GetMapping("/users")
    public List<UserResponse> listUsers() {
        return userRepository.findAll().stream().map(u -> {
            UserResponse r = new UserResponse();
            r.id = u.getId();
            r.email = u.getEmail();
            r.fullName = u.getFullName();
            r.createdAt = u.getCreatedAt();
            r.photoURL = u.getPhotoURL();
            return r;
        }).collect(Collectors.toList());
    }

    static class ErrorResponse {
        public String error;
        public ErrorResponse(String error) { this.error = error; }
    }
}
