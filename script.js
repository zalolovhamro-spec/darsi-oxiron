const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
});
