function addToCart(gameName, imgSrc, price, discount, product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({gameName, imgSrc, price, discount, product});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Товар "${gameName}" добавлен в корзину`);
}