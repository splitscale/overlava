import { Animator } from './Animator.js';

export class PlayerSpriteAnimator implements Animator {
  private readonly width: number;
  private readonly height: number;
  private clipY: number = 0;
  private counter: number = 0;
  private elapsedFrames: number = 0;
  private readonly frameThreshold: number;
  private readonly spriteSheet: HTMLImageElement;
  private readonly ctx: CanvasRenderingContext2D;

  constructor(
    spriteSheet: HTMLImageElement,
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    speed: number = 50 // default speed is 50
  ) {
    this.width = width;
    this.height = height;

    this.spriteSheet = spriteSheet;
    this.ctx = context;

    // Calculate the number of elapsed frames before changing the clipY
    this.frameThreshold = Math.round((60 * (100 - speed)) / 100);
  }

  animate(position: { x: number; y: number }, deltaTime: number): void {
    // Count the number of elapsed frames
    this.elapsedFrames++;

    // Check if enough frames have passed to change the clipY
    if (this.elapsedFrames >= this.frameThreshold) {
      this.elapsedFrames = 0;

      if (this.clipY < 5) {
        this.clipY++;
      } else {
        this.clipY = 0;
      }
    }

    // Increment the counter for the next frame change
    this.counter++;
    if (this.counter > 15) {
      this.counter = 0;
    }

    // Draw the sprite
    this.ctx.drawImage(
      this.spriteSheet,
      0,
      this.height * this.clipY,
      this.width,
      this.height,
      position.x,
      position.y,
      this.width / 2,
      this.height / 2
    );
  }
}
