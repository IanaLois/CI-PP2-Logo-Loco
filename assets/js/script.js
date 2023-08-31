document.addEventListener('DOMContentLoaded', function () {
    const usernameForm = document.getElementById('username-form');

    usernameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const startPage = document.querySelector('.start-page');
        const rulesAndDifficulty = document.querySelector('.rules-and-difficulty');
        const Rules = document.querySelector('.rules');
        const Difficulty = document.querySelector('.choose-difficulty');

        startPage.style.display = 'none';
        rulesAndDifficulty.style.display = 'block';
        Rules.style.display = 'block';
        Difficulty.style.display = 'block';
    });
});