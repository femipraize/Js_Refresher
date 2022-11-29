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
})