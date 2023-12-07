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
    const questionCounter = document.getElementById('questionNumber');
    const logo = document.getElementById('question');
    const answers = document.getElementsByClassName('option');

    const questions = [
        {
            logo: 'https://i.pinimg.com/736x/58/8a/94/588a9407916f548efb85829241accbae.jpg',
            correctAnswer: 'Carhartt',
            answers: ['Closed', 'Canada Goose', 'Columbia', 'Carhartt'],
        },
        {
            logo: 'https://gregkocis.com/wp-content/uploads/2016/10/Fender-F-Logo-250x250.jpg',
            correctAnswer: 'Fender',
            answers: ['Fossil', 'Fender', 'Firetrap', 'Frijj'],
        },
        {
            logo: 'https://logowik.com/content/uploads/images/529_ysl.jpg',
            correctAnswer: 'Yves Saint Laurent',
            answers: ['Yves Saint Laurent', 'YDX', 'Yummie', 'Yosi Samra Kids'],
        },
        {
            logo: 'https://1000logos.net/wp-content/uploads/2016/11/Shape-Coach-Logo.jpg',
            correctAnswer: 'Coach',
            answers: ['Tory Burch', 'Cuyana', 'Coach', 'Longchamp'],
        },
        {
            logo: 'https://www.pngitem.com/pimgs/m/219-2192790_ps-plus-logo-png-plus-playstation-transparent-png.png',
            correctAnswer: 'PS Plus',
            answers: ['PS5', 'PS2', 'PS Plus', 'PS Gold'],
        },
        {
            logo: 'https://i.pinimg.com/280x280_RS/59/1c/fc/591cfc0f606ecb8053c3082b598df625.jpg',
            correctAnswer: 'Jollibee',
            answers: ['Burts Bees', '3Bee', 'B Sweet', 'Jollibee'],
        },
        {
            logo: 'https://logowik.com/content/uploads/images/discord-new-20218785.jpg',
            correctAnswer: 'Discord',
            answers: ['ClickUp', 'Chanty', 'Discord', 'Mumble'],
        },
        {
            logo: 'https://quizbash.com/assets/img/games/logo-vansv-r.jpg',
            correctAnswer: 'Vans',
            answers: ['Volcom', 'Vince', 'Vans', 'Varley'],
        },
        {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/UNIQLO_logo_%28Japanese%29.svg/800px-UNIQLO_logo_%28Japanese%29.svg.png',
            correctAnswer: 'UNIQLO',
            answers: ['UNIQLO', 'U Name It', 'UETA Club', 'UME'],
        },
        {
            logo: 'https://logosandtypes.com/wp-content/uploads/2020/08/Wilson.png',
            correctAnswer: 'Wilson',
            answers: ['Whoopi', 'Wilson', 'Wacoal', 'Wolford'],
        },
    ];

    let questionNumber = 0;

    function getQuestion() {
        questionCounter.innerHTML = questionNumber + 1;
        let i = 0;

        logo.src = questions[questionNumber].logo;

        for (let answer of answers) {
            answer.innerHTML = questions[questionNumber].answers[i];
            i++;
            answer.addEventListener('click', (event) => {
                if (
                    event.target.innerHTML === questions[questionNumber].correctAnswer
                ) {
                    console.log('woooooop');
                    questionNumber++;
                    if (questionNumber > questions.length) {
                        console.log('end the game here');
                    } else {
                        getQuestion();
                    }
                }
            });
        }
    }

    /* Once the user enters a valid username the starting Home page is hidden
        and proceeds to Rules and Difficulty page. */
    usernameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;

        if (enteredUsername && enteredUsername.length > 3 && enteredUsername.length < 8) {
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

                    getQuestion();
                });
            }
        } else {
            startPage.style.display = 'block';
        }
    });
});