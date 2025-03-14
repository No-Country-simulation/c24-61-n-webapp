package com.app.service.updater;

import com.app.domain.dto.recruiter.RecruiterUpdateDto;
import com.app.domain.model.Recruiter;

public class RecruiterUpdater {
    public static Recruiter updateRecruiter(Recruiter recruiter, RecruiterUpdateDto payload) {
        if (payload.name() != null) recruiter.setName(payload.name());
        if (payload.identification() != null) recruiter.setIdentification(payload.identification());
        if (payload.phoneNumber() != null) recruiter.setPhoneNumber(payload.phoneNumber());
        if (payload.email() != null) recruiter.setEmail(payload.email());
        if (payload.password() != null) recruiter.setPassword(payload.password());
        if (payload.position() != null) recruiter.setPosition(payload.position());
        if (payload.companyId() != null) recruiter.setCompanyId(payload.companyId());
        return recruiter;
    }
}
