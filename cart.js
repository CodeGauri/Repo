let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
    const qty = event.target.parentElement.querySelector('.qty').value;
    const item = {
        name: product,
        price: price,
        quantity: parseInt(qty),
    };

    const index = cart.findIndex(p => p.name === product);
    if (index !== -1) {
        cart[index].quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} added to cart!`);
}
