package com.app.domain.model;

import com.app.domain.dto.candidate.CandidateRegisterDto;
import com.app.domain.model.application.Application;
import com.app.domain.model.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("CANDIDATE")
public class Candidate extends User {
    private String resume;
    private String experienceLevel;
    private String skills;
    private String education;
    private Location location;
    private boolean availableToTravel;

    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private List<Application> applications;

    public Candidate(CandidateRegisterDto payload) {
        setName(payload.name());
        setIdentification(payload.identification());
        setPhoneNumber(payload.phoneNumber());
        setEmail(payload.email());
        setPassword(payload.password());
        setPosition(payload.position());
        this.resume = payload.resume();
        this.experienceLevel = payload.experienceLevel();
        this.skills = payload.skills();
        this.education = payload.education();
        this.location = payload.location();
        this.availableToTravel = payload.availableToTravel();
    }
}
