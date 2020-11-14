package com.example.demo.constructionmaterialsmanagement.repository;

import com.example.demo.constructionmaterialsmanagement.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByEmployeeId(Long employeeId);
}
