"use strict";

$(function () {
  let mediaBox = document.querySelector(".medias");
  let mediaIcon = document.querySelector(".social-media span");

  mediaIcon.addEventListener("click", function () {
    mediaBox.classList.toggle("d-none");
  });

  let opens = document.querySelectorAll(".open");

  opens.forEach((open) => {
    open.addEventListener("mouseover", function () {
      this.children[1].classList.remove("d-none");
    });
    open.addEventListener("mouseout", function () {
      this.children[1].classList.add("d-none");
    });
  });

  let openSidebarIcon = document.querySelector(".logo .open-icon");
  let sidebar = document.querySelector(".sidebar");
  let closeSidebarIcon = document.querySelector(".logo .close-icon");

  openSidebarIcon.addEventListener("click", function () {
    sidebar.classList.remove("move-sidebar");
  });

  $(".swinger-container").swinger();

  let over = document.querySelector(".overlay");
  openSidebarIcon.addEventListener("click", function () {
    over.style.display = "block";
  });
  closeSidebarIcon.addEventListener("click", function () {
    sidebar.classList.add("move-sidebar");
    over.style.display = "none";
  });
  over.addEventListener("click", function () {
    sidebar.classList.add("move-sidebar");
    this.style.display = "none";
    modal.classList.add("d-none");
    body.style.overflowY = "auto";
  });

  let searchIcon = document.querySelector(".icons .search i");

  let closeSearchIcon = document.querySelector(".icons .close");
  let body = document.querySelector("body");
  searchIcon.addEventListener("click", function () {
    this.classList.add("d-none");
    closeSearchIcon.classList.remove("d-none");
    searchModal.classList.remove("d-none");
    body.style.overflowY = "hidden";
  });

  let searchModal = document.querySelector(".search-modal");

  closeSearchIcon.addEventListener("click", function (e) {
    this.classList.add("d-none");
    searchIcon.classList.remove("d-none");
    searchModal.classList.add("d-none");
  });

  let products = document.querySelectorAll(".product");

  products.forEach((product) => {
    product.onmouseover = function () {
      this.children[2].classList.add("transforms");
    };
    product.onmouseout = function () {
      this.children[2].classList.remove("transforms");
    };
  });

  let modal = document.querySelector(".boxs-all");

  let openModalIcons = document.querySelectorAll(
    ".product .icons i:nth-child(2)"
  );
  let iconClose = document.querySelector(".boxs-all .close");

  openModalIcons.forEach((openModalIcon) => {
    openModalIcon.onclick = function () {
      modal.classList.remove("d-none");
      over.style.display = "block";
      let productImg =
        this.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].children[0].getAttribute(
          "src"
        );
      modal.children[0].children[0].children[0].children[0].setAttribute(
        "src",
        productImg
      );
      let productName =
        this.parentNode.previousElementSibling.children[2].innerText;
      modal.children[0].children[0].nextElementSibling.children[0].children[0].innerText =
        productName;
      body.style.overflowY = "hidden";
    };
  });
  iconClose.addEventListener("click", function () {
    over.style.display = "none";
    modal.classList.add("d-none");
    over.style.display = "none";
    body.style.overflowY = "auto";
  });



  let product = document.querySelector(".boxs");
  let basket = [];
  basket = JSON.parse(localStorage.getItem("basket"));
  

  for (const item of basket) {
   
    product.children[0].children[0].children[0].children[0].setAttribute("src",item.image);
    product.children[0].children[0].nextElementSibling.children[0].children[0].innerText =item.name;
  }


  let productBtns=document.querySelectorAll(".product .images a")
  let baskets = [];
  
  productBtns.forEach(productBtn => {
    productBtn.onclick=function(){
      
      
      let productImg=this.children[0].getAttribute("src");
      let productName=this.parentNode.parentNode.nextElementSibling.children[2].innerText;
      
        baskets.push({
          name:productName,
          image:productImg,
          count:1
        })
  
      localStorage.setItem("basket", JSON.stringify(baskets))
    }
  
  });
  
  let addToBasketIcons=document.querySelectorAll(".product .icons .fa-bag-shopping")
  
  let addToBasket=[]
  
  if (localStorage.getItem("addToBasket") != null) {
    addToBasket = JSON.parse(localStorage.getItem("addToBasket"))
  } else {
    document.querySelector(".basket .count").innerText="0";
  }
  
  if (addToBasket.length == 0) {
    document.querySelector(".basket .count").innerText="0";
  }
  
  
  function basketCount() {
    let basketCount = 0;
    for (const item of addToBasket) {
        basketCount += item.count;
    }
    return basketCount;
  }
  
  
  document.querySelector(".basket .count").innerText = basketCount();
  
  addToBasketIcons.forEach(addToBasketIcon => {
    addToBasketIcon.addEventListener("click", function (e) {
        e.preventDefault();
        let productName = this.parentNode.parentNode.previousElementSibling.children[2].innerText
        let productPrice = parseFloat(this.parentNode.parentNode.previousElementSibling.children[3].innerText.substring(1)) 
        let productImg = this.parentNode.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].children[0].getAttribute("src")
        
  
        let existProduct = addToBasket.find(m => m.name == productName);
  
          if (existProduct != undefined) {
              existProduct.count++;
          } else {
  
            addToBasket.push({
              image: productImg,
              name: productName,
              price: productPrice,
              count:1
      
            })
          }
        
        
  
          localStorage.setItem("addToBasket", JSON.stringify(addToBasket));
      
          document.querySelector(".basket .count").innerText = basketCount();
          document.querySelector(".basket .count").classList.remove("d-none");
      })
    });
  
  
    

    let addToWishlist = []

    let wishlistIcons = document.querySelectorAll(".product .icons .fa-heart")
    
    
  
    if (localStorage.getItem("addToWishlist") != null) {
      addToWishlist = JSON.parse(localStorage.getItem("addToWishlist"))
    } 
    else {
      document.querySelector(".wishlist .count").innerText="0"
    }
  
    if (addToWishlist.length == 0) {
      document.querySelector(".wishlist .count").innerText="0"
    }
  
  
    function wishlistCount() {
      let wishlistCount = 0;
      for (const item of addToWishlist) {
        wishlistCount += item.count;
      }
      return wishlistCount;
  }
  
  
  document.querySelector(".wishlist .count").innerText = wishlistCount();
  
  wishlistIcons.forEach(wishlistIcon => {
    wishlistIcon.addEventListener("click", function () {
        let productName = this.parentNode.previousElementSibling.children[2].innerText
        let productPrice = parseFloat(this.parentNode.previousElementSibling.children[3].innerText.substring(1)) 
        let productImg = this.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].children[0].getAttribute("src")
  
        let existProduct = addToWishlist.find(m => m.name == productName);
  
          if (existProduct != undefined) {
              existProduct.count++;
          } else {
  
            addToWishlist.push({
              name: productName,
              price: productPrice,
              image: productImg,
              count:1
      
            })
          }
        
        
  
          localStorage.setItem("addToWishlist", JSON.stringify(addToWishlist));
      
          document.querySelector(".wishlist .count").innerText = wishlistCount();
          document.querySelector(".wishlist .count").classList.remove("d-none");
      })
    });
});
