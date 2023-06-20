
function ready(){
    var remove=document.getElementsByClassName('but');
    for(let i of remove) {
        var button = i;
        button.addEventListener ('click' , removeitem)
    }
    
}
function hat(){
    var add=document.getElementsByClassName('btnp');
    for(let i of add) {
        var button = i;
        button.addEventListener ('click' , additem)
    }
    
}



var quantityinputs = document.getElementsByClassName('nu')
    for (var i = 0; i < quantityinputs.length; i++){
        var input = quantityinputs[i]
        input.addEventListener('change', quantity)
    }

function removeitem (event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
    
   carttotal()
}

function quantity(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
  carttotal()
}


function carttotal(){
    var cartr = document.getElementsByClassName('items')[0]
    var cartitems = cartr.getElementsByClassName('card')
    var totals= 0
    for (var i = 0; i < cartitems.length; i++) {
        var cartitem = cartitems[i]
        var itemprice = cartitem.getElementsByClassName('prix')[0]
        var itemquantity = cartitem.getElementsByClassName('nu')[0]
        var price = parseFloat(itemprice.innerText)
        var quantity = itemquantity.value
        totals = totals + (price * quantity)
        
    }
    document.getElementsByClassName('totals')[0].innerText = totals

}
const hearts =document.getElementsByClassName('fa-heart');

for(let i of hearts) {
    i.addEventListener('click', function() {
        i.classList.toggle('red');
    })
}
