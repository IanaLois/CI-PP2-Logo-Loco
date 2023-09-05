document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const usernameForm = document.getElementById('username-form');
    const usernameInput = document.getElementById('username');
    const usernameDisplay = document.getElementById('username-display');
    const invalidUsername = document.getElementById('username-alert');

    /* Displays an error message if username input fails to pass string validation of only letters,
     numbers and special characters "-" or "_". 
     Hides the starting home page by proceeding to the Rules and Difficulty page
      */
    usernameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;

        if (/^[a-zA-Z0-9_-]+$/.test(enteredUsername)) {
            usernameDisplay.textContent = enteredUsername;

            const startPage = document.querySelector('.start-page');
            const rulesAndDifficulty = document.querySelector('.rules-and-difficulty');
            const Rules = document.querySelector('.rules');
            const Difficulty = document.querySelector('.choose-difficulty');

            startPage.style.display = 'none';
            rulesAndDifficulty.style.display = 'block';
            Rules.style.display = 'block';
            Difficulty.style.display = 'block';
        } else {
            invalidUsername.style.display = 'block';
        }
    });
});