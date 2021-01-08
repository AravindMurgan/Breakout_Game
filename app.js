//DOM//
const showRules = document.getElementById('show-rules');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
 
let score = 0;

const bricksRowCount = 9;
const bricksColumnCount = 5;


///brick props///
const bricksInfo = {
    w:70,
    h:20,
    padding:10,
    offsetX:45,
    offsetY:60,
    visible:true
}


///Ball props//
const ball = {
    x:canvas.width / 2,
    y:canvas.height/ 2,
    size:10,
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
  
//create bricks//
    const bricks = [];
    // Row Bricks
    for(let i = 0; i < bricksRowCount ; i++){
         bricks[i]=[] ;
        //Column bricks
        for(let j = 0 ; j < bricksColumnCount ; j ++){
            const x = i * (bricksInfo.w + bricksInfo.padding) + bricksInfo.offsetX;
            const y = j * (bricksInfo.h + bricksInfo.padding) + bricksInfo.offsetY;
            bricks[i][j]= {x,y ,...bricksInfo}
            
        }
        

    }

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

//drawBricks//
function drawBricks(){

    bricks.forEach((column)=>{
        column.forEach((brick)=>{
            ctx.beginPath();
            ctx.rect(brick.x,brick.y,brick.w,brick.h);
            ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            ctx.fill();
            ctx.closePath();

        })

    })

   
}

///MovePaddle from X->Y & Y->X
function movePaddle(){

    paddle.x += paddle.dx;
    ///Wall Detection//
    if(paddle.x + paddle.w > canvas.width){
        paddle.x = canvas.width - paddle.w;  ///right side of X-axis
    }if (paddle.x < 0){
        paddle.x = 0; ///left side of X-axis
    }

}

//calling all Function//
function draw(){
    //clear canvas//
    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

//request animation frame function///
function update(){

    //move paddle//
    movePaddle();

    //calling all funciton at one function//
    draw();

    requestAnimationFrame(update)

}

//callback//
update();

//keydown//
function keyDown(e){
    if(e.key === 'Right' || e.key === 'ArrowRight'){
        paddle.dx = paddle.speed;
    }else if(e.key === 'Left' || e.key === 'ArrowLeft'){
        paddle.dx = -paddle.speed;
    }
}

function keyUp(e){
    if(e.key === 'Right' || e.key === 'ArrowRight'|| e.key === 'Left' || e.key === 'ArrowLeft'){
        paddle.dx = 0;
    }
}


//KeyDown and KeyUp Events.
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

///Event Listeneres//
showRules.addEventListener('click',(e)=>rules.classList.add('show'));
closeBtn.addEventListener('click',(e)=>rules.classList.remove('show'));


