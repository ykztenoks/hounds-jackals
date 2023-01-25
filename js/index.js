const canvas = document.getElementById("gameboard")
const ctx = canvas.getContext('2d')

//const logo = new Image() // logo 

const gameboard = new Image() // gameboard 
gameboard.src = "./src/HJGameBoard.png"

const houndsGP = new Image() // Hounds game piece 
houndsGP.src ="./src/Houndgamepiece.png"

const jackalsGP = new Image() //Jackals game pieces
jackalsGP.src ="./src/jackalgamepiece.png"

const coin = document.querySelector(`#coin`);
const button = document.querySelector(`#flip-button`);
const result = document.querySelector(`#result`);


//ctx.drawImage(gameboard, 0, 0, 800, 800)

//Start Coin animation & code 

function deferFn(callback, ms) {
  setTimeout (callback, ms);
}

function processResult(result) {
  result.innerText = result.toUpperCase ();
}

function flipCoin() {
  coin.setAttribute(`class`, '');
  console.log("flipping")
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  deferFn (function() {
    coin.setAttribute(`class`, `animate-` + result);
    deferFn(processResult.bind(null, result), 2900)
  }, 100);
}

//Codes for game play using boardgame.io

import { Client } from 'boardgame.io/client';

const client = Client ({
  game : game, 
  numPlayers: 2, 
})

// document.getElementById("#coin-flip-cont").onclick = function() {

//   let spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];
  
//   function getSpin() {
//   let spin = spinArray[Math.floor(Math.random()*spinArray.length)];
//   return spin;
//   }
  
//   $('#coin').on('click', function(){
  
//   $('#coin').removeClass();
  
//   setTimeout(function(){
//   $('#coin').addClass(getSpin());
//   }, 100);
  
//   });
  
//   };

  // window.onload = function() {
  //   document.getElementById("start-coin").onclick = function() {
  //     startGame();
  //   };
  // };
 
    
    // animationLoop()
    // generatePipes()
  
  //}

    function startGame() {
      document.getElementById("startplaywin").style.display = "flex"
    console.log("Starting")
    document.getElementById("startplaywin").style.visibility = "visible"
    //logo.style.visibility = "hidden"
    //logo.style.height = "0px"
    canvas.width = "800"
    canvas.height = "750"
    canvas.style.visibility = "visible"
    canvas.style.display = "inherit"
  
    ctx.drawImage(gameboard, 0, 0, 800, 800)
}

  window.onload = function() {
    document.getElementById("game-instructions").onclick = function() {
      console.log("hitting button")
      ctx.drawImage(gameboard, 0, 0, 800, 800,)
      startGame();
    };
    // document.getElementById("startplaywin").onclick = function () {

    
  };

  button.addEventListener(`click`, flipCoin)
  // // for moving game pieces after gold coins animate
  // document.addEventListener('keydown', e => {

  // })