$(function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $(".navbar").addClass("nav-shadow");
        } else {
            $(".navbar").removeClass("nav-shadow");
        }
    });
});
