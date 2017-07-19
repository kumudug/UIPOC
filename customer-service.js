var getCustomers = function(){
    return customers;
}

var getCustomerById = function(id){
    var customer;
    customers.forEach(function(cust) {
        //.forEach can't bre breaked
        if(cust.id === id){
            customer = cust;
        }
    });
    return customer;
}

var getCustomerByName = function(name){
    var customer;
    customers.forEach(function(cust) {
        //.forEach can't bre breaked
        if(cust.name === name){
            customer = cust;
        }
    });
    return customer;
}