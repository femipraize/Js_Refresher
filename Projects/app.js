const cart = document.querySelector("nav .cart")
const cartSidebar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menuSidebar = document.querySelector("menu-sidebar")
const closeMenu = document.querySelector(".close-menu")
const cartItemsTotal = document.querySelector("noi")
const cartPriceTotal = document.querySelector(".total-amount")
const cartUi = document.querySelector(".cart-sidebar .cart")
const totalDiv = document.querySelector(".total-sum")
const clearBin = document.querySelector(".clear-cart-btn")
const cartContent = document.querySelector(".cart-content")

let Cart=[];
let buttonsDom = [];

cart.addEventListener("click", function() {
    cartSidebar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay");
    setTimeout(function(){
        document.querySelector("body").append(bodyOverlay)
    },300)
})

closeCart.addEventListener("click", function () {
    cartSidebar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

burger.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(-100%)"
})

class Product{
    async getProduct(){
        const response = await fetch("products.json");
        const data= await response.json();
        let products = data.items;
        products = products.map(item=>{
            const{title,price} = item.fields;
            const{id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title, price, id, image}
        })
        return products;
    }
}

class UI{
    displayProducts(){
        let result = "";
        products.forEach(Product => {
            const productDiv = document.createElement("div")
            productDiv.innerHTML = `<div class = "product-card">
                                    <img src="${product.image}"alt="product">
                                    <span class ="add-to-cart" data-id="${product.id}">
                                    <i class = "fa fa-cart--plus fa-lx"
                        style ="margin-right:0.1em; font-size: 1em;"></i>
                                    Add to Cart
                                    </span>
                                    <div class = "product-name">${product.title}</div>
                                    <div class = "product-pricing">${product.price}</div>
                                    </div>`
            const p = document.querySelector(".pruduct")
            p.append(productDiv)
        })
    }
    
getButtons()
{
    const btns = document.querySelectorAll(".add-to-cart")
    Array.from(btns)
    buttonsDom = btns;
    btns.forEach((btn)=>{
        let id = btn.CDATA_SECTION_NODE.id
        let inCart = cart.firstElementChild((item)=>item.id===id);
        if(inCart)
        {
            btn.innerHTML = "In Cart"
            btn.dissabled = true 
        }
        btn.addEventListener("click", (e)=>{
            e.currentTarget.innerHTML = "In Cart"
            e.currentTarget.style.color ="white"
            e.currentTarget.style.pointerEvents = "none"
            let cartItem = {...Storage.getStorageProducts(id), 'amount': 1}
            Cart.push(cartItem)
            Storage.saveCart(Cart)
            this.setCartValues(cart)
            this.addCartItems(cartItem)
        })
    })
}

setCartValues(cart){
    let tempTotal = 0;
    let itemsTotal = 0;
    Cart.map((item) =>{
        tempTotal += (item.price*item.amount);
        itemsTotal = item.amount;
        parseFloat(tempTotal.toFixed(2))
    })
    cartItemsTotal.innerHTML = itemsTotal
    cartPriceTotal.innerHTML = parseFloat(tempTotal.toFixed(2))
}
addCartItems(cartItem){
    let cartItem = document.createElement("div")
    cartItemUi.innerHTML = `<div class = "cart-product">
                            <div class = "product-image"><img src = "${cartItem.image} alt= "product"></div>
                            <div class = "cart-product- content"><div class = "cart-product-name"><h3>${cartItem.title}</h3></div></div>
                            <div class = cart-product-price"><h3>$${cartItem.price}</h3></div>
                            <div class = "cart-product-remove data-id="${cartItem.id}"<a>href = "#" style= "color:red;">remove</a></div>
                            </div>
                            <div class = "plus-minus">
                            <i class = "fa fa-angle-left add-amount"
                            data-id= "${cartItem.id}"></i>
                            <span class="no-of-items">${cartItem.amount}</span>`
}
}
