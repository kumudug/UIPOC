var prods = getProducts();
console.log(prods);

var msg = "";
for(num = 0; num<prods.length; num++){
    msg += 
    "<div>" + 
        "<div>" + prods[num].id+ "</div>" +
        "<div>" + prods[num].name+ "</div>" +
        "<div>" + prods[num].description+ "</div>" +
        "<div>" + prods[num].price+ "</div>"+
    "</div>"
}
document.getElementById('mainDiv').innerHTML= msg;
    

