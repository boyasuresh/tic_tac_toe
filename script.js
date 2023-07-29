var person = 1;
const arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var gamesPlayed=0;
var personOneWins=0;
var personTwoWins=0;

function changeColor(event) {
    var element = window.event.target;
    
    let i = element.dataset.number - 1;
    if (person == 1 && arr[i] < 0) {
        arr[i] = 0;
        element.style.backgroundColor = "red";
        person--;
    } else if (person == 0 && arr[i] < 0) {
        arr[i] = 1;
        element.style.backgroundColor = "green";
        person++;
    }
    if (arr[i] > -1 && check(i)) {
    for (var j = 0; j < 9; j++) {
        arr[j] = -1;
    }
    document.getElementsByClassName("games").textContent =gamesPlayed;
    document.getElementsByClassName("player1").textContent =personOneWins+"wins";
    document.getElementsByClassName("player2").textContent =personTwoWins+"wins";
    alert((person === 0 ? "Player 1's" : "Player 2's") + " Game");
    //location.reload();
    const winner = person === 0 ? "Player 1" : "Player 2";
    gamesPlayed++;
    updateGameCounter();
    updatePlayerWins(winner);
    resetBoard();
    
    }
}

function check(i) {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
    ];
  
    const currentPlayer = arr[i];
  
    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return arr[a] === currentPlayer && arr[b] === currentPlayer && arr[c] === currentPlayer;
    });
  
}
function resetBoard() {
    const cells = document.getElementsByClassName("select");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "";
    }
    person = 1;
    arr.fill(-1);
  }
  function updateGameCounter() {
    document.querySelector(".games").textContent = gamesPlayed;
  }

  function updatePlayerWins(winner) {
    if (winner === "Player 1") {
      personOneWins++;
      document.querySelector(".player1").textContent = personOneWins + " wins";
    } else {
      personTwoWins++;
      document.querySelector(".player2").textContent = personTwoWins + " wins";
    }
  }
  function endGame(){
    if(personOneWins>personTwoWins){
      document.querySelector(".displayresults").textContent = "player 1 wins the game.";
    }
    else if(personOneWins<personTwoWins){
      document.querySelector(".displayresults").textContent = "player 2 wins the game.";
    }
    else{
      document.querySelector(".displayresults").textContent = "Both players got same score it's a Draw.";
    }
    setTimeout(function() {
      document.querySelector(".displayresults").style.display = "none";
      location.reload();
  }, 5000); 
  }
  