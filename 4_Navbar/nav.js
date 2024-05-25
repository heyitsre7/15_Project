document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = document.querySelectorAll(".navbar-right a");

    socialLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const url = event.currentTarget.href;
            window.open(url, '_blank');
        });
    });
});
