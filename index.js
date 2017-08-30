let prods = getProducts();
console.log(prods);

let productsHtml = "<form>";
for (num = 0; num < prods.length; num++) {
    productsHtml +=
        "<div class='form-group'>" +
        "<label for='inputId" + num + "'>Id</label>" +
        "<label type='text' class='form-control' id='inputId" + num + "'>" + prods[num].id + "</label>" +
        "</div>" +

        "<div class='form-group'>" +
        "<label for='inputName" + num + "'>Name</label>" +
        "<label type='text' class='form-control' id='inputName" + num + "'>" + prods[num].name + "</label>" +
        "</div>" +

        "<div class='form-group'>" +
        "<label for='inputDesc" + num + "'>Description</label>" +
        "<label type='text' class='form-control' id='inputDesc" + num + "'>" + prods[num].description + "</label>" +
        "</div>" +

        "<div class='form-group'>" +
        "<label for='inputPrice" + num + "'>Price</label>" +
        "<label type='text' class='form-control' id='inputPrice" + num + "'>" + prods[num].price + "</label>" +
        "</div>" +

        "<hr/>";
}
productsHtml += "</form>";

document.getElementById('divProductsLarge').innerHTML = productsHtml;
document.getElementById('divProductsSmall').innerHTML = productsHtml;


 