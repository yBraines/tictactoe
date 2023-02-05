const board = document.querySelector('.board');
const resultWindows = document.querySelector('.resultWindows').addEventListener('click', results);
const themes = document.querySelector('#themes').addEventListener('click', themesFunction)
let cells = document.getElementsByClassName('cell');


let turn = true;
let turnCount = 0;

board.addEventListener('click', clickFunction);
winVerify();

function clickFunction(event) {
  if((event.target.classList.contains("cell") && event.target.textContent == "") && turn == true) {
      event.target.style.color = "red";
      event.target.textContent = "O";
      document.querySelector('style').innerHTML = ` 
:root {
  --turn-hover: "X";
}
.empty:hover::after {
  color: rgba( 255, 255, 255, 0.4);
  content: var(--turn-hover);
}`
  event.target.classList.toggle("empty")
  turn = !turn;
  turnCount++;
  } else if((event.target.classList.contains("cell") && event.target.textContent == "") && turn == false) {
      event.target.style.color = "blue";
      event.target.textContent = "X";
      document.querySelector('style').innerHTML = ` 
:root {
  --turn-hover: "O";
}
.empty:hover::after {
  color: rgba( 255, 255, 255, 0.4);
  content: var(--turn-hover);
}`
  event.target.classList.toggle("empty")
  turn = !turn;
  turnCount++;
  }
  winVerify();
}
// WINNING AND DRAW VERIFY
// ////////////////////////
function winVerify() {
  let comb;
  for(let i = 1; i <= 8; i++) {
    switch(i) {
      case 1: 
      comb = cells[0].textContent + cells[1].textContent + cells[2].textContent;
      break;
      case 2: 
      comb = cells[3].textContent + cells[4].textContent + cells[5].textContent;
      break;
      case 3: 
      comb = cells[6].textContent + cells[7].textContent + cells[8].textContent;
      break;
      case 4: 
      comb = cells[0].textContent + cells[3].textContent + cells[6].textContent;
      break;
      case 5:
      comb = cells[1].textContent + cells[4].textContent + cells[7].textContent;
      break;
      case 6: 
      comb = cells[2].textContent + cells[5].textContent + cells[8].textContent;
      break;
      case 7:
      comb = cells[0].textContent + cells[4].textContent + cells[8].textContent;
      break;
      case 8: 
      comb = cells[2].textContent + cells[4].textContent + cells[6].textContent;
      break;
    }
      if(comb == "OOO") {
      document.querySelector('#playerOneWindow').style.visibility = "visible"
      board.removeEventListener('click', clickFunction)
      break;
    } else if(comb == "XXX") {
      document.querySelector('#playerTwoWindow').style.visibility = "visible"
      board.removeEventListener('click', clickFunction)
      break;
    }
  }
  if((comb != "XXX" && comb != "OOO") && turnCount == 9) {
      document.querySelector('#drawWindow').style.visibility = "visible"
      board.removeEventListener('click', clickFunction)
    }
}
// RESULTS AND RESTART
// ////////////////////////
function results(event) {
  if(event.target.textContent == "PLAY AGAIN") {
    document.location.reload(true);
  }
}
// THEMES
//////////////////////////
function themesFunction(choose) {
  if(choose.target.classList == "default") {
    document.querySelector('html').classList.add("default");
    document.querySelector('html').classList.remove("black");
  } else if(choose.target.classList == "black") {
    document.querySelector('html').classList.add("black");
    document.querySelector('html').classList.remove("default");
  }
}