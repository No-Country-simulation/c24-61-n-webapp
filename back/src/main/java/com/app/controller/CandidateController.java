package com.app.controller;

import com.app.domain.dto.candidate.CandidateListDto;
import com.app.domain.dto.candidate.CandidateRegisterDto;
import com.app.domain.dto.candidate.CandidateResponseDto;
import com.app.domain.dto.candidate.CandidateUpdateDto;
import com.app.service.CandidateService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/candidates")
@Tag(name = "Candidate", description = "Endpoints for Candidates management")
@RequiredArgsConstructor
public class CandidateController {
    private final CandidateService candidateService;

    @PostMapping
    @Operation(summary = "Register candidate", description = "Register a candidate in the database")
    @ApiResponse(
            responseCode = "201",
            description = "Candidate registered successfully",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CandidateResponseDto.class))
    )
    public ResponseEntity<CandidateResponseDto> registerCandidate(@RequestBody @Valid CandidateRegisterDto payload,
                                                                  UriComponentsBuilder uri) {
        var candidate = candidateService.registerCandidate(payload);

        var candidateDto = new CandidateResponseDto(candidate);
        URI url = uri.path("/candidates/{id}").buildAndExpand(candidate.getUserId()).toUri();
        return ResponseEntity.created(url).body(candidateDto);
    }

    @GetMapping
    @Operation(summary = "List candidates", description = "Shows all the candidates registered")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "200",
            description = "Successful retrieve list",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CandidateListDto.class))
    )
    public ResponseEntity<List<CandidateListDto>> showCandidates() {
        List<CandidateListDto> candidatesDto = candidateService.getCandidates().stream()
                .map(CandidateListDto::new)
                .toList();
        return ResponseEntity.ok(candidatesDto);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get candidate", description = "Shows all the details from a candidate registered")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "200",
            description = "Successful retrieve candidate",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CandidateResponseDto.class))
    )
    public ResponseEntity<CandidateResponseDto> showCandidate(@PathVariable Long id) {
        var candidate = candidateService.getCandidate(id);
        var candidateDto = new CandidateResponseDto(candidate);
        return ResponseEntity.ok(candidateDto);
    }

    @PatchMapping("/{id}")
    @Operation(summary = "Update candidate's info", description = "Updates the candidate's personal info in the database")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "200",
            description = "Candidate's fields updated successfully",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CandidateResponseDto.class))
    )
    @Transactional
    public ResponseEntity<CandidateResponseDto> updateCandidate(@PathVariable Long id,
                                                                @RequestBody @Valid CandidateUpdateDto payload) {
        var candidate = candidateService.updateCandidate(id, payload);
        var candidateDto = new CandidateResponseDto(candidate);
        return ResponseEntity.ok(candidateDto);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete candidate", description = "Erases a candidate registered in the database")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "204",
            description = "Candidate deleted successfully"
    )
    @Transactional
    public ResponseEntity<Void> deleteCandidate(@PathVariable Long id) {
        candidateService.deleteCandidate(id);
        return ResponseEntity.noContent().build();
    }
}
