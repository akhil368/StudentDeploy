package com.masai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.masai.entity.Student;
import com.masai.service.StudentService;

@Controller
@CrossOrigin(origins="*") // will allows any domain
public class StudentController {

	@Autowired
	private StudentService service;

	
	
	@CrossOrigin(origins="*")
	@GetMapping("/students")
	public ResponseEntity<List<Student>> getAllStudents()
	{
		return new ResponseEntity<List<Student>>( service.getAllStudent(),HttpStatus.OK);
	}
	@CrossOrigin(origins="*")
	@PostMapping("/students")
	public ResponseEntity<Student> addStudent(@RequestBody Student st)
	{
		return new ResponseEntity<Student>(service.addStudent(st),HttpStatus.CREATED);
	}
	@CrossOrigin(origins="*")
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Student> deleteStudent(@PathVariable Integer id)
	{
		return new ResponseEntity<Student>(service.removeStudent(id),HttpStatus.OK);
	}
	@CrossOrigin(origins="*")
	@PutMapping("/students")
	public ResponseEntity<Student> update(@RequestBody Student st)
	{
		return new ResponseEntity<Student>(service.updateStudent(st),HttpStatus.CREATED);
	}
	
}
