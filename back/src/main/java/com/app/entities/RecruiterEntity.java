package com.app.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_recruiters")
public class RecruiterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recruiter_id")
    private Long recruiterId;

    @Column(name = "full_name", columnDefinition = "VARCHAR(100)")
    private String fullName;

    @Column(columnDefinition = "VARCHAR(100)")
    private String identification;

    @Column(name = "phone_number", columnDefinition = "VARCHAR(20)")
    private String phoneNumber;

    @Column(columnDefinition = "VARCHAR(100)")
    private String email;

    @Column(columnDefinition = "VARCHAR(200)")
    private String company;

    //Constructors

    public RecruiterEntity() {
    }

    public RecruiterEntity(Long recruiterId, String fullName, String identification, String phoneNumber, String email, String company) {
        this.recruiterId = recruiterId;
        this.fullName = fullName;
        this.identification = identification;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.company = company;
    }

    //Getters and Setters

    public Long getRecruiterId() {
        return recruiterId;
    }

    public void setRecruiterId(Long recruiterId) {
        this.recruiterId = recruiterId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}