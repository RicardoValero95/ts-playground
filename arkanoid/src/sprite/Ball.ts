import { Vector } from '../types';

export class Ball{
    private speed: Vector;
    private ballImage: HTMLImageElement = new Image();

    constructor(
        speed: number,
        private ballSize: number,
        private ballPosition: Vector,
        image: string
    ){
        this.ballSize = ballSize;
        this.ballPosition = ballPosition;
        this.speed = {
            x: speed,
            y: -speed
        };
        this.ballImage.src = image;
    }

    get width(): number {
        return this.ballSize;
    }

    get height(): number {
        return this.ballSize;   
    }

    get position(): Vector {
        return this.ballPosition;
    }

    get image(): HTMLImageElement {
        return this.ballImage;
    }

    // Methods
    changeYDirection(): void {
        this.speed.y = -this.speed.y;
    }

    changeXDirection(): void {
        this.speed.x = -this.speed.x;
    }

    moveBall(): void {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
};