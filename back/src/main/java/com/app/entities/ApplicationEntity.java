package com.app.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_applications")
public class ApplicationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId;

    @ManyToOne
    private CandidateEntity candidate_id;

    @ManyToOne
    private VacancyEntity vacancy_id;

    //Constructors

    public ApplicationEntity() {
    }

    public ApplicationEntity(Long applicationId, CandidateEntity candidate_id, VacancyEntity vacancy_id) {
        this.applicationId = applicationId;
        this.candidate_id = candidate_id;
        this.vacancy_id = vacancy_id;
    }

    //Getters and Setters

    public Long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(Long applicationId) {
        this.applicationId = applicationId;
    }

    public CandidateEntity getCandidate_id() {
        return candidate_id;
    }

    public void setCandidate_id(CandidateEntity candidate_id) {
        this.candidate_id = candidate_id;
    }

    public VacancyEntity getVacancy_id() {
        return vacancy_id;
    }

    public void setVacancy_id(VacancyEntity vacancy_id) {
        this.vacancy_id = vacancy_id;
    }
}