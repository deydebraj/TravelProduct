//Removing Items
var btns = document.querySelectorAll("tr .remove-cart")
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const tr1 = e.target.parentElement;
        tr1.parentNode.parentNode.removeChild(tr1.parentNode);
    });
});

//Calculating the total
$("#cart-qty-bag,#input1").keyup(function () {
    $('#total-cost-id-one').val($('#input1').val() * $('#cart-qty-bag').val());
});

$("#cart-qty-shoe,#input2").keyup(function () {
    $('#total-cost-id-two').val($('#input2').val() * $('#cart-qty-shoe').val());
});

$("#cart-qty-knife,#input3").keyup(function () {
    $('#total-cost-id-three').val($('#input3').val() * $('#cart-qty-knife').val());
});

$("#cart-qty-bag,#input4").keyup(function () {
    $('#total-cost-id-four').val($('#input4').val() * $('#cart-qty-bottle').val());
});

$("#cart-qty-tshirt,#input5").keyup(function () {
    $('#total-cost-id-five').val($('#input5').val() * $('#cart-qty-tshirt').val());
});

$("#cart-qty-jacket,#input6").keyup(function () {
    $('#total-cost-id-six').val($('#input6').val() * $('#cart-qty-jacket').val());
});
