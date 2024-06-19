'use strict';
const player0Element = document.querySelector('.player-0');
const player1Element = document.querySelector('.player-1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-newGame')
const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold ')

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

//switching palyer function 
const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');

};
let currentScore, activePlayer, Score, playing;
const init = function(){
    // starting conditions 
    currentScore = 0;
    activePlayer = 0;
    Score = [0,0];
    playing = true;

score0Element.textContent = 0;
score1Element.textContent = 0;
current0Element.textContent = 0;
current1Element.textContent = 0;

diceElement.classList.add('hidden');
player0Element.classList.remove('player--winner')
player1Element.classList.remove('player--winner')
player0Element.classList.add('player--active');
player1Element.classList.remove('player--active');


    
}


btnRoll.addEventListener('click',function(){
    if(playing){
    //1. Generate a random dice roll
    const dice =Math.trunc(Math.random()*6)+1;
    // 2. display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //3. check for rolled 1: if true switch to next palyer
    if (dice !== 1) {
        currentScore = currentScore + dice; 
        // current0Element.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    }else{
        switchPlayer();
        
    }
}
    
})

btnHold.addEventListener('click',function(){
    if(playing){
    // add current score to active player
    Score[activePlayer] += currentScore ;

    document.getElementById(`score--${activePlayer}`).textContent = Score[activePlayer];

    // check if player's score is >= 100
    if  (Score[activePlayer]>= 50){

        playing = false
        document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');

        diceElement.classList.add('hidden');


    }else{
        
        //switching players
        switchPlayer();
    }
}

})
btnNew.addEventListener('click',init);