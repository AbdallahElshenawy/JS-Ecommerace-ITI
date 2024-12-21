


document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('username');
    if (name) {
        const profileLink = document.getElementById('profileLink');
        profileLink.textContent = name;
    }

    document.getElementById('logoutButton').addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });
});

var cart=document.querySelector(".cart");
function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}
let bigImg=document.getElementById("bigImg");
function changItemImg(img){
    bigImg.src=img;
}

var all_products_json;
var items_in_cart= document.querySelector(".items_in_cart");
let prouct_cart=[];
function addtocart(id,btn){
    prouct_cart.push(all_products_json[id])
    btn.classList.add("active")
    getcartitems()
}
let count_item = document.querySelector(".count_item");
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");

let price_carthead = document.querySelector(".price_carthead");
function getcartitems(){
    let total_price=0;
    let items_c = "";
    for(let i =0;i<prouct_cart.length;i++){
        items_c+=`
        <div class="itemcart">
                <img src="${prouct_cart[i].img}">
                <div class="content">
                    <h4>${prouct_cart[i].name}</h4>
                    <p class="price_cart">${prouct_cart[i].price}</p>
                </div>
                <button onclick="removeFromCart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        `
        total_price+=prouct_cart[i].price
        
    }
    items_in_cart.innerHTML=items_c;

    price_carthead.innerHTML=total_price +"$"

    count_item.innerHTML= prouct_cart.length
    count_item_cart.innerHTML= `(${prouct_cart.length} items in cart)`
    price_cart_total.innerHTML= total_price +"$"


}
function removeFromCart(index){
    prouct_cart.splice(index,1)
    getcartitems();

    let addtocartButtons = document.querySelectorAll(".fa-cart-plus");
    for(let i=0;i<addtocartButtons.length;i++){
        addtocartButtons[i].classList.remove("active");
        prouct_cart.forEach(product =>{
            if(product.id==i){
                addtocartButtons[i].classList.add("active");
            }
        })
    }
}

let back_to_top = document.querySelector(".back_to_top")
back_to_top.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

var imagesElement = document.getElementById("images");
var sliderImages = imagesElement ? imagesElement.getElementsByTagName("img") : [];
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

var currentIndex = 0;

function showSlide(index) {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
    sliderImages[index].style.display = "block";
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
showSlide(currentIndex);







