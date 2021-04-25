package com.kushagra.reservation.controller;


import java.util.List;
import java.util.Optional;

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

import com.kushagra.reservation.model.MakeReservations;
import com.kushagra.reservation.repository.MakeReservationsRepository;

@RestController
@RequestMapping("/reservationapi")
@CrossOrigin
public class MakeReservationsController {

	@Autowired
	private MakeReservationsRepository repository;
	
	@PostMapping("/newReservation")
	public String addReservation(@RequestBody MakeReservations reserve)
	{
		repository.save(reserve);
		return "New Reservation Successfully Added";
	}
	
	@GetMapping("/findAllReservations")
	public List<MakeReservations> getReservations()
	{
		return repository.findAll();
	}
	@GetMapping("/findReservation/{code}")
	public Optional<MakeReservations> getReservation(@PathVariable long code)
	{
		return repository.findById(code);
	}
	@PutMapping("/updateReservation/{code}")
	public MakeReservations updateReservation(@RequestBody MakeReservations updatedReservation)
	{
		repository.save(updatedReservation);
		return updatedReservation;
	}
	@DeleteMapping("/deleteReservation/{code}")
	public String deleteReservation(@PathVariable long code)
	{
		repository.deleteById(code);
		return "Reservation Deleted with code: " + code;
	}
	
}
