const icons=document.querySelector(".icon");
const toggles=document.querySelector(".ul");
icons.addEventListener("click",()=>{
    toggles.classList.toggle("toggled")
    if(icons.firstElementChild.classList.contains("fa-bars")){
        icons.firstElementChild.classList.replace("fa-bars","fa-times")
    }
    else{
        icons.firstElementChild.classList.replace("fa-times","fa-bars") 
    }
})

