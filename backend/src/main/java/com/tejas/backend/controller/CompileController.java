package com.tejas.backend.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.Map;

@RestController
// CORS mapping for /api/** is configured globally in WebConfig; controller uses relative paths below
public class CompileController {

    private final WebClient webClient = WebClient.create("https://emkc.org/api/v2");

    record CompileRequest(String code, String language, String input) {}
    record CompileResponse(boolean success, String output, String error, Object executionTime) {}

    @PostMapping(path = "/compile", consumes = MediaType.APPLICATION_JSON_VALUE)  // actual endpoint = /api/compile thanks to context-path
    public Mono<ResponseEntity<CompileResponse>> compile(@RequestBody CompileRequest req) {
        String code = req.code() == null ? "" : req.code();
        String language = req.language() == null ? "python3" : req.language();
        String input = req.input() == null ? "" : req.input();

        return webClient.post()
                .uri("/piston/execute")
                .bodyValue(Map.of(
                        "language", language,
                        "version", "*",
                        "files", new Object[]{Map.of("name", "main", "content", code)},
                        "stdin", input
                ))
                .retrieve()
                .bodyToMono(Map.class)
                .timeout(Duration.ofSeconds(20))
                .map(data -> {
                    Map run = (Map) data.get("run");
                    if (run != null) {
                        return ResponseEntity.ok(new CompileResponse(
                                true,
                                run.getOrDefault("stdout", "").toString(),
                                run.getOrDefault("stderr", "").toString(),
                                run.get("time")
                        ));
                    }
                    Map compile = (Map) data.get("compile");
                    if (compile != null) {
                        return ResponseEntity.ok(new CompileResponse(
                                false, "", compile.getOrDefault("stderr", "").toString(), null
                        ));
                    }
                    return ResponseEntity.status(500)
                            .body(new CompileResponse(false, "", "Unexpected response from compiler backend", null));
                })
                .onErrorResume(err -> Mono.just(ResponseEntity.status(500)
                        .body(new CompileResponse(false, "", err.getMessage(), null))));
    }
}
