const nav = document.getElementById('logo-container');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    console.log(window.innerWidth)
    if (window.innerWidth > 480) return
    if (lastScrollY < window.scrollY) {
        nav.classList.add("logo-container-minimized");
        console.log("up")
    } else {
        nav.classList.remove("logo-container-minimized");
        console.log("down")
    }
    lastScrollY = window.scrollY;
});