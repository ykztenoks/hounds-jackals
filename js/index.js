const canvas = document.getElementById("gameboard")
const ctx = canvas.getContext('2d')

//const logo = new Image() // logo 

const gameboard = new Image() // gameboard 
gameboard.src = "./src/HJGameBoard.png"

const houndsGP = new Image() // Hounds game piece 
houndsGP.src ="./src/Houndgamepiece.png"

const jackalsGP = new Image() //Jackals game pieces
jackalsGP.src ="./src/jackalgamepiece.png"

// let startGame
// let animationLoopId

// let gameOn = false

//ctx.drawImage(gameboard, 0, 0, 800, 800)

//Start Coin animation & code 

// jQuery(document).ready(function($){

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
  
//   });

  // window.onload = function() {
  //   document.getElementById("start-coin").onclick = function() {
  //     startGame();
  //   };
  // };

  // function startGame() {

  //   console.log("Starting")
  //   logo.style.visibility = "hidden"
  //   logo.style.height = "0px"
  //   canvas.width = "800"
  //   canvas.height = "800"
  //   canvas.style.visibility = "visible"
  
  //   ctx.drawImage(gameboard, 0, 0, 800, 800)
  
    // // ctx.drawImage(fabyImage, 400, 200, 75, 50)
    // animationLoop()
    // generatePipes()
  
  //}
  window.onload = function() {
    document.getElementById("game-instructions").onclick = function() {

      ctx.drawImage(gameboard, 0, 0, 800, 800,)
      
      startGame();
    };
  };
  // // for moving game pieces after gold coins animate
  // document.addEventListener('keydown', e => {

  // })