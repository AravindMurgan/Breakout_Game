//DOM//
const showRules = document.getElementById('show-rules');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
 
let score = 0;

///Ball props//
const ball = {
    x:canvas.width / 2,
    y:canvas.height/ 2,
    size:25,
    speed:4,
    dx:4,
    dy:-4
}

//Paddle props//
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 90,
    h: 10,
    speed: 8,
    dx: 0
  };
  

//calling all Function//
function draw(){
    drawBall();
    drawPaddle();
    drawScore();
}

//calling all funciton at one function//
draw()


//Draw Ball///
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

///Draw Paddle///
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddle.x,paddle.y,paddle.w,paddle.h);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

///set Score//
function drawScore(){
    ctx.font = '20px Arial';
    ctx.fillText(`Score : ${score}`,canvas.width-100,30);
}

///Event Listeneres//
showRules.addEventListener('click',(e)=>rules.classList.add('show'));
closeBtn.addEventListener('click',(e)=>rules.classList.remove('show'));