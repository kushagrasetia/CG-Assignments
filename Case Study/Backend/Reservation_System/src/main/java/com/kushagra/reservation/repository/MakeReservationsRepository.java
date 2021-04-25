package com.kushagra.reservation.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kushagra.reservation.model.MakeReservations;

public interface MakeReservationsRepository extends MongoRepository<MakeReservations, Long>{

}
