package com.app.entities;

import com.app.enums.jobModelEnum;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_vacancies")
public class VacancyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vacancy_id")
    private Long vacancyId;

    @Column(columnDefinition = "VARCHAR(100)")
    private String tittle;

    @Column(columnDefinition = "VARCHAR(255)")
    private String description;

    @Column(columnDefinition = "VARCHAR(100)")
    private String location;

    @Column(name = "job_model")
    @Enumerated(EnumType.STRING)
    private jobModelEnum jobModel;

    @ManyToOne
    private RecruiterEntity recruiterRelation;

    //Constructors

    public VacancyEntity() {
    }

    public VacancyEntity(Long vacancyId, String tittle, String description, String location, jobModelEnum jobModel, RecruiterEntity recruiterRelation) {
        this.vacancyId = vacancyId;
        this.tittle = tittle;
        this.description = description;
        this.location = location;
        this.jobModel = jobModel;
        this.recruiterRelation = recruiterRelation;
    }

    //Getters and Setters

    public Long getVacancyId() {
        return vacancyId;
    }

    public void setVacancyId(Long vacancyId) {
        this.vacancyId = vacancyId;
    }

    public String getTittle() {
        return tittle;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public jobModelEnum getJobModel() {
        return jobModel;
    }

    public void setJobModel(jobModelEnum jobModel) {
        this.jobModel = jobModel;
    }

    public RecruiterEntity getRecruiterRelation() {
        return recruiterRelation;
    }

    public void setRecruiterRelation(RecruiterEntity recruiterRelation) {
        this.recruiterRelation = recruiterRelation;
    }
}