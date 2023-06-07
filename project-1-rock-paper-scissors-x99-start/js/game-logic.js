// All code should be written in this file.
let playerOneMoveOneType
let playerOneMoveOneValue
let playerOneMoveTwoType
let playerOneMoveTwoValue
let playerOneMoveThreeType
let playerOneMoveThreeValue
let playerTwoMoveOneType
let playerTwoMoveOneValue
let playerTwoMoveTwoType
let playerTwoMoveTwoValue
let playerTwoMoveThreeType
let playerTwoMoveThreeValue
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if ((player==='Player One' || player==='Player Two') &&
    (moveOneType==='rock' || moveOneType==='paper' || moveOneType==='scissors') &&
    (moveTwoType==='rock' || moveTwoType==='paper' || moveTwoType==='scissors') &&
    (moveThreeType==='rock' || moveThreeType==='paper' || moveThreeType==='scissors') &&
    (moveOneValue>0)&&
    (moveTwoValue>0) &&
    (moveThreeValue>0)&&
    (moveOneValue+moveTwoValue+moveThreeValue<100)) {
        if (player==='Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player==='Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}
}
function getRoundWinner(roundNumber) {
    if (roundNumber===1) {
        if ((playerOneMoveOneType==='rock' && playerTwoMoveOneType==='scissors') ||
    (playerOneMoveOneType==='scissors' && playerTwoMoveOneType==='paper') ||
    (playerOneMoveOneType==='paper' && playerTwoMoveOneType==='rock') || 
    (playerOneMoveOneType===playerTwoMoveOneType && playerOneMoveOneValue>playerTwoMoveOneValue)) {
        return 'Player One'
    }
    else if (playerOneMoveOneType===playerTwoMoveOneType && playerOneMoveOneValue===playerTwoMoveOneValue) {
        return 'Tie';
    }
    else if ((playerTwoMoveOneType==='rock' && playerOneMoveOneType==='scissors') ||
    (playerTwoMoveOneType==='scissors' && playerOneMoveOneType==='paper') ||
    (playerTwoMoveOneType==='paper' && playerOneMoveOneType==='rock') || 
    (playerOneMoveOneType===playerTwoMoveOneType && playerTwoMoveOneValue>playerOneMoveOneValue)) {return 'Player Two'}
    else {return null}
}
    else if (roundNumber===2) {
        if ((playerOneMoveTwoType==='rock' && playerTwoMoveTwoType==='scissors') ||
        (playerOneMoveTwoType==='scissors' && playerTwoMoveTwoType==='paper') ||
        (playerOneMoveTwoType==='paper' && playerTwoMoveTwoType==='rock') || 
        (playerOneMoveTwoType===playerTwoMoveTwoType && playerOneMoveTwoValue>playerTwoMoveTwoValue)) {
            return 'Player One'
        }
        else if (playerOneMoveTwoType===playerTwoMoveTwoType && playerOneMoveTwoValue===playerTwoMoveTwoValue) {
            return 'Tie';
        }
        else if((playerTwoMoveTwoType==='rock' && playerOneMoveTwoType==='scissors') ||
        (playerTwoMoveTwoType==='scissors' && playerOneMoveTwoType==='paper') ||
        (playerTwoMoveTwoType==='paper' && playerOneMoveTwoType==='rock') || 
        (playerOneMoveTwoType===playerTwoMoveTwoType && playerTwoMoveTwoValue>playerOneMoveTwoValue)){return 'Player Two'}
        else {return null}
    }
    else if (roundNumber===3) {
        if ((playerOneMoveThreeType==='rock' && playerTwoMoveThreeType==='scissors') ||
        (playerOneMoveThreeType==='scissors' && playerTwoMoveThreeType==='paper') ||
        (playerOneMoveThreeType==='paper' && playerTwoMoveThreeType==='rock') || 
        (playerOneMoveThreeType===playerTwoMoveThreeType && playerOneMoveThreeValue>playerTwoMoveThreeValue)) {
            return 'Player One'
        }
        else if (playerOneMoveThreeType===playerTwoMoveThreeType && playerOneMoveThreeValue===playerTwoMoveThreeValue) {
            return 'Tie';
        }
        else if ((playerTwoMoveThreeType==='rock' && playerOneMoveThreeType==='scissors') ||
        (playerTwoMoveThreeType==='scissors' && playerOneMoveThreeType==='paper') ||
        (playerTwoMoveThreeType==='paper' && playerOneMoveThreeType==='rock') || 
        (playerOneMoveThreeType===playerTwoMoveThreeType && playerTwoMoveThreeValue>playerOneMoveThreeValue)){return 'Player Two'}
        else {return null}
    }
    else {return null}
}
function getGameWinner() {
    if ((getRoundWinner(1)==='Player One' && getRoundWinner(2)==='Player One') ||
    (getRoundWinner(1)==='Player One' && getRoundWinner(3)==='Player One') ||
    (getRoundWinner(2)==='Player One' && getRoundWinner(3)==='Player One') ||
    (getRoundWinner(1)==='Player One' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Tie') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Player One' && getRoundWinner(3)==='Tie') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Player One')) {
        return 'Player One';
    }
    else if ((getRoundWinner(1)==='Player Two' && getRoundWinner(2)==='Player Two') ||
    (getRoundWinner(1)==='Player Two' && getRoundWinner(3)==='Player Two') ||
    (getRoundWinner(2)==='Player Two' && getRoundWinner(3)==='Player Two') ||
    (getRoundWinner(1)==='Player Two' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Tie') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Player Two' && getRoundWinner(3)==='Tie') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Player Two')) {
        return 'Player Two';
    }
    else if ((getRoundWinner(1)==='Player One' && getRoundWinner(2)==='Player Two' && getRoundWinner(3)==='Tie') ||
    (getRoundWinner(1)==='Player One' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Player Two') ||
    (getRoundWinner(1)==='Player Two' && getRoundWinner(2)==='Player One' && getRoundWinner(3)==='Tie') ||
    (getRoundWinner(1)==='Player Two' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Player One') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Player One' && getRoundWinner(3)==='Player Two') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Player Two' && getRoundWinner(3)==='Player One') ||
    (getRoundWinner(1)==='Tie' && getRoundWinner(2)==='Tie' && getRoundWinner(3)==='Tie')) {return 'Tie'}
    else {return null}
    
}
function setComputerMoves() {
    const computerMoveOne = Math.floor(Math.random()*3);
    const computerMoveTwo = Math.floor(Math.random()*3);
    const computerMoveThree = Math.floor(Math.random()*3);
    function translateNumberToMove(computerMove) {
        if (computerMove===0) {return 'rock'}
        else if (computerMove===1) {return 'paper'}
        else {return 'scissors'}
    }
    //const computerMoveTwoVal = Math.floor(Math.random()*97 + 1);
    //const computerMoveThreeVal =
    //setPlayerMoves('Player Two', translateNumberToMove(computerMoveOne), Math.floor(Math.random()*97+1), translateNumberToMove(computerMoveTwo), Math.floor(Math.random()*97+1), translateNumberToMove(computerMoveThree), )
    playerTwoMoveOneType = translateNumberToMove(computerMoveOne);
    playerTwoMoveTwoType = translateNumberToMove(computerMoveTwo);
    playerTwoMoveThreeType = translateNumberToMove(computerMoveThree);
    playerTwoMoveOneValue = Math.floor(Math.random()*97 + 1);
    playerTwoMoveTwoValue = Math.floor(Math.random()*(playerTwoMoveOneValue) + 1);
    playerTwoMoveThreeValue = 99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue);
    }