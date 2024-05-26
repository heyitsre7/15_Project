const form = document.querySelector('.goals-form');
const goalsInput = document.getElementById('Goals');
const goalsContainer = document.querySelector('.goals-container');
const goalsList = document.querySelector('.goals-list');
const clearBtn = document.querySelector('.clear-btn');


form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);


function addItem(e) {
    e.preventDefault();
    const value = goalsInput.value;

    if (value) {
        const element = document.createElement('article');
        element.classList.add('goals-item');

        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="delete-btn">delete</button>
        </div>`;

        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);

        goalsList.appendChild(element);
        goalsContainer.style.display = 'block';
        goalsInput.value = '';
    }
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    goalsList.removeChild(element);

    if (goalsList.children.length === 0) {
        goalsContainer.style.display = 'none';
    }
}

function clearItems() {
    while (goalsList.firstChild) {
        goalsList.removeChild(goalsList.firstChild);
    }
    goalsContainer.style.display = 'none';
}
