const ham = document.getElementById("ham");
const ulHideShow = document.getElementById("ulHideShow")
const threelines  = document.getElementById("threelines")
const cross = document.getElementById("cross")
ham.addEventListener("click",(e)=>{
   ulHideShow.classList.toggle("hidden")
   if (ulHideShow.classList.contains("hidden")) {
    cross.style.display = "inline-block"
    threelines.style.display = "none"
}
else{
 cross.style.display = "none"
    threelines.style.display = "inline-block"
}
})
