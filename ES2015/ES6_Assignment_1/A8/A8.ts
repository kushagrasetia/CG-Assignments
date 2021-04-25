class Account
{
constructor(id,name,balance)
{
this.id=id;
this.name=name;
this.balance=balance;
}
}
class SavingAccount extends Account
{
constructor(id,name,balance,interest)
{
    super(id,name,balance);
    this.interest=interest;
}
}
class CurrentAccount extends Account
{
constructor(id,name,balance,cash_credit)
{
    super(id,name,balance);
    this.cash_credit=cash_credit;
}
}
let obj1=new SavingAccount(1,"rakesh",10000,4);
let obj2=new CurrentAccount(1,"rakesh",10000,2500);
obj1.balance