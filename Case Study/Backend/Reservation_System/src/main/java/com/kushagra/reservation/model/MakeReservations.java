package com.kushagra.reservation.model;


import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "MakeReservations")
public class MakeReservations {
	@Id
	private long code;
	private int numberOfChildren;
	private int numberOfAdults;
	private Date checkIn;
	private Date checkOut;
	private int numberOfNights;
	
	
	public MakeReservations() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MakeReservations(long code, int numberOfChildren, int numberOfAdults, Date checkIn, Date checkOut,
			int numberOfNights) {
		super();
		this.code = code;
		this.numberOfChildren = numberOfChildren;
		this.numberOfAdults = numberOfAdults;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.numberOfNights = numberOfNights;
	}
	public long getCode() {
		return code;
	}
	public void setCode(long code) {
		this.code = code;
	}
	public int getNumberOfChildren() {
		return numberOfChildren;
	}
	public void setNumberOfChildren(int numberOfChildren) {
		this.numberOfChildren = numberOfChildren;
	}
	public int getNumberOfAdults() {
		return numberOfAdults;
	}
	public void setNumberOfAdults(int numberOfAdults) {
		this.numberOfAdults = numberOfAdults;
	}
	public Date getCheckIn() {
		return checkIn;
	}
	public void setCheckIn(Date checkIn) {
		this.checkIn = checkIn;
	}
	public Date getCheckOut() {
		return checkOut;
	}
	public void setCheckOut(Date checkOut) {
		this.checkOut = checkOut;
	}
	public int getNumberOfNights() {
		return numberOfNights;
	}
	public void setNumberOfNights(int numberOfNights) {
		this.numberOfNights = numberOfNights;
	}
	@Override
	public String toString() {
		return "MakeReservations [code=" + code + ", numberOfChildren=" + numberOfChildren + ", numberOfAdults="
				+ numberOfAdults + ", checkIn=" + checkIn + ", checkOut=" + checkOut + ", numberOfNights="
				+ numberOfNights + "]";
	}
	
	
	
}