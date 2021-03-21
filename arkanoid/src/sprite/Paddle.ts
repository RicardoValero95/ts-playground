import { Vector } from '../types';

export class Paddle{
    private paddleImage: HTMLImageElement = new Image();
    private moveLeft: boolean;
    private moveRight: boolean;

    constructor(
        private speed: number,
        private paddleWidth: number,
        private paddleHeight: number,
        private paddlePosition: Vector,
        image: string
    ) {
        this.speed = speed;
        this.paddleHeight = paddleHeight,
        this.paddleWidth = paddleWidth,
        this.paddlePosition = paddlePosition,
        this.moveLeft = false;
        this.moveRight = false;
        this.paddleImage.src = image;

        // Event listeners

        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    // Getters why is it done this way?
    get width(): number {
        return this.paddleWidth;
    }

    get height(): number {
        return this.paddleHeight;
    }

    get position(): Vector {
        return this.paddlePosition;
    }

    get image(): HTMLImageElement {
        return this.paddleImage;
    }

    get isMovingLeft(): boolean {
        return this.moveLeft;
    }

    get isMovingRight(): boolean {
        return this.moveRight;
    }

    // nope, i still dont like this
    movePaddle(): void {
        if(this.moveLeft) this.position.x-=this.speed;
        if(this.moveRight) this.position.x+=this.speed;
    };

    handleKeyUp = (e: KeyboardEvent): void => {
        if(e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = false;
        if(e.code === 'ArrowRight' || e.key === 'ArrowRight') this.moveRight = false;
    };

    handleKeyDown = (e: KeyboardEvent): void => {
        if(e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = true;
        if(e.code === 'ArrowRight' || e.key === 'ArrowRight') this.moveRight = true;
    };

};