window.addEventListener("load", function () {
    var title = document.querySelectorAll(".animate__animated");
    for (var i = 0; i < title.length; i++) {
        title[i].classList.add("animate__fadeInDown");
    }
});