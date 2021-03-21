// Types 
import { Brick } from './sprite/Brick';
import { Paddle } from './sprite/Paddle';
import { Ball } from './sprite/Ball';
import { CanvasView } from './view/CanvasView';

export class Collision {
    
    // Check ball collision with bricks
    isCollidingBrick(ball: Ball, brick: Brick): boolean {
        if (
            ball.position.x < brick.position.x + brick.width &&
            ball.position.x + ball.width > brick.position.x &&
            ball.position.y < brick.position.y + brick.height &&
            ball.position.y + ball.height > brick.position.y      
            ) {
            return true;
        }
        return false;
    }


    isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
        let colliding = false;

        bricks.forEach((brick, i) => {
            if (this.isCollidingBrick(ball, brick)){
                ball.changeYDirection();
                if(brick.energy === 1){
                    bricks.splice(i, 1);
                } else{
                    brick.energy -= 1;
                }
                colliding= true;
            }
        });
        return colliding;
    }



    checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
        // 1. Chekc ball collision with paddle
        if (
            ball.position.x + ball.width > paddle.position.x &&
            ball.position.x < paddle.position.x + paddle.width &&
            ball.position.y + ball.height === paddle.position.y
        ) {
            ball.changeYDirection();
        }

        // 2. Check ball collision with walls
        // Ball movement x contraints
        if (ball.position.x > view.canvas.width - ball.width || ball.position.x < 0) {
            ball.changeXDirection();
        }
        // Ball movement y contraints
        if (ball.position.y < 0 + ball.height){
            ball.changeYDirection();
        }
    }
}