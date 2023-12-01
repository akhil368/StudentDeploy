package com.masai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.masai.entity.Student;
import com.masai.exceptions.NotFoundException;
import com.masai.repository.StudentRepository;

public class StudentServiceImpl implements StudentService {

	
	private StudentRepository studentRepo;
	
	@Autowired
	public StudentServiceImpl(StudentRepository studentRepo) {
		super();
		this.studentRepo = studentRepo;
	}

	@Override
	public Student addStudent(Student st) {
		return studentRepo.save(st);
		
	}

	@Override
	public Student updateStudent(Student st) {
		Integer id=st.getId();
		Optional<Student> student= studentRepo.findById(id);
		if(!student.isPresent())
		{
			throw new NotFoundException("No Student Found");
		}
		
		return studentRepo.save(st);
	}

	@Override
	public List<Student> getAllStudent() {
		
		return studentRepo.findAll();
	}

	@Override
	public Student removeStudent(Integer id) {
		
		Student student= studentRepo.findById(id).get();
	
		studentRepo.deleteById(id);
		return student;
	}

}
