fetch('items.json')
        .then(response => response.json())
        .then(data =>{
        const items_sale = document.getElementById("items_sale")
        const other_products=document.getElementById("other_products")

        all_products_json=data;    
        data.forEach(product => {
            if(product.old_price){
                const percent_discount=Math.floor((product.old_price - product.price)/product.old_price * 100)
                items_sale.innerHTML += `
                
                    <div class="product">
                        <div class="icons">
                            <span><i onclick="addtocart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sale_present">${percent_discount}%</span>
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
                            <p class="oldprice">${product.old_price}$</p>
                        </div>
                    </div>`
            }
            
        });


        data.forEach(product => {
            
                other_products.innerHTML += `
                
                    <div class="product">
                        <div class="icons">
                            <span><i onclick="addtocart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
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
                        </div>
                    </div>`
            
            
        });

        })

       