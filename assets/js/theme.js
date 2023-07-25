const toDark = (event) => {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
    event.value = "Dark";
    event.classList.remove("btn-light");
    event.classList.add("btn-dark");

    document.querySelector("meta[name='theme-color']").content = "#2a2e35";
    // document.querySelector("#theme").classList.remove("fa-sun");
    document.querySelector("#theme").src = "/images/moon.svg";
    document.querySelector("#avatar").src = "/images/avatar_dark.png";

    // document.querySelector("#theme").classList.add("fa-moon");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
};
const toLight = (event) => {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
    event.value = "Light";
    document.querySelector("meta[name='theme-color']").content = "#ffffff";
    // document.querySelector("#theme").classList.remove("fa-moon");
    // document.querySelector("#theme").classList.add("fa-sun");
    document.querySelector("#theme").src = "/images/sun.svg";
    document.querySelector("#avatar").src = "/images/avatar.png";

    event.classList.add("btn-light");
    event.classList.remove("btn-secondary");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
};

// console.log("hilo");
const toggle = (event) => {
    if (event.value === "Light") {
        toDark(event);
    } else {
        toLight(event);
    }
};
try {
    const theme = localStorage.getItem("theme");
    if (theme) {
        if (theme === "light") toLight(document.querySelector("#themeToggler"));
        else toDark(document.querySelector("#themeToggler"));
    }
} catch (e) {
    console.log(e);
}
