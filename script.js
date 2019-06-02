var itemNames=[];
var itemPrices=[];
var price;
var name;
var total = 0;
$(".newItem").click(function(){
    price=$(".itemPrice").val();
    name=$(".itemName").val();
    total=total+parseInt(price);
    $(".total").text("Total:" + "$" + total);
    itemNames.push(name);
    $(".number").text("Items in Cart:" + itemNames.length);
    $(".items").append("<div class='item'><p>"+name+"</p><p>$"+price+"</p></div>");
    
});
$(".purchase").click(function(){
    alert('Congrats, You bought your items. Your Total is:' +  '$' + total );
    $(".items").html("");
    total = 0;
    itemNames = [];
    $(".total").text("Total:");
    $(".number").text("Items in Cart: ");
});

