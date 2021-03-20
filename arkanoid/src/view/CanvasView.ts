// Import classes

import { Brick } from '../sprite/Brick';
import { Paddle } from '../sprite/Paddle';
import { Ball } from '../sprite/Ball';
import { BRICK_IMAGES } from '../setup';

export class CanvasView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private score: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasId: string){
        this.canvas = document.querySelector(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.score = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
    }

    clear(): void {
        this.context?.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

    // i dont get this
    initStartButton(startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener('click', () => startFunction(this));
    }

    drawScore(value: number): void {
        if (this.score) this.score.innerHTML = value.toString();
    }

    drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text;
    }

    drawSprite(brick: Brick | Paddle | Ball): void {
        if(!brick) return;

        this. context?.drawImage(
            brick.image,
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height,
        )
    }

    drawBricks(bricks: Brick[]): void {
        bricks.forEach(brick => this.drawSprite(brick));
    }
}