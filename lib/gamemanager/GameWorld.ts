export class GameWorld {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = context;

    // Set the canvas width and height to match the player's screen size
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Add an event listener to update the canvas size if the window is resized
    window.addEventListener('resize', this.resizeCanvas.bind(this));
  }

  private resizeCanvas() {
    // Update the canvas size to match the new window size
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Redraw the game world to match the new size
    this.redraw();
  }

  public redraw() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw the game world here using the canvas context
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}
