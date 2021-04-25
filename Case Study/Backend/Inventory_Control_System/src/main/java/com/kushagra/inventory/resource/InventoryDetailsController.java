package com.kushagra.inventory.resource;


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

import com.kushagra.inventory.model.InventoryDetails;
import com.kushagra.inventory.repository.InventoryDetailsRepository;

@RestController
@RequestMapping("/inventoryapi")
@CrossOrigin
public class InventoryDetailsController {

	@Autowired
	private InventoryDetailsRepository repository;
	
	@PostMapping("/newItem")
	public String addItem(@RequestBody InventoryDetails item)
	{
		repository.save(item);
		return "New Item Successfully Added";
	}
	
	@GetMapping("/findAllItems")
	public List<InventoryDetails> getItems()
	{
		return repository.findAll();
	}
	@GetMapping("/findItem/{itemId}")
	public InventoryDetails getItem(@PathVariable int itemId)
	{
		return repository.findById(itemId).orElse(null);
	}
	@PutMapping("/updateItem/{itemId}")
	public InventoryDetails updateItem(@RequestBody InventoryDetails updatedItem)
	{
		repository.save(updatedItem);
		return updatedItem;
	}
	@DeleteMapping("/deleteItem/{itemId}")
	public String deleteItem(@PathVariable int itemId)
	{
		repository.deleteById(itemId);
		return "Item Deleted with Id: " + itemId;
	}
}

