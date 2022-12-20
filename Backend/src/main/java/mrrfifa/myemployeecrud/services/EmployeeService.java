package mrrfifa.myemployeecrud.services;

import mrrfifa.myemployeecrud.exception.UserNotFoundException;
import mrrfifa.myemployeecrud.model.Employee;
import mrrfifa.myemployeecrud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public Employee insertEmployee(Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId).orElseThrow(()->new UserNotFoundException(employeeId));
    }

    public Employee editEmployee(Employee newEmployee, Long employeeId) {
        return employeeRepository.findById(employeeId)
                .map(employee -> {
                    employee.setFirstname(newEmployee.getFirstname());
                    employee.setLastname(newEmployee.getLastname());
                    employee.setEmail(newEmployee.getEmail());
                    return employeeRepository.save(employee);
                }).orElseThrow(()->new UserNotFoundException(employeeId));
    }

    public String deleteEmployee(Long employeeId) {
        if (!employeeRepository.existsById(employeeId))
        {
            throw new UserNotFoundException(employeeId);
        }
        employeeRepository.deleteById(employeeId);
        return ("Employee with id : "+employeeId+" has been deleted");
    }
}
