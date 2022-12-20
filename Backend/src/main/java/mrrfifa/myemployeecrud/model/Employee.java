package mrrfifa.myemployeecrud.model;

import jakarta.persistence.*;

@Entity
public class Employee {

    @Id
    @SequenceGenerator(
            name = "employee-sequence",
            sequenceName = "employee-sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "employee-sequence",
            strategy = GenerationType.SEQUENCE
    )
    private Long id;
    private String firstname;
    private String lastname;
    private String email;

    public Employee(Long id, String firstname, String lastname, String email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    public Employee() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
