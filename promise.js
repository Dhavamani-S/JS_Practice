const cart = ["Shoes", "Shirt", "Hat"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log("Order is successfully created with order id: " + orderId);
    proceedtoPay(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function proceedtoPay(orderId){
    console.log("Payment is done for order id: " + orderId);
}


//Producer
function createOrder(cart){
    const pr = new Promise (function(resolve,reject) {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        else {
            const orderId = "12345";
            resolve(orderId);
        }
        
    })
    return pr;
}

function validateCart(cart){
    return true;
}