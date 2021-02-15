package com.ks.Annotations3;

public class TollywoodMovies {
	private String name;
	private String ProductionHouse;
	private int year;
	public TollywoodMovies(String name, String productionHouse, int year) {
		super();
		this.name = name;
		ProductionHouse = productionHouse;
		this.year = year;
	}
	public TollywoodMovies() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProductionHouse() {
		return ProductionHouse;
	}
	public void setProductionHouse(String productionHouse) {
		ProductionHouse = productionHouse;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	@Override
	public String toString() {
		return "TollywoodMovies [name=" + name + ", ProductionHouse=" + ProductionHouse + ", year=" + year + "]";
	}
	
}
