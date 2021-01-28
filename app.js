const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });
        //comnputer options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option=>{
            option.addEventListener("click", function(){
                //computer choice
                const computerNumbers = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumbers];
                //console.log(computerChoice);
                 setTimeout(()=>{
                    //here we call compare hands
                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                 },2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";


            });
        });

    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;//player score
        computerScore.textContent = cScore; // computer score

    };

    const compareHands = (playerchoice, computerChoice) =>{
        //update text
        const winner  = document.querySelector('.winner');
        if(playerchoice===computerChoice)
        {
            winner.textContent = 'It is a tie';
            return;
        }
        //check for rock
        if(playerchoice ==='rock'){
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'player wins';
                pScore++;
            }
            else
            {
                winner.textContent = 'computer wins';
                cScore++;
            }
            updateScore();
            return;
        }
        //check for paper
        if(playerchoice ==='paper'){
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'computer wins';
                cScore++;
            }
            else
            {
                winner.textContent = 'player wins';
                pScore++;
            }
            updateScore();
            return;
        }
        //check for scissors
        if(playerchoice ==='scissors'){
            if(computerChoice === 'rock')
            {
                winner.textContent = 'computer wins';
                cScore++;
            }
            else
            {
                winner.textContent = 'player wins';
                pScore++;
            }
            updateScore();
            return;
        }


    }

    //call the inner functions
    startGame();
    playMatch();
}

//start the main game function
game();