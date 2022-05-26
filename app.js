let hamburger =document.querySelector(".ham");
let unlist =document.querySelector(".unlist");
let  times = document.querySelector(".times");

hamburger.addEventListener("click", () =>{
    unlist.style.display = "block";
});
times.addEventListener("click", () =>{
    unlist.style.display ="none"
})
