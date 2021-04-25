let add=function(a=5,b=10)
{
    console.log(a+b);
}
add();
console.log("**********");
let userFriends=function(username,...friends)
{
    console.log(username);
    for(let i in friends)
    {
        console.log(friends[i]);
    }
}
userFriends("Rahul","Ram","Sita","Manisha");
userFriends("Neha","Shyam","Garima");
console.log("**********");
let printCpitalNames=function(...names)
{
    for(let j in names)
    {   var name1=names[j].toUpperCase();
        console.log(name1);
    }
}
let names=["rohit","sagar","gagan","manpreet","jaskaran"];
printCpitalNames(...names);