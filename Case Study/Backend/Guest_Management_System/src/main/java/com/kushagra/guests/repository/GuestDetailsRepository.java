package com.kushagra.guests.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kushagra.guests.model.GuestDetails;

public interface GuestDetailsRepository extends  MongoRepository<GuestDetails, Long>{

}
