package com.app.controller;

import com.app.domain.dto.recruiter.RecruiterListDto;
import com.app.domain.dto.recruiter.RecruiterRegisterDto;
import com.app.domain.dto.recruiter.RecruiterResponseDto;
import com.app.domain.dto.recruiter.RecruiterUpdateDto;
import com.app.service.RecruiterService;
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
@RequestMapping("/recruiters")
@Tag(name = "Recruiter", description = "Endpoints for Recruiters management")
@RequiredArgsConstructor
public class RecruiterController {
    private final RecruiterService recruiterService;

    @PostMapping
    @Operation(summary = "Register recruiter", description = "Register a recruiter in the database")
    @ApiResponse(
            responseCode = "201",
            description = "Recruiter registered successfully",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RecruiterResponseDto.class))
    )
    public ResponseEntity<RecruiterResponseDto> registerRecruiter(@RequestBody RecruiterRegisterDto payload,
                                                                  UriComponentsBuilder uri) {
        var recruiter = recruiterService.registerRecruiter(payload);
        var recruiterDto = new RecruiterResponseDto(recruiter);
        URI url = uri.path("/recruiters/{id}").buildAndExpand(recruiter.getUserId()).toUri();
        return ResponseEntity.created(url).body(recruiterDto);
    }

    @GetMapping
    @Operation(summary = "List recruiters", description = "Shows all the recruiters registered")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "200",
            description = "Successful retrieve list",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RecruiterListDto.class))
    )
    public ResponseEntity<List<RecruiterListDto>> showRecruiters() {
        List<RecruiterListDto> recruitersDto = recruiterService.getRecruiters().stream()
                .map(RecruiterListDto::new)
                .toList();
        return ResponseEntity.ok(recruitersDto);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get recruiter", description = "Shows all the details from a recruiter registered")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "200",
            description = "Successful retrieve recruiter",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RecruiterResponseDto.class))
    )
    public ResponseEntity<RecruiterResponseDto> showRecruiter(@PathVariable Long id) {
        var recruiter = recruiterService.getRecruiter(id);
        var recruiterDto = new RecruiterResponseDto(recruiter);
        return ResponseEntity.ok(recruiterDto);
    }

    @PatchMapping("/{id}")
    @Operation(summary = "Update recruiter's info", description = "Updates the recruiter's personal info in the database")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "200",
            description = "Recruiter's fields updated successfully",
            content = @Content(mediaType = "application/json",  schema = @Schema(implementation = RecruiterResponseDto.class))
    )
    @Transactional
    public ResponseEntity<RecruiterResponseDto> updateRecruiter(@PathVariable Long id,
                                                                @RequestBody @Valid RecruiterUpdateDto payload) {
        var recruiter = recruiterService.updateRecruiter(id, payload);
        var recruiterDto = new RecruiterResponseDto(recruiter);
        return ResponseEntity.ok(recruiterDto);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete recruiter", description = "Erases a recruiter registered in the database")
    @SecurityRequirement(name = "bearer-key")
    @ApiResponse(
            responseCode = "204",
            description = "Recruiter deleted successfully"
    )
    @Transactional
    public ResponseEntity<Void> deleteRecruiter(@PathVariable Long id) {
        recruiterService.deleteRecruiter(id);
        return ResponseEntity.noContent().build();
    }
}
