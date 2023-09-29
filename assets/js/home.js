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

closeSidebarIcon.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar")
})

let over=document.querySelector(".overlay")
openSidebarIcon.addEventListener("click", function(){
    over.style.display = "block";
})
over.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar")
    this.style.display = "none";
})

let searchIcon=document.querySelector(".icons .search")
let searchBox=document.querySelector(".search-modal")
let closeSearchIcon=docuument.querySelector(".icons .close")

searchBox.addEventListener("click", function(){
    this.classList.add("d-none")
    

})




})