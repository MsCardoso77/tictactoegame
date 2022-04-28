class NewGame {
  constructor(player, playerX, playerO, xwin, owin) {
    this.player = player;
    this.playerX = playerX;
    this.playerO = playerO;
    this.inGame = true;
    this.checkTie = 0;
  }

  restart() {
    location.reload();
  }

  winVerify() {
    let winGame = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ];

    let result;

    let finishResult;

    this.checkTie++;

    winGame.forEach((winVector) => {
      result = 0;
      winVector.forEach((element) => {
        const isValid =
          this.player === "X"
            ? this.playerX.indexOf(element)
            : this.playerO.indexOf(element);
        if (isValid === -1) result = isValid;
      });
      if (result !== -1) {
        this.inGame = false;
        finishResult = 1;
        console.log(`Jogador ${this.player} ganhou!`);
        if (this.player === "X") {
            document.getElementById("ingame").style.display="none";
            document.getElementById("xwin").style.display="block";
            restart.style.display="inline-block";
        } else {
            document.getElementById("ingame").style.display="none";
            document.getElementById("owin").style.display="block";
            restart.style.display="inline-block";
        }
      }
    });

    if (finishResult !== 1 && this.checkTie === 9) {
      document.getElementById("ingame").style.display="none";
      document.getElementById("tie").style.display="block";
      restart.style.display="inline-block";
    }
  }

  switchPlayer() {
    if (this.player === "X") {
      this.player = "O";
    } else this.player = "X";
    return this.player;
  }

  clickFunction(position, number) {
    if (position.innerHTML !== "" || !this.inGame) return;
    let player = this.switchPlayer();
    position.innerHTML = player;
    if (player === "X") {
      this.playerX.push(number);
    } else this.playerO.push(number);
    console.log("Player X:" + this.playerX, "Player O:" + this.playerO);
    this.winVerify();
  }
}

const position1 = document.getElementById("one");
const position2 = document.getElementById("two");
const position3 = document.getElementById("three");
const position4 = document.getElementById("four");
const position5 = document.getElementById("five");
const position6 = document.getElementById("six");
const position7 = document.getElementById("seven");
const position8 = document.getElementById("eight");
const position9 = document.getElementById("nine");
const restart = document.getElementById("restart");

let player = "O";
let playerX = [];
let playerO = [];

const tictactoe = new NewGame(player, playerX, playerO, xwin, owin);

position1.addEventListener("click", (button) => {
  tictactoe.clickFunction(position1, 1);
});
position2.addEventListener("click", (button) => {
  tictactoe.clickFunction(position2, 2);
});
position3.addEventListener("click", (button) => {
  tictactoe.clickFunction(position3, 3);
});
position4.addEventListener("click", (button) => {
  tictactoe.clickFunction(position4, 4);
});
position5.addEventListener("click", (button) => {
  tictactoe.clickFunction(position5, 5);
});
position6.addEventListener("click", (button) => {
  tictactoe.clickFunction(position6, 6);
});
position7.addEventListener("click", (button) => {
  tictactoe.clickFunction(position7, 7);
});
position8.addEventListener("click", (button) => {
  tictactoe.clickFunction(position8, 8);
});
position9.addEventListener("click", (button) => {
  tictactoe.clickFunction(position9, 9);
});
restart.addEventListener("click", (button) => {
  tictactoe.restart();
})