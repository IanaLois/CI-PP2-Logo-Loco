document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const usernameForm = document.getElementById('username-form');
    const usernameInput = document.getElementById('username');
    const usernameDisplay = document.getElementById('username-display');
    const startPage = document.querySelector('.start-page');
    const rulesAndDifficulty = document.querySelector('.rules-and-difficulty');
    const levelDisplay = document.getElementById('level-display');
    const difficultyButtons = document.querySelectorAll('.difficulty-levels .button-style');
    const gamePage = document.querySelector('.game-page');

    /* Once the user enters a valid username the starting Home page is hidden
    and proceeds to Rules and Difficulty page. */
    usernameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;

        if (enteredUsername) {
            usernameDisplay.textContent = enteredUsername;

            startPage.style.display = 'none';
            rulesAndDifficulty.style.display = 'block';

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
                    gamePage.style.display = 'block';
                });
            }
        } else {
            startPage.style.display = 'block';
            rulesAndDifficulty.style.display = 'none';
            gamePage.style.display = 'none';
        }
    });
});