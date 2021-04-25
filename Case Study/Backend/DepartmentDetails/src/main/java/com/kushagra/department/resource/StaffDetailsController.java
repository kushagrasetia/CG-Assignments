package com.kushagra.department.resource;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kushagra.department.model.StaffDetails;
import com.kushagra.department.repository.StaffDetailsRepository;

@RestController
@RequestMapping("/staffapi")
@CrossOrigin
public class StaffDetailsController {

	@Autowired
	private StaffDetailsRepository repository;
	
	@GetMapping("/findAllStaffMembers")
	public List<StaffDetails> getStaffMembers()
	{
		return repository.findAll();
	}
	
	@GetMapping("/findStaffMember/{code}")
	public StaffDetails getStaffMember(@PathVariable long code)
	{
		return repository.findById(code).orElse(null);
	}
	@PostMapping("/newStaffMember")
	public String addStaffMember(@RequestBody StaffDetails staff)
	{
		repository.save(staff);
		return "New Staff Member Successfully Added";
	}
	@PutMapping("/updateStaffMember/{code}")
	public StaffDetails updateStaffMember(@RequestBody StaffDetails updatedStaff)
	{
		/*AddStaffMember oldStaff=repository.findById(updatedStaff.getCode()).orElse(null);
		oldStaff.setEmployeeName(updatedStaff.getEmployeeName());
		oldStaff.setEmployeeAddress(updatedStaff.getEmployeeAddress());
		oldStaff.setNIC(updatedStaff.getNIC());
		oldStaff.setSalary(updatedStaff.getSalary());
		oldStaff.setAge(updatedStaff.getAge());
		oldStaff.setOccupation(updatedStaff.getOccupation());
		oldStaff.setEmail(updatedStaff.getEmail());*/
		repository.save(updatedStaff);
		return updatedStaff;
	}
	@DeleteMapping("/deleteStaffMember/{code}")
	public String deleteStaffMember(@PathVariable long code)
	{
		repository.deleteById(code);
		return "Reservation Deleted with code: " + code;
	}
	
}

