package com.app.controller;

import com.app.domain.candidate.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/candidates")
@RequiredArgsConstructor
public class CandidateController {
    private final CandidateService candidateService;

    @PostMapping
    public ResponseEntity<CandidateResponseDto> registerCandidate(@RequestBody @Valid CandidateRegisterDto payload,
                                                                  UriComponentsBuilder uri) {
        var candidate = candidateService.registerCandidate(payload);

        var candidateDto = new CandidateResponseDto(candidate);
        URI url = uri.path("/candidates/{id}").buildAndExpand(candidate.getUserId()).toUri();
        return ResponseEntity.created(url).body(candidateDto);
    }

    @GetMapping
    public ResponseEntity<List<CandidateListDto>> showCandidates() {
        List<CandidateListDto> candidatesDto = candidateService.getCandidates().stream()
                .map(CandidateListDto::new)
                .toList();
        return ResponseEntity.ok(candidatesDto);
    }
}
