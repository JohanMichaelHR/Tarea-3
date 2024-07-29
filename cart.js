// Sample data for cart items
const cartItems = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        quantity: 1,
        image: "img/product1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        price: 39.99,
        quantity: 2,
        image: "img/product2.jpg"
    }
];

// Function to display cart items
function displayCartItems() {
    const cartList = document.querySelector('.cart-list');
    cartList.innerHTML = ''; // Clear existing items

    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        `;

        cartList.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', displayCartItems);
