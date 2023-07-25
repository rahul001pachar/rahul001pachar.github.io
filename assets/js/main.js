/*
    Strata by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
window.onscroll = function () {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .nav .nav-item");
    changeActiveStatus(sections, navLi);
    updateProgress();
};
const changeActiveStatus = (sections, navLi) => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60)
            current = section.getAttribute("id");
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (current !== "" && li.href.includes(current))
            li.classList.add("active");
    });
};

const scrollElementIntoView = (e, query) => {
    document
        .querySelectorAll("#sidebar ul li")
        .forEach((li) => li.classList.remove("active"));
    e.classList.add("active");
    document.querySelector(query).scrollIntoView({ behaviour: "smooth" });
};
function updateProgress() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    let container = document.querySelector(".progress-container");
    if (scrolled >= 3) {
        container.classList.add("visible");
        container.classList.remove("none");
    } else {
        container.classList.remove("visible");
        container.classList.add("none");
    }

    document.getElementById("myBar").style.width = scrolled + "%";
}
try {
    (function ($) {
        var $window = $(window),
            $body = $("body"),
            $header = $("#header"),
            $footer = $("#footer"),
            $main = $("#main"),
            settings = {
                // Parallax background effect?
                parallax: true,

                // Parallax factor (lower = more intense, higher = less intense).
                parallaxFactor: 20,
            };

        // Breakpoints.
        breakpoints({
            xlarge: ["1281px", "1800px"],
            large: ["981px", "1280px"],
            medium: ["737px", "980px"],
            small: ["481px", "736px"],
            xsmall: [null, "480px"],
        });

        // Play initial animations on page load.
        $window.on("load", function () {
            window.setTimeout(function () {
                $body.removeClass("is-preload");
            }, 100);
        });

        // Touch?
        if (browser.mobile) {
            // Turn on touch mode.
            $body.addClass("is-touch");

            // Height fix (mostly for iOS).
            window.setTimeout(function () {
                $window.scrollTop($window.scrollTop() + 1);
            }, 0);
        }

        // Footer.
        breakpoints.on("<=medium", function () {
            $footer.insertAfter($main);
        });

        breakpoints.on(">medium", function () {
            $footer.appendTo($header);
        });

        // Header.

        // Parallax background.

        // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
        if (browser.name == "ie" || browser.mobile) settings.parallax = false;

        if (settings.parallax) {
            breakpoints.on("<=medium", function () {
                $window.off("scroll.strata_parallax");
                $header.css("background-position", "");
            });

            breakpoints.on(">medium", function () {
                $header.css("background-position", "left 0px");

                $window.on("scroll.strata_parallax", function () {
                    $header.css(
                        "background-position",
                        "left " +
                        -1 *
                        (parseInt($window.scrollTop()) /
                            settings.parallaxFactor) +
                        "px",
                    );
                });
            });

            $window.on("load", function () {
                $window.triggerHandler("scroll");
            });
        }

        // Main Sections: Three.

        const deps = [
            "Curoid",
            "Edutracker",
            "Convo",
            "BlogApp",
            "WeatherCast",
            "ASCE",
        ];
        $("#three").poptrox({
            caption: ($a) => {
                const str =
                    $a.next("h3").text().trim() +
                    ($a.next("h3").find("a").length == 2
                        ? "<a href=" +
                        $a.next("h3").find("a")[0].href +
                        " target='_blank' class='ml-2 icon brands fa-github'></a>" +
                        `${deps.includes($a.next("h3").text().trim())
                            ? "<a href=" +
                            $a.next("h3").find("a")[1].href +
                            " target='_blank' class='ml-2 icon brands fa-chrome'></a>"
                            : ""
                        }`
                        : "");

                return str;
            },
            overlayColor: "#2c2c2c",
            overlayOpacity: 0.85,
            popupCloserText: "",
            popupLoaderText: "",
            selector: ".work-item a.image",
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: true,
            windowMargin: breakpoints
                ? breakpoints.active("<=small")
                    ? 0
                    : 50
                : 0,
        });
    })(jQuery);
} catch (e) {
    console.log(e);
}
const scrollContainer = document.querySelector(".work-container");

scrollContainer.addEventListener("wheel", (evt) => {
    if (window.screen.availWidth > 760) {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    }
});
const mailTo = () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    console.log(name, email, message);
    window.location.href = `mailto:rahulpachar0786@gmail.com?subject=Feedback from ${name}&body=${message}%0A%0AThanks,%0A${name}`;
};
