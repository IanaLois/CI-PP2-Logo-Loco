document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const usernameForm = document.getElementById('username-form');
    const usernameInput = document.getElementById('username');
    const usernameDisplay = document.getElementById('username-display');
    const invalidUsername = document.getElementById('username-alert');
    const startPage = document.querySelector('.start-page');
    const rulesAndDifficulty = document.querySelector('.rules-and-difficulty');
    const Rules = document.querySelector('.rules');
    const Difficulty = document.querySelector('.choose-difficulty');
    const levelDisplay = document.getElementById('level-display');
    const difficultyButtons = document.querySelectorAll('.difficulty-levels .button-style');
    const gamePage = document.querySelector('.game-page');

    /* Displays an error message if username input fails to pass string validation of only letters,
       numbers and special characters "-" or "_". Hides starting Home page by 
       proceeding to Rules and Difficulty page. */
    usernameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;

        if (/^[a-zA-Z0-9_-]+$/.test(enteredUsername)) {
            usernameDisplay.textContent = enteredUsername;

            startPage.style.display = 'none';
            rulesAndDifficulty.style.display = 'block';
            Rules.style.display = 'block';
            Difficulty.style.display = 'block';

            /* Once the game mode, easy, medium, or hard is chosen, it will be shown
               alongside the default icons. Hides Rules and Difficulty page by 
               proceeding to Game page */
            for (let i = 0; i < difficultyButtons.length; i++) {
                const button = difficultyButtons[i];
                button.addEventListener('click', function () {
                    const selectedLevel = button.textContent;

                    levelDisplay.textContent = `${selectedLevel}`;
                    levelDisplay.classList.add('btn-level-selected');
                    rulesAndDifficulty.style.display = 'none';
                    Rules.style.display = 'none';
                    Difficulty.style.display = 'none';
                    gamePage.style.display = 'block';
                });
            }
        } else {
            invalidUsername.style.display = 'block';
        }
    });
});