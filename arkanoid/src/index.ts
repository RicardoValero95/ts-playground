import { CanvasView } from './view/CanvasView';

// Sprites
import { Ball } from './sprite/Ball';
import { Brick } from './sprite/Brick';
import { Paddle } from './sprite/Paddle';

// Images
import PADDLE_IMAGE from './image/paddle.png'
import BALL_IMAGE from './image/ball.png'

// Level and colors
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup'

// Helpers
import {createBricks} from './helper'

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView){
    view.drawInfo('Game Over!');
    gameOver = false;
}

function setGameWin(view: CanvasView){
    view.drawInfo('Game Won!');
    gameOver = false;
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball
) {
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);

    ball.moveBall();

    // Move paddle and check so it won't exit the playfield (this shouldnt be here)
    if(
        (paddle.isMovingLeft && paddle.position.x > 0) ||
        (paddle.isMovingRight && paddle.position.x < view.canvas.width - paddle.width)
    ){
        paddle.movePaddle();
    }

    // I dont like loops 
    requestAnimationFrame(()=> gameLoop(view, bricks, paddle, ball));
}

function startGame(view: CanvasView){
    // Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(score);
    // Create all bricks
    const bricks = createBricks();
    // Create a ball
    const ball = new Ball(
        BALL_SPEED, BALL_SIZE,
        {x: BALL_STARTX, y: BALL_STARTY}, 
        BALL_IMAGE
    )
    // Create a paddle
    const paddle = new Paddle(
        PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, 
        {x: PADDLE_STARTX, y: view.canvas.height - PADDLE_HEIGHT - 5}, // wtf 
        PADDLE_IMAGE
    )
    gameLoop(view, bricks, paddle, ball);
}

// Create view i dont like passing the id herre 
const view = new CanvasView('#playField');
view.initStartButton(startGame);