const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector('.login__form');

const VarDateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = "game.html";
}

input.addEventListener('input', VarDateInput);
form.addEventListener('submit', handleSubmit);