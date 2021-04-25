package com.kushagra.rooms.resource;

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

import com.kushagra.rooms.model.RoomDetails;
import com.kushagra.rooms.repository.RoomDetailsRepository;

@RestController
@RequestMapping("/roomapi")
@CrossOrigin
public class RoomDetailsController {
	@Autowired
	private RoomDetailsRepository repository;
	
	@PostMapping("/newRoom")
	public String addRoom(@RequestBody RoomDetails room)
	{
		repository.save(room);
		return "New Room Successfully Added";
	}
	
	@GetMapping("/findAllRooms")
	public List<RoomDetails> getRooms()
	{
		return repository.findAll();
	}
	@GetMapping("/findRoom/{roomNum}")
	public RoomDetails getRoom(@PathVariable int roomNum)
	{
		return repository.findById(roomNum).orElse(null);
	}
	
	/*@GetMapping("/findByStatus/{roomStatus}")
	public List<RoomDetails> getByStatus(@PathVariable String roomStatus)
	{
		return repository.findByStatus(roomStatus);
	}*/
	@PutMapping("/updateRoom/{roomNum}")
	public RoomDetails updateRoom(@RequestBody RoomDetails updatedRoom)
	{
		repository.save(updatedRoom);
		return updatedRoom;
	}
	@DeleteMapping("/deleteRoom/{roomNum}")
	public String deleteGuest(@PathVariable int roomNum)
	{
		repository.deleteById(roomNum);
		return "Room Deleted with Room Number:" + roomNum;
	}
	
	/*@GetMapping("/search/{status}")
	public List<RoomDetails> searchRoom(@PathVariable String status)
		{
			return repository.findByRoomStatus(status);
		}*/

}
