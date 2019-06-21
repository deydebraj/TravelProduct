
var addToCartButton = document.getElementsByClassName("add")
var numberOfItem = document.getElementById("numberOfItem");
console.log(numberOfItem)
//eventlistener for all the btns
for(i=0; i<addToCartButton.length; i++){
    addToCartButton[i].addEventListener("click",editTotal)
}
//NUMBER OF ITEMS ADDED TO THE CART
function fun() {
    var numberOfItem = document.getElementById("numberOfItem");
    var number = numberOfItem.innerHTML;
    number++;
    numberOfItem.innerHTML = number;
}

function editTotal(){
    var totalCostOne = document.getElementById("total-cost-id-one")
    var totalCostTwo = document.getElementById("total-cost-id-two")
    var totalCostThree = document.getElementById("total-cost-id-three")
    var totalCostFour = document.getElementById("total-cost-id-four")
    var totalCostFive = document.getElementById("total-cost-id-five")
    var totalCostSix = document.getElementById("total-cost-id-six")

    var costOfItem = document.getElementsByClassName("amount")
    for(i=0; i<costOfItem.length; i++){
        var newValue = costOfItem[0].getAttribute("value");
        totalCostOne.innerHTML = newValue;
    }
}

/*
for(i=0; i<addSpan.length; i++){
    addSpan[i].addEventListener("click",fun1)
}

function fun1(){
   //NAME OF THE ITEMS ADDED TO THE CART
    var product = document.getElementsByClassName("product");
    var name = product[0].getAttribute("alt")
    var price = product[0].getAttribute("price")
    //inseting text
    var listOfItems = document.getElementById("listOfItemsOne")
    listOfItems.innerHTML = name;
    var itemPrice = document.getElementById("listOfItemsOnePrice");
    itemPrice.innerHTML = price; 
}
*/