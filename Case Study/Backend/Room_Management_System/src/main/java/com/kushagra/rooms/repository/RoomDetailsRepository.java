package com.kushagra.rooms.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kushagra.rooms.model.RoomDetails;

public interface RoomDetailsRepository extends MongoRepository<RoomDetails, Integer>{

	/*public List<RoomDetails> findByStatus(String roomStatus);*/
	/*public List<RoomDetails> findByRoomStatus(String roomStatus);*/

}
