package simple.model;

public class simpleInterestClass {
	private int amount;
	private int years;
	private double rate;
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getYears() {
		return years;
	}
	public void setYears(int years) {
		this.years = years;
	}
	public double getRate() {
		return rate;
	}
	public void setRate(double rate) {
		this.rate = rate;
	}

	public double getInterest()
	{
		return (amount*years*rate)/100;
	}

}
