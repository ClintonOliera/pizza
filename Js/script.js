$(document).ready(function(){
  $("#order").click(function(){
    $("#form1").toggle();
  });
});

function Results (type,size,crust,toppings) {
  this.type = type;
  this.size= size;
  this.crust= crust;
  this.toppings=toppings;
};
Results.prototype.order = function() {
  return "You have made an order of " + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function TotalPrice (price, quantity, delivery,toppings,crust) {
  this.price= price;
  this.quantity=quantity;
  this.delivery=delivery;
  this.toppings=toppings;
  this.crust=crust;
};
TotalPrice.prototype.finalTotal = function () {
  return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
};

var sizePrices = [1200, 800, 600]
var priceToppings = [100,120,80,150,200]
var toppingsName= ["Pepperoni" , "mushroom" , "salad" ,"sausage", " salami"]
var crustNames= ["Crispy", "Stuffed", "Glutton-free"]
var crustPrices = [100,120,200]
var deliveryPrices = [0, 200];
$(document).ready(function(){
  $('form#form1').submit(function (event) {
      event.preventDefault();
  var pizzaType = $('#type').val();
  var pizzaSize = parseInt($('#size').val());
  var pizzaToppings=parseInt($('#toppings').val());
  var priceCrust =parseInt($('#crust').val());
  var pizzaTop = $('#toppings').val();
  var pizzaQty = parseInt($('#quantity').val());
  var pizzaPick = parseInt($('#delivery').val());
  var price = sizePrices[pizzaSize - 1];
  var DeliveryCost = deliveryPrices[pizzaPick - 1];
  var ToppingsCost = priceToppings[pizzaToppings-1];
  var crustCost = crustPrices[priceCrust-1]
  var topNames = toppingsName[pizzaTop-1]
  var crustName = crustNames[priceCrust-1] 
  newOrder = new Results(pizzaType,pizzaSize, crustName,topNames,crustName);
  newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
  if (pizzaPick===1){
      alert( newOrder.order());
      alert("Your bill is: " + newTotal.finalTotal());
      alert("Thank you for shopping with us! " )
      }else{
          if(pizzaPick===2){
             var location= prompt(" Where would your like your Pizza to be Delivered? ");
             alert("your pizza will be delivered at " + location + " you will be charged 200/= for delivery");
             alert(newOrder.order());
             alert("Your bill is: " + newTotal.finalTotal());
             alert("Thank you for shopping with us!")
          }
      }
})
});

function validateForm() {
  var name = document.getElementById("name").value;
  alert( name + " we have received your message thank you for your feedback");
}
