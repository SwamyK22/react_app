const cart = ['T-Shirt', 'Shoes', 'Mobile'];


createOrder(cart)
.then((orderId) => {
    console.log(orderId);
    return orderId;
})
.then((orderId) => {
    return proceedToPayment(orderId)
})
.then((paymentInfo) => {
    console.log(paymentInfo)
})
.catch((err) => {
    console.log(err)
})

function createOrder(cart) {
    const promise = new Promise((resolve, reject) => {
        if(isValidCart()) {
            setTimeout(() => {
                resolve(12345)
            }, 3000);
        } else {
            const err = new Error('Cart is not valid');
            reject(err);
        }
    });
    return promise;
};

function proceedToPayment(orderId) {
    return new Promise((resolve) => resolve('Payment sucessfull'));
}

function isValidCart() {
    return true;
}