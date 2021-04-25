let fruits=["Banana","Orange","Grapes","Apple"];
let [firstelement,secondelement,thirdelement,fourthelement]=fruits;
console.log(thirdelement);

console.log("**********");
let organisation={
name:"Rohit",
address:{
    pincode:324000,
    city:"jaipur",
    state:"Rajasthan"
}
};
let {address:{pincode}}=organisation;
console.log(pincode);