package com.example.demo.constructionmaterialsmanagement.repository;


import com.example.demo.constructionmaterialsmanagement.models.ERole;
import com.example.demo.constructionmaterialsmanagement.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    Optional<Role> findByName(ERole name);
}