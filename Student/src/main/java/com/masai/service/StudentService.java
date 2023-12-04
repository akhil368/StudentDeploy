package com.masai.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.masai.entity.Student;


public interface StudentService {

	public Student addStudent(Student st);
	public Student updateStudent (Student st) ;
	public List<Student> getAllStudent();
	public Student removeStudent(Integer id);
}
