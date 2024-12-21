fetch('items.json')
    .then(response => response.json())
    .then(data => {
        const productsDev = document.getElementById("products_dev");
        let allProducts = data;

        function renderProducts(products) {
            productsDev.innerHTML = "";
            products.forEach(product => {
                const oldPriceP = product.old_price ? `<p class="oldprice">${product.old_price}$</p>` : "";
                const percentDiscount = product.old_price ? `<span class="sale_present">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : "";

                productsDev.innerHTML += `
                    <div class="product">
                        <div class="icons">
                            <span><i onclick="addtocart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        ${percentDiscount}
                        <div class="img-product">
                            <img src="${product.img}">
                            <img class="img-hover" src="${product.img_hover}">
                        </div>
                        <h3 class="name-product"><a href="#">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>${product.price}$</span></p>
                            ${oldPriceP}
                        </div>
                    </div>`;
            });
        }

        renderProducts(allProducts);

        const checkboxes = document.querySelectorAll('.filter_item input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const checkedCategories = Array.from(checkboxes)
                    .filter(chk => chk.checked)
                    .map(chk => chk.dataset.category);

                if (checkedCategories.length === 0) {
                    renderProducts(allProducts);
                    return;
                }

                const filteredProducts = allProducts.filter(product => {
                    return checkedCategories.includes(product.category);
                });

                renderProducts(filteredProducts);
            });
        });
    });

function addtocart(id, element) {
    prouct_cart.push(all_products_json[id])
    element.classList.add("active")
    getcartitems()
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.push(id);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function proceedToCheckout() {
    alert("Your order is confirmed. Check your Email");
    window.location.href = 'login.html';

}
