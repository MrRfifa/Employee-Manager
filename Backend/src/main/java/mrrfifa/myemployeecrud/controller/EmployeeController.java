package mrrfifa.myemployeecrud.controller;


import mrrfifa.myemployeecrud.model.Employee;
import mrrfifa.myemployeecrud.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/employee")
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/add-employee")
    public Employee insertEmployee(@RequestBody Employee newEmployee){
        return employeeService.insertEmployee(newEmployee);
    }

    @GetMapping("/all-employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/get-employee/{employeeId}")
    public Employee getEmployeeById(@PathVariable Long employeeId){
        return employeeService.getEmployeeById(employeeId);
    }

    @PutMapping("/edit-employee/{employeeId}")
    public Employee editEmployee(@RequestBody Employee newEmployee, @PathVariable Long employeeId){
        return employeeService.editEmployee(newEmployee,employeeId);
    }

    @DeleteMapping("/delete-employee/{employeeId}")
    public String deleteEmployee(@PathVariable Long employeeId){
        return employeeService.deleteEmployee(employeeId);
    }

}
