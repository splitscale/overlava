/**
 * Represents the game world as a canvas element and its 2D rendering context.
 * @class
 */
export class CanvasHandler {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;

  /**
   * Creates a new instance of the Canvas class.
   * @constructor
   * @param {string} canvasId - The ID of the canvas element to use.
   * @throws {Error} If the canvas element with the specified ID is not found, or if the 2D rendering context cannot be obtained.
   */
  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) {
      throw new Error(`Canvas element with id "${canvasId}" not found.`);
    }

    this.context = this.canvas.getContext('2d');
    if (!this.context) {
      throw new Error('Unable to get 2D context for canvas element.');
    }
  }

  /**
   * Gets the canvas element.
   * @returns {HTMLCanvasElement} The canvas element.
   */
  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * Gets the 2D rendering context for the canvas element.
   * @returns {CanvasRenderingContext2D} The 2D rendering context.
   * @throws {Error} If the 2D rendering context cannot be obtained.
   */
  public getContext(): CanvasRenderingContext2D {
    if (!this.context) {
      throw new Error('Unable to get 2D context for canvas element.');
    }
    return this.context;
  }
}
