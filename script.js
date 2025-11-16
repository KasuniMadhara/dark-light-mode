const button = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");

button.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
}else{
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
}

});



