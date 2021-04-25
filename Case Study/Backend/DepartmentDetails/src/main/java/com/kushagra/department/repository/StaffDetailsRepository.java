package com.kushagra.department.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kushagra.department.model.StaffDetails;

public interface StaffDetailsRepository extends MongoRepository<StaffDetails,Long>{

}
