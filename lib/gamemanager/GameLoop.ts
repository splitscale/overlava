export class GameLoop {
  private fps: number;
  private lastFrameTime: number;
  private onUpdateCallback: (delta: number) => void = () => {};
  private onRenderCallback: (delta: number) => void = () => {};
  private isRunning: boolean;
  private isPaused: boolean;

  constructor(fps: number) {
    this.fps = fps;
    this.lastFrameTime = 0;
    this.isRunning = false;
    this.isPaused = false;
  }

  public start(): void {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.loop();
  }

  public stop(): void {
    this.isRunning = false;
  }

  public pause(): void {
    this.isPaused = true;
  }

  public resume(): void {
    this.isPaused = false;
    this.lastFrameTime = performance.now();
    this.loop();
  }

  public onUpdate(fn: (delta: number) => void): void {
    this.onUpdateCallback = fn;
  }

  public onRender(fn: (delta: number) => void): void {
    this.onRenderCallback = fn;
  }

  private loop(): void {
    if (!this.isRunning) {
      return;
    }

    if (this.isPaused) {
      requestAnimationFrame(this.loop.bind(this));
      return;
    }

    const currentTime = performance.now();
    const delta = (currentTime - this.lastFrameTime) / 1000;
    this.lastFrameTime = currentTime;

    this.onUpdateCallback(delta);

    this.onRenderCallback(delta);

    const interval = 1000 / this.fps;
    setTimeout(() => {
      requestAnimationFrame(this.loop.bind(this));
    }, interval);
  }
}
