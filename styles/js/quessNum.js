var correctGuess = 0;
var guessesTaken = 0;
var maxGuesses = 7;
var gameDone = 0;

var newGame = function() { 
  var lbl = document.getElementById('inputLabel');
  lbl.innerHTML = " ";
  guessesTaken = 0;
  correctGuess = Math.floor((Math.random() * 100)+1);
};

newGame();

var btnReset = document.getElementById('btnReset');
btnReset.onclick = newGame;

var response = function(txtGuess) {
  var answer;
  
  while (guessesTaken < maxGuesses && gameDone == 0) {
    if (txtGuess == correctGuess) {
      answer = "ВЕРНО! ";
    } else if (txtGuess < correctGuess && txtGuess > 0) {
      answer = "/Больше, ";
    } else if (txtGuess > correctGuess && txtGuess < 101) {
      answer = "/Меньше, ";
    } else {
      answer = "Введите число, ";
      return answer; /*exit loop to prevent increasing guessesTaken*/
    }
    
    guessesTaken += 1;
    return answer;
  }
  
  return "Новая игра?";
};

var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.onclick = function(e) {
  var txtGuess = document.getElementById('guess').value;
  var answer = response(txtGuess);
  var remainingMessage = (maxGuesses - guessesTaken).toString() + " осталось попыток"; 
  var lbl = document.getElementById('inputLabel');
  if (gameDone == 0) {
    if (answer == "ВЕРНО! ") {
      lbl.innerHTML += answer + "<p> Играть заново </p>";
      gameDone = 1;
    } else if (guessesTaken == maxGuesses) {
      lbl.innerHTML += "<p> Вы проиграли. Новая игра? </p>";
      gameDone = 1;
    } else {
      lbl.innerHTML += "<span id='response'>" + txtGuess + "</span>" + answer + remainingMessage + "<br />";
    }
  }
  var txtGuess = document.getElementById('guess');
  txtGuess.value = null;
  return false;
};