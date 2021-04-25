let Order={
    id:1,
    title: "Book",
    price:250,
    printOrder:function()
    {
        return "id = " + this.id + " "+ "title = "+this.title;
    },
    getPrice:function()
    {
        return "price = " + this.price;
    }

};

console.log(Order.printOrder());
console.log(Order.getPrice());
var copyOrder=Object.assign({},Order);
console.log(copyOrder);