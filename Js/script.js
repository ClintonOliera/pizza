$(document).ready(function(){
  $("#order").click(function(){
    $("#form1").toggle();
  });
});

 function Result (type,size,crust,toppings){
   this.type = type ;
   this.size = size ;
   this.crust = crust;
   this.toppings = toppings;
 };
 Result.prototype.order = function(){
   return ("you have ordered " + this.type + " pizza" + " with" + this.toppings + "toppings " + "and " + this.crust + " for crusts")
 }
 function TotalCost (price,quantity,delivery,toppings,crust) {
   this.price = price;
   this.quantity = quantity;
   this.delivery =delivery;
   this.toppings =toppings;
   this.crust = crust;
 }
 TotalCost.prototype.Total = function() {
   return(this.price,this.delivery,this.toppings,this.crust)*(this.quantity);
 }
 var price = [1200,800,600];
 var toppingsPrice = [100,120,80,150,200];
 var toppingsNames = [pepperoni,mushrooms,salad,susage,salami];
 var crusts = ["Crispy", "Stuffed", "Glutton-free"];
 var crustprice = [100,120,200];
 var deliveryPrice = [0,150];
 


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    var pizzaType = $("#type").val();
  })
});