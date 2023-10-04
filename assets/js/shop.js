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



let openCategories=document.querySelectorAll("#products .left .opens .icon")
console.log(openCategories);
openCategories.forEach(openCategory => {
    openCategory.addEventListener("click", function(){
        this.parentNode.nextElementSibling.classList.toggle("d-none")
    })
});

(function() {

    var parent = document.querySelector(".range-slider");
    if(!parent) return;
  
    var
      rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
  
    rangeS.forEach(function(el) {
      el.oninput = function() {
        var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);
  
        if (slide1 > slide2) {
                  [slide1, slide2] = [slide2, slide1];
          // var tmp = slide2;
          // slide2 = slide1;
          // slide1 = tmp;
        }
  
        numberS[0].value = slide1;
        numberS[1].value = slide2;
      }
    });
  
    numberS.forEach(function(el) {
      el.oninput = function() {
              var number1 = parseFloat(numberS[0].value),
                      number2 = parseFloat(numberS[1].value);
              
        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }
  
        rangeS[0].value = number1;
        rangeS[1].value = number2;
  
      }
    });
  
  })();


})