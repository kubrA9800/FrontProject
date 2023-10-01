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

let links=document.querySelectorAll("#login-registr-all .head h2")

links.forEach(link => {
    link.addEventListener("click", function(){
        let active=document.querySelector(".active")
        active.classList.remove("active")
        this.classList.add("active")

        let id=this.getAttribute("data-id")

        let boxs=document.querySelectorAll(".box")
        for (const box of boxs) {
            if(box.getAttribute("data-id")===id){
                box.classList.remove("d-none")
            }
            else{
                box.classList.add("d-none")
            }
            
        }
    })

    
});

// let accountLogin=document.querySelector("#login-registr-all .head h2:nth-child(1)")
// let accountRegister=document.querySelector("#login-registr-all .head h2:nth-child(2)")
// let loginBox=document.querySelector("#login-registr-all .login")
// let registrBox=document.querySelector("#login-registr-all .register")

// accountLogin.addEventListener("click", function(){
//     if(this.classList.contains("none-active")){
//        this.classList.remove("none-active") 
//        accountRegister.classList.add("none-active")
//     }
// })
// accountRegister.addEventListener("click", function(){
//     if(this.classList.contains("none-active")){
//        this.classList.remove("none-active") 
//        accountLogin.classList.add("none-active")
//     }
// })







})