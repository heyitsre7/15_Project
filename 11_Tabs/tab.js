const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

btnContainer.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        // Remove active class from all buttons
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        // Add active class to clicked button
        e.target.classList.add("active");

        // Remove active class from all articles
        articles.forEach(function(article) {
            article.classList.remove("active");
        });
        // Add active class to corresponding article
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
