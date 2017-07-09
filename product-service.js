var getProducts = function(){
    return products;
}

var getProductById = function(id){
    var product;
    products.forEach(function(prod) {
        //.forEach can't bre breaked
        if(prod.id === id){
            product = prod;
        }
    });
    return product;
}

var getProductByName = function(name){
    var product;
    products.forEach(function(prod) {
        //.forEach can't bre breaked
        if(prod.name === name){
            product = prod;
        }
    });
    return product;
}

