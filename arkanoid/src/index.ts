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
    // paddle: Paddle,
    // ball: Ball
) {
    view.clear();
    view.drawBricks(bricks);

    // I dont like loops 
    requestAnimationFrame(()=> gameLoop(view, bricks));
}

function startGame(view: CanvasView){
    // Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(score);
    const bricks = createBricks();
    gameLoop(view, bricks);
}

// Create view i dont like passing the id herre 
const view = new CanvasView('#playField');
view.initStartButton(startGame);