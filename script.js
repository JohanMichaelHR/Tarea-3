document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Memoria USB', description: 'Descripción del producto 1', price: 100, image: 'images/memoria.jpeg' },
        { id: 2, name: 'Camara', description: 'Descripción del producto 2', price: 200, image: 'images/camara.jpeg' },
        { id: 3, name: 'Laptop', description: 'Descripción del producto 3', price: 300, image: 'images/laptop.jpg' },
        // Añade más productos aquí
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;

        productContainer.appendChild(productElement);
    });
});

let cartCount = 0;

function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Producto agregado al carrito!');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


