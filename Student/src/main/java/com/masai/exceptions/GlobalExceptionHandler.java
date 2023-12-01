package com.masai.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<MyErrorDetails> notFound(WebRequest we,NotFoundException ex)
	{
		MyErrorDetails er=new MyErrorDetails(ex.getMessage(),LocalDateTime.now(),we.getDescription(false));
		return new ResponseEntity<MyErrorDetails>(er,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(StudentException.class)
	public ResponseEntity<MyErrorDetails> studentException(WebRequest we,StudentException ex)
	{
		MyErrorDetails er=new MyErrorDetails(ex.getMessage(),LocalDateTime.now(),we.getDescription(false));
		return new ResponseEntity<MyErrorDetails>(er,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(Exception.class)
	public ResponseEntity<MyErrorDetails> globalException(WebRequest we,Exception ex)
	{
		MyErrorDetails er=new MyErrorDetails(ex.getMessage(),LocalDateTime.now(),we.getDescription(false));
		return new ResponseEntity<MyErrorDetails>(er,HttpStatus.BAD_REQUEST);
	}
	
	
}
