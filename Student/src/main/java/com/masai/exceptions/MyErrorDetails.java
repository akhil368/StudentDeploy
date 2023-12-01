package com.masai.exceptions;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class MyErrorDetails {

	private String message;
	private LocalDateTime time;
	private String description;
	public MyErrorDetails(String message, LocalDateTime time, String description) {
		super();
		this.message = message;
		this.time = time;
		this.description = description;
	}
	public MyErrorDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "MyErrorDetails [message=" + message + ", time=" + time + ", description=" + description + "]";
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public LocalDateTime getTime() {
		return time;
	}
	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
