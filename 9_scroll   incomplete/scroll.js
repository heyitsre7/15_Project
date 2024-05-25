// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** fixed navbar ************
const navbar = document.getElementById("navbar");
const topLink = document.getElementById("top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth'
        });
    });
});

// ********** explore button scroll ************
const exploreButton = document.getElementById("explore-button");
exploreButton.addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    const navHeight = navbar.getBoundingClientRect().height;
    const position = element.offsetTop - navHeight;

    window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
    });
});