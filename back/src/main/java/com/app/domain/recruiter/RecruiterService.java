package com.app.domain.recruiter;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecruiterService {
    private final RecruiterRepository recruiterRepository;
}
