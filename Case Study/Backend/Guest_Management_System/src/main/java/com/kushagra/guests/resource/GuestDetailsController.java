package com.kushagra.guests.resource;


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

import com.kushagra.guests.model.GuestDetails;
import com.kushagra.guests.repository.GuestDetailsRepository;

@RestController
@RequestMapping("/guestapi")
@CrossOrigin
public class GuestDetailsController {

	@Autowired
	private GuestDetailsRepository repository;
	
	@PostMapping("/newGuest")
	public String addGuest(@RequestBody GuestDetails guest)
	{
		repository.save(guest);
		return "New Guest Successfully Added";
	}
	
	@GetMapping("/findAllGuests")
	public List<GuestDetails> getGuests()
	{
		return repository.findAll();
	}
	@GetMapping("/findGuest/{memberCode}")
	public GuestDetails getGuest(@PathVariable long memberCode)
	{
		return repository.findById(memberCode).orElse(null);
	}
	@PutMapping("/updateGuest/{memberCode}")
	public GuestDetails updateGuest(@RequestBody GuestDetails updatedGuest)
	{
		repository.save(updatedGuest);
		return updatedGuest;
	}
	@DeleteMapping("/deleteGuest/{memberCode}")
	public String deleteGuest(@PathVariable long memberCode)
	{
		repository.deleteById(memberCode);
		return "Guest Deleted with Member code: " + memberCode;
	}
}
