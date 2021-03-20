import { Vector } from '../types';

export class Brick{
    private brickImage: HTMLImageElement = new Image();

    // I dont get constructors
    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private brickPosition: Vector,
        private brickEnergy: number,
        image: string
    ){
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickPosition = brickPosition;
        this.brickEnergy = brickEnergy; 
        this.brickImage.src = image;
    }

    // Getters why is it done this way?
    get width(): number {
        return this.brickWidth;
    }

    get height(): number {
        return this.brickHeight;
    }

    get position(): Vector {
        return this.brickPosition;
    }

    get image(): HTMLImageElement {
        return this.brickImage;
    }

    get energy(): number {
        return this.brickEnergy;
    }

    // Setters
    set energy(energy: number) {
        this.brickEnergy = energy;
    }
};