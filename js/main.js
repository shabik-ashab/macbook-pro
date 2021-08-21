// change price function 
function changePrice(product,price){
    const productCost = document.getElementById(product+'-cost');
    productCost.innerText = price;
    calculateToatl();


}
//getting cost of the extra product
function getValue(product){
    const productCost = document.getElementById(product+'-cost').innerText;
    const productPrice = parseInt(productCost);
    return productPrice;
}
//calculating total
function calculateToatl(){
    const memoryPrice = getValue('memory');
    const storagePrice = getValue('storage');
    const deliveryPrice = getValue('delivery'); 
    const bestPrice = 1299;
    // caculate total and set total in total price
    const totalPrice = memoryPrice+storagePrice+deliveryPrice+bestPrice;
    const total = document.getElementById('total');
    total.innerText = totalPrice;
    //get the last total field
    const totalField = document.getElementById('total-field');
    totalField.innerText = totalPrice;
}


// change price for memory
document.getElementById('memory1-option').addEventListener('click',function(){ 
   changePrice('memory',0);
 })
document.getElementById('memory2-option').addEventListener('click',function(){
   changePrice('memory',180);
})
// change price for storage
document.getElementById('storage1-option').addEventListener('click',function(){
    changePrice('storage',0);
})
document.getElementById('storage2-option').addEventListener('click',function(){
    changePrice('storage',100);
})
document.getElementById('storage3-option').addEventListener('click',function(){
    changePrice('storage',180);
})
// change price for delivery
document.getElementById('delivery1-option').addEventListener('click',function(){
    changePrice('delivery',0);
})
document.getElementById('delivery2-option').addEventListener('click',function(){
    changePrice('delivery',20);
})


//checking the cupon
document.getElementById('cupon-btn').addEventListener('click',function(){
    const cuponBtn = document.getElementById('cupon-btn');
    const cuponInput = document.getElementById('cupon-input');
    const cuponValue = cuponInput.value;
    const totalField = document.getElementById('total-field');
    const totalPrice = parseInt(totalField.innerText);
    const discount = (totalPrice/100)*20;
    const discPrice = totalPrice - discount;
    //validating cupon
    if(cuponValue == 'stevekaku'){
        totalField.innerText = discPrice;
        cuponInput.value = '';
        cuponBtn.disabled = true;
    }
    cuponInput.value = '';
})






