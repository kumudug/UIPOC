let prods = getProducts();
console.log(prods);

let productsHtml = "";
for (num = 0; num < prods.length; num++) {
    productsHtml +=`<div type="button" class="list-group-item">${prods[num].name}<button type="button" class="btn btn-xs pull-right" onclick="addProdToOrder(${prods[num].id})" >Add</button><input type="number" name="quantity" min="1" max="20" class="pull-right"></div>`;
}

document.getElementById('containerProducts').innerHTML = productsHtml;

let customerList = getCustomers();

let customersHtml = '';
for (num = 0; num < customerList.length; num++) {
    customersHtml += `<div type="button" class="list-group-item">${customerList[num].name}</div>`;
}
document.getElementById('containerCustomers').innerHTML = customersHtml;

 function addProdToOrder(prodId){
     console.log(prodId);
     addProduct(prodId, 1);
     displayOrder();
 }

 let orderHtml = '';
 function displayOrder(){
    orderHtml = '';
    for (num = 0; num < order.length; num++) {
        orderHtml += `<div type="button" class="list-group-item">ProductId:${order[num].productId}, Qty: ${order[num].quantity}</div>`;
    }
    document.getElementById('containerOrder').innerHTML = orderHtml;
 }