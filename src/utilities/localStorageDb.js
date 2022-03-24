const addToDB = id => {
    let shoppingCart = getLocalStorage();

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    // console.log(shoppingCart);
}
const getLocalStorage = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const removeDb = () => {
    localStorage.removeItem('shopping-cart');
}
export {
    addToDB,
    getLocalStorage,
    removeDb
};