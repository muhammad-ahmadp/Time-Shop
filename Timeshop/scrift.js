const hamburgerbtn = document.querySelector(".hamburger");
const nav_list = document.querySelector(".nav-list");
hamburgerbtn.addEventListener("click", () => {
    hamburgerbtn.classList.toggle("active");
    nav_list.classList.toggle("active");
});