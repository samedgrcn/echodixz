/* ==================================================================================================== */
/* COLLAPSE */
let navBtn = document.querySelectorAll(".nav-btn");
for (var i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", (e) => {
        document.getElementById('nav').classList.toggle("show");
    });
}
/* ==================================================================================================== */