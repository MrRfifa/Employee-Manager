package mrrfifa.myemployeecrud.repository;

import mrrfifa.myemployeecrud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {


}
