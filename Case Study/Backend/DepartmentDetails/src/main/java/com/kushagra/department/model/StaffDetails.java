package com.kushagra.department.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="StaffDetails")
public class StaffDetails {
	@Id
	private long code;
	private String employeeName;
	private String employeeAddress;
	private String NIC;
	private long salary;
	private int age;
	private String occupation;
	private String email;
	
	public StaffDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StaffDetails(long code, String employeeName, String employeeAddress, String nIC, long salary, int age,
			String occupation, String email) {
		super();
		this.code = code;
		this.employeeName = employeeName;
		this.employeeAddress = employeeAddress;
		NIC = nIC;
		this.salary = salary;
		this.age = age;
		this.occupation = occupation;
		this.email = email;
	}
	public long getCode() {
		return code;
	}
	public void setCode(long code) {
		this.code = code;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmployeeAddress() {
		return employeeAddress;
	}
	public void setEmployeeAddress(String employeeAddress) {
		this.employeeAddress = employeeAddress;
	}
	public String getNIC() {
		return NIC;
	}
	public void setNIC(String nIC) {
		NIC = nIC;
	}
	public long getSalary() {
		return salary;
	}
	public void setSalary(long salary) {
		this.salary = salary;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "StaffDetails [code=" + code + ", employeeName=" + employeeName + ", employeeAddress=" + employeeAddress
				+ ", NIC=" + NIC + ", salary=" + salary + ", age=" + age + ", occupation=" + occupation + ", email="
				+ email + "]";
	}
	
	
}
