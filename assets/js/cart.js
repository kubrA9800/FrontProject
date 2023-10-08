"use strict"

$(function(){

let mediaBox=document.querySelector(".medias")
let mediaIcon=document.querySelector(".social-media span")

mediaIcon.addEventListener("click", function(){
    mediaBox.classList.toggle("d-none")
})


let opens=document.querySelectorAll(".open")


opens.forEach(open => {
    open.addEventListener("mouseover", function(){
       this.children[1].classList.remove("d-none")
        
    })
    open.addEventListener("mouseout", function(){
        this.children[1].classList.add("d-none")
         
     })
});

let openSidebarIcon=document.querySelector(".logo .open-icon")
let sidebar=document.querySelector(".sidebar")
let closeSidebarIcon=document.querySelector(".logo .close-icon")

openSidebarIcon.addEventListener("click", function(){
    sidebar.classList.remove("move-sidebar")
})



let over=document.querySelector(".overlay")
openSidebarIcon.addEventListener("click", function(){
    over.style.display = "block";
})
closeSidebarIcon.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar")
    over.style.display="none"
})
over.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar")
    this.style.display = "none";
})

let searchIcon=document.querySelector(".icons .search i")

let closeSearchIcon=document.querySelector(".icons .close")
let body=document.querySelector("body")
searchIcon.addEventListener("click", function(){
    this.classList.add("d-none");
    closeSearchIcon.classList.remove("d-none")
    searchModal.classList.remove("d-none");
    body.style.overflowY="hidden"
})


let searchModal=document.querySelector(".search-modal")

closeSearchIcon.addEventListener("click", function(e){
    this.classList.add("d-none");
    searchIcon.classList.remove("d-none")
    searchModal.classList.add("d-none");


})




let basket = [];

if (localStorage.getItem("addToBasket") != null) {
  basket = JSON.parse(localStorage.getItem("addToBasket"));
  document.querySelector("#carts-all").classList.add("d-none");
} else {
  document
    .querySelector(".basket .count")
    .classList.add("d-none");
  document.querySelector("#cart .table").classList.add("d-none");
  document.querySelector("#carts-all").classList.remove("d-none");
}

if (basket.length == 0) {
  document.querySelector("#cart .table").classList.add("d-none");
  document.querySelector("#carts-all").classList.remove("d-none");
  document
    .querySelector(".basket .count")
    .innerText="0";
  document.querySelector("main .all-price").classList.add("d-none");
}

function basketCount() {
  let basketCount = 0;
  for (const item of basket) {
    basketCount += item.count;
  }
  return basketCount;
}

document.querySelector(".basket .count").innerText =
  basketCount();

showBasketDatas(basket);

function showBasketDatas(products) {
  let tableBody = document.querySelector(".table tbody");
  for (const item of products) {
    tableBody.innerHTML += `<tr">
        <td><img src="${item.image}" alt=""></td>
        <td>${item.name}</td>
     <td>
        <i data-id="${item.name}" class="fa-solid fa-minus" ></i>
        <span>${item.count} </span>
        <i data-id="${item.name}" class="fa-solid fa-plus "></i>
     </td>
        <td>${item.price} $</td>
        <td>${parseFloat(item.price * item.count)} $</td>
        <td>
            <button data-id="${
              item.name
            }" class="btn btn-danger delete-btn">Delete</button>
        </td>
        </tr>`;
  }
  totalPrice();
}

function totalPrice() {
  let total = 0;

  for (const item of basket) {
    total += parseFloat(item.price * item.count);
    document.querySelector("main .total-price").innerHTML = total + " $";
  }
}

deleteBasketItem();

function deleteBasketItem() {
  let deleteBtns = document.querySelectorAll(".table button");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let productName = this.getAttribute("data-id");

      let existProduct = basket.find((m) => m.name == productName);

      basket = basket.filter((m) => m.name != existProduct.name);

      localStorage.setItem("addToBasket", JSON.stringify(basket));

      document.querySelector(".basket .count").innerText =
        basketCount();
      this.parentNode.parentNode.remove();

      if (basket.length == 0) {
        document.querySelector("#cart .table").classList.add("d-none");
        document.querySelector("#carts-all").classList.remove("d-none");
        document
          .querySelector(".basket .count")
          .innerText="0";
        document.querySelector(".all-price").classList.add("d-none");
        document
          .querySelector(".all-price .total-price")
          .classList.add("d-none");
      }
      totalPrice();
    });
  });
}

let minusIcons = document.querySelectorAll(".fa-minus");

let plusIcons = document.querySelectorAll(".fa-plus");

plusIcons.forEach((plusIcon) => {
    plusIcon.addEventListener("click", function () {
    let productName = this.getAttribute("data-id");

    let existProduct = basket.find((m) => m.name == productName);

    existProduct.count++;

    localStorage.setItem("addToBasket", JSON.stringify(basket));
    this.previousElementSibling.innerText = existProduct.count;
    document.querySelector(".basket .count").innerText =
      basketCount();
    this.parentNode.nextElementSibling.nextElementSibling.innerText =
      Math.round(existProduct.price * existProduct.count) + " $";
    totalPrice();
  });
});

minusIcons.forEach((minusIcon) => {
    minusIcon.addEventListener("click", function () {
    let productName = this.getAttribute("data-id");
    let existProduct = basket.find((m) => m.name == productName);
    if (existProduct.count > 1) {
      existProduct.count--;

      localStorage.setItem("addToBasket", JSON.stringify(basket));
      this.nextElementSibling.innerText = existProduct.count;
      document.querySelector(".basket .count").innerText =
        basketCount();
      this.parentNode.nextElementSibling.nextElementSibling.innerText =
        Math.round(existProduct.price * existProduct.count) + " $";
      totalPrice();
}
});
});

});

