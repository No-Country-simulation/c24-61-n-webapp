package com.app.entities;

import com.app.enums.EducationLevelEnum;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_candidates")
public class CandidateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "candidate_id")
    private Long candidateID;

    @Column(name = "full_name", columnDefinition = "VARCHAR(100)")
    private String fullName;

    @Column(columnDefinition = "INT(100)")
    private Integer identification;

    @Column(columnDefinition = "VARCHAR(100)")
    private String occupation;

    @Column(name = "phone_number", columnDefinition = "INT(20)")
    private String phoneNumber;

    @Column(columnDefinition = "VARCHAR(100)")
    private String email;

    @Column(columnDefinition = "VARCHAR(100)")
    private String location;

    @Column(columnDefinition = "VARCHAR(255)")
    private String about;

    @Column(name = "years_experience", columnDefinition = "VARCHAR(100)")
    private Integer yearsExperience;

    @Column(name = "education_level")
    @Enumerated(EnumType.STRING)
    private EducationLevelEnum educationLevel;

    @Column(name = "available_to_travel")
    private Boolean availableToTravel;

    //Constructors

    public CandidateEntity() {
    }

    public CandidateEntity(Long candidateID, String fullName, Integer identification, String occupation, String phoneNumber, String email, String location, String about, Integer yearsExperience, EducationLevelEnum educationLevel, Boolean availableToTravel) {
        this.candidateID = candidateID;
        this.fullName = fullName;
        this.identification = identification;
        this.occupation = occupation;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.location = location;
        this.about = about;
        this.yearsExperience = yearsExperience;
        this.educationLevel = educationLevel;
        this.availableToTravel = availableToTravel;
    }

    //Getters and Setters

    public Long getCandidateID() {
        return candidateID;
    }

    public void setCandidateID(Long candidateID) {
        this.candidateID = candidateID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Integer getIdentification() {
        return identification;
    }

    public void setIdentification(Integer identification) {
        this.identification = identification;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public Integer getYearsExperience() {
        return yearsExperience;
    }

    public void setYearsExperience(Integer yearsExperience) {
        this.yearsExperience = yearsExperience;
    }

    public EducationLevelEnum getEducationLevel() {
        return educationLevel;
    }

    public void setEducationLevel(EducationLevelEnum educationLevel) {
        this.educationLevel = educationLevel;
    }

    public Boolean getAvailableToTravel() {
        return availableToTravel;
    }

    public void setAvailableToTravel(Boolean availableToTravel) {
        this.availableToTravel = availableToTravel;
    }
}