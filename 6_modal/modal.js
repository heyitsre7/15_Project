let button = document.querySelector(".btn");
let modal = document.querySelector('.modal-overlay');
let closeBtn = document.querySelector(".close-btn");

button.addEventListener('click', function() {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove("open-modal");
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove("open-modal");
    }
});
