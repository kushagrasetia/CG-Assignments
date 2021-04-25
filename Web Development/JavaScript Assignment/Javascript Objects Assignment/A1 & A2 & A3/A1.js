function person(fname, lname, age, skills, dateofbirth, address, married, profession) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
/*
person1 = new person("nikhil", "goud", 22, ["c"], "24/10/1996", { city: "hyderabad", pincode: "521185" }, "false", "sr analyst");
person2 = new person("harish", "chinna", 21, ["HTML"], "08/06/1997", { city: "Ameerpet", pincode: "500038" }, "false", "jr analyst");
print = function() {
    console.log(person1);
    console.log(person2);
}();
*/

amithab = new person("amithab", "bachan", 22, ["c"], "24/10/1996", { city: "hyderabad", pincode: "521185" }, "false", "sr analyst");
abhisheik = new person("abhisheik", 21, "HTML", "08/06/1997", "false", "jr analyst");
var abhisheik = Object.create(amithab);
/* 
print = function() {
    console.log(amithab);
    console.log(abhisheik.lname);
    console.log(abhisheik.address);
}();
*/
Aaradhya = new person("Aaradhya", 20, "03/02/1998", "false", "fresher");
var Aaradhya = Object.create(abhisheik);
var Aaradhya = Object.create(amithab);

print = function() {
    console.log(amithab);
    console.log(abhisheik);

    console.log(Aaradhya.lname);
    console.log(Aaradhya.skills);
    console.log(Aaradhya.address);

}();