// change price function 
function changePrice(product,price){
    const productCost = document.getElementById(product+'-cost');
    productCost.innerText = price;
    calculateToatl();
}
function getValue(product){
    const productCost = document.getElementById(product+'-cost').innerText;
    const productPrice = parseInt(productCost);
    return productPrice;
}
function calculateToatl(){
    const memoryPrice = getValue('memory');
    const storagePrice = getValue('storage');
    const deliveryPrice = getValue('delivery'); 
    const bestPrice = 1299;
    const totalPrice = memoryPrice+storagePrice+deliveryPrice+bestPrice;
    const totalField = document.getElementById('total');
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









