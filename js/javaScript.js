document.addEventListener("DOMContentLoaded", e=>{
    document.addEventListener("click", e=>{
        if(e.target.matches(".burger-menu") || e.target.matches(".burger-menu i")){
            document.querySelector(".navegation-responsive").classList.toggle("translate-0");
        }
    })
})