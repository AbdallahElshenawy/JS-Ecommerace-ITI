document.addEventListener('DOMContentLoaded', function () {
    let itemsDiv = document.querySelector('.items');

    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            let products = data.filter(product => cartItems.includes(product.id));

            products.forEach(product => {
                itemsDiv.innerHTML += `
                    <div class="item_cart">
                        <img src="${product.img}">
                        <div class="content">
                            <h4>${product.name}</h4>
                            <p class="price_cart">Price: <span>${product.price}$</span></p>
                        </div>
                    </div>`;
            });
        });
});
