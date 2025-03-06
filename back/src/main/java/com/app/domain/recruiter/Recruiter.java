package com.app.domain.recruiter;

import com.app.domain.company.Company;
import com.app.domain.job.Job;
import com.app.domain.user.User;
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
@DiscriminatorValue("RECRUITER")
public class Recruiter extends User {
    private long companyId;

    @OneToMany(mappedBy = "recruiter", cascade = CascadeType.ALL)
    private List<Job> jobs;

    @ManyToOne
    private Company company;
}
