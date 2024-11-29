const header = document.querySelector("header");
const navBtn = document.querySelector("nav ul li button")
document.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 500) {
        header.classList.add("headerColor2");
        

        navBtn.classList.add("btnColor2");
        navBtn.classList.remove("btnColor1");
    } else {
        header.classList.remove("headerColor2");
        header.classList.add("headerColor1");

        navBtn.classList.remove("btnColor2");
        navBtn.classList.add("btnColor1")
    }
})
