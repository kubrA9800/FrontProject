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
    modal.classList.add("d-none")
    body.style.overflowY="auto"
    
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

$('div[data-slick]').slick() 


$('.products-carousel').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

$('.product-carousel').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });


$(".swinger-container").swinger();


let heartIcons=document.querySelectorAll(".product .icons .fa-heart");
heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener("click", function(){
        
       this.parentNode.nextElementSibling.style.display="block"
       this.parentNode.nextElementSibling.addEventListener("click", function(){
        this.style.display="none"
       })
        
    })
    
});

let products=document.querySelectorAll(".product")

products.forEach(product => {
    product.onmouseover=function(){
        this.children[2].classList.add("transforms")
    }
    product.onmouseout=function(){
        this.children[2].classList.remove("transforms")
        
    }

});
let modal = document.querySelector(".boxs")

let openModalIcons=document.querySelectorAll(".product .icons i:nth-child(2)")
let iconClose = document.querySelector(".boxs .close")

openModalIcons.forEach(openModalIcon => {
    openModalIcon.onclick=function(){
        modal.classList.remove("d-none")
        over.style.display = "block";
        let productImg=this.parentNode.previousElementSibling.previousElementSibling.children[0].children[0].children[0].getAttribute("src")
        modal.children[0].children[0].children[0].children[0].setAttribute("src",productImg)
        let productName=this.parentNode.previousElementSibling.children[2].innerText
     modal.children[0].children[0].nextElementSibling.children[0].children[0].innerText=productName
     body.style.overflowY="hidden"

    }
});
iconClose.addEventListener("click", function () {
    over.style.display ="none";
    modal.classList.add("d-none")
    over.style.display = "none";
    body.style.overflowY="auto"

    
})




let productBtns=document.querySelectorAll(".product .images a")

let basket = [];

productBtns.forEach(productBtn => {
  productBtn.onclick=function(){
    
    
    let productImg=this.children[0].getAttribute("src");
    let productName=this.parentNode.parentNode.nextElementSibling.children[2].innerText;
    
      basket.push({
        name:productName,
        image:productImg
      })

    localStorage.setItem("basket", JSON.stringify(basket))
  }

});



})