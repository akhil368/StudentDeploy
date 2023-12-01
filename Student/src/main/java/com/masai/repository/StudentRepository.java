package com.masai.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.masai.entity.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{

	

	
}
