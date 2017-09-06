// orders can't be instanciated thus can't be kept seperate

var order = [];

//Private function denoted by the "_"
var _findProductIndexInOrder = function(prodId){
    var index = -1;
    
    var step;
    for (step = 0; step < order.length; step++) {
        if(order[step].productId === prodId){
            index = step;
            break;
        }
    }

    return index;
}

var addProduct = function(id, qty){
    var index = _findProductIndexInOrder(id);
    
    if(index > -1){
        order[index].quantity += qty;
    } else{
        order.push({
            productId: id,
            quantity: qty
        });
    }

    return order;
}


var removeProduct = function(id, qty){
    var index = _findProductIndexInOrder(id);
    
    if(index > -1 && order[i].quantity >= qty){
        if(order[index].quantity === qty){
            order.splice(index, 1);
        } else{
            order[index].quantity -= qty;
        }
    } else{
        throw 'Product not found or invalid product quantity';
    }

    return order;
}