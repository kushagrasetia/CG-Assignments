package com.kushagra.inventory.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection="InventoryDetails")
public class InventoryDetails {
	@Id
	private int itemId;
	private String itemDescription;
	private int itemStock;
	private int itemNeeded;
	private float itemPrice;
	
	public InventoryDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InventoryDetails(int itemId, String itemDescription, int itemStock, int itemNeeded, float itemPrice) {
		super();
		this.itemId = itemId;
		this.itemDescription = itemDescription;
		this.itemStock = itemStock;
		this.itemNeeded = itemNeeded;
		this.itemPrice = itemPrice;
	}

	public int getItemNeeded() {
		return itemNeeded;
	}

	public void setItemNeeded(int itemNeeded) {
		this.itemNeeded = itemNeeded;
	}

	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getItemDescription() {
		return itemDescription;
	}
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}
	public int getItemStock() {
		return itemStock;
	}
	public void setItemStock(int itemStock) {
		this.itemStock = itemStock;
	}
	public float getItemPrice() {
		return itemPrice;
	}
	public void setItemPrice(float itemPrice) {
		this.itemPrice = itemPrice;
	}

	@Override
	public String toString() {
		return "InventoryDetails [itemId=" + itemId + ", itemDescription=" + itemDescription + ", itemStock="
				+ itemStock + ", itemNeeded=" + itemNeeded + ", itemPrice=" + itemPrice + "]";
	}

	
	
}
