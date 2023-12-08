document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const usernameForm = document.getElementById('username-form');
    const usernameInput = document.getElementById('username');
    const usernameDisplay = document.getElementById('username-display');
    const startPage = document.querySelector('.start-page');
    const rulesAndPlayNow = document.querySelector('.rules-and-playnow');
    const playNowButton = document.getElementById('play-now-button');
    const gamePage = document.querySelector('.game-page');
    const questionDisplay = document.querySelector('.questionDisplay')
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
            logo: 'https://logosandtypes.com/wp-content/uploads/2020/10/Xbox.png',
            correctAnswer: 'XBOX',
            answers: ['BOX', 'ABOX', 'XBOX', 'YBOX'],
        },
        {
            logo: 'https://1.bp.blogspot.com/-iOGy2zMYJkI/T4FPobMLe5I/AAAAAAAACD0/wiAwrjecBVA/s1600/logo1066.png',
            correctAnswer: 'Aldi',
            answers: ['Ashwood', 'Adesso', 'ABS', 'Aldi'],
        },
        {
            logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112011/ps_0.gif?itok=ZV_8y3WP',
            correctAnswer: 'PS Plus',
            answers: ['PS Life', 'PS Awards', 'PS Plus', 'PS Gold'],
        },
        {
            logo: 'https://i.pinimg.com/280x280_RS/59/1c/fc/591cfc0f606ecb8053c3082b598df625.jpg',
            correctAnswer: 'Jollibee',
            answers: ['Burts Bees', '3Bee', 'B Sweet', 'Jollibee'],
        },
        {
            logo: 'https://static.vecteezy.com/system/resources/previews/024/455/369/non_2x/the-north-face-brand-symbol-red-logo-clothes-design-icon-abstract-illustration-free-vector.jpg',
            correctAnswer: 'The North Face',
            answers: ['The Summer Living Company', 'Thomas Sabo', 'The North Face', 'Thermos'],
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
        {
            logo: 'https://media.baamboozle.com/uploads/images/410104/1640753043_9758.jpeg',
            correctAnswer: 'Nintendo',
            answers: ['Nintendo', 'Natori', 'Nevados', 'Nikita'],
        },
        {
            logo: 'https://logosquiz.net/data/logoquiz/images/acer_3.png',
            correctAnswer: 'Acer',
            answers: ['Air', 'Agar', 'Aor', 'Acer'],
        },
        {
            logo: 'https://1000logos.net/wp-content/uploads/2020/04/Emblem-Dolby-Digital.jpg',
            correctAnswer: 'Dolby',
            answers: ['Dolby', 'Definitive Brewery', 'Dooney & Bourke', 'DYCE'],
        },
        {
            logo: 'https://s1.mzstatic.com/us/r30/Purple/v4/e1/9d/85/e19d85f7-22e2-5e2c-44d7-fa9e58b386fe/9mNP6vEyLCd5dkAVpPEZBg-temp-upload.arehzhhb.jpg',
            correctAnswer: 'JYSK',
            answers: ['Linux', 'Penguin Books', 'The Duck Brand', 'JYSK'],
        },
        {
            logo: 'https://corporate.target.com/getmedia/890f3192-ce35-496a-a3cf-15fc0a8105d0/Target_Bullseye-Logo_Red.jpg',
            correctAnswer: 'Target',
            answers: ['Arrows', 'Darts', 'Bullseye', 'Target'],
        },
        {
            logo: 'https://i.pinimg.com/474x/44/37/a5/4437a5d36230a9273de138e1a8568c7a.jpg',
            correctAnswer: 'Samsonite',
            answers: ['Osprey', 'Monos', 'RIMOWA', 'Samsonite'],
        },
        {
            logo: 'https://i.pinimg.com/736x/0d/86/5f/0d865f1d7ed14ebc2e579059f088430f.jpg',
            correctAnswer: 'Crocs',
            answers: ['Gator & Co', 'Crocodile Garments', 'Crocs', 'Gator Cases'],
        },
        {
            logo: 'https://drewsdecals.com/wp-content/uploads/2020/08/products-Corporate-Logo-Decals-Dc-Shoes-Decal-Sticker-Style-1-Vinyl-Decal-Sticker__63264.1506196189.jpg',
            correctAnswer: 'DC Shoes',
            answers: ['Dr.Martens', 'DC Shoes', 'Dune London', 'DVS Shoes'],
        },
        {
            logo: 'https://i.pinimg.com/736x/67/40/d5/6740d50dd14ff6f45d2e458942b9dc79.jpg',
            correctAnswer: "Wendy's",
            answers: ["Audrey's", "Daisy's", "Lucy's", "Wendy's"],
        },
        {
            logo: 'https://static.vecteezy.com/system/resources/previews/020/336/399/original/yamaha-logo-yamaha-icon-free-free-vector.jpg',
            correctAnswer: 'Yamaha',
            answers: ['Kawai', 'Yamaha', 'Takamine', 'Korg'],
        },
    ];

    let questionNumber = 0;

    function getQuestion() {
        questionDisplay.style.display = "block";
        questionCounter.innerHTML = `Question ${questionNumber + 1}`;
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
        and the screen proceeds to the Rules and Play Now page. */

    usernameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;

        if (enteredUsername.length) {
            usernameDisplay.textContent = enteredUsername;
            startPage.style.display = 'none';
            rulesAndPlayNow.style.display = 'block';

            playNowButton.addEventListener('click', function () {
                rulesAndPlayNow.style.display = 'none';
                gamePage.style.display = 'block';
                getQuestion();
            });
        }
    });
});