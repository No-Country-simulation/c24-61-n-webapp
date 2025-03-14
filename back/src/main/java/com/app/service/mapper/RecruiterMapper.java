package com.app.service.mapper;

import com.app.domain.dto.recruiter.RecruiterRegisterDto;
import com.app.domain.model.Recruiter;

public class RecruiterMapper {
    public static Recruiter toEntity(RecruiterRegisterDto payload) {
        var newRecruiter = new Recruiter();
        newRecruiter.setName(payload.name());
        newRecruiter.setIdentification(payload.identification());
        newRecruiter.setPhoneNumber(payload.phoneNumber());
        newRecruiter.setEmail(payload.email());
        newRecruiter.setPassword(payload.password());
        newRecruiter.setPosition(payload.position());
        newRecruiter.setCompanyId(payload.companyId());
        return newRecruiter;
    }
}
