package com.kushagra.inventory.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kushagra.inventory.model.InventoryDetails;

public interface InventoryDetailsRepository extends MongoRepository<InventoryDetails, Integer>{

}
