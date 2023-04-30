export class Resources {
  private readonly _playerLeft = new Image();
  private readonly _playerRight = new Image();
  private readonly _lava = new Image();
  private readonly _dirtPlatform = new Image();
  private readonly _background = new Image();

  public get playerLeft(): HTMLImageElement {
    return this._playerLeft;
  }

  public get playerRight(): HTMLImageElement {
    return this._playerRight;
  }

  public get lava(): HTMLImageElement {
    return this._lava;
  }

  public get dirtPlatform(): HTMLImageElement {
    return this._dirtPlatform;
  }

  public get background(): HTMLImageElement {
    return this._background;
  }

  public async load(): Promise<void> {
    const loadPromises = [
      this.loadImage(
        this._playerLeft,
        './resources/spritesheet/player-left.png'
      ),
      this.loadImage(
        this._playerRight,
        './resources/spritesheet/player-right.png'
      ),
      this.loadImage(this._lava, './resources/spritesheet/lava.png'),
      this.loadImage(
        this._dirtPlatform,
        './resources/spritesheet/dirt-platform.png'
      ),
      this.loadImage(this._background, './resources/spritesheet/bg.png'),
    ];
    await Promise.all(loadPromises);
  }

  private loadImage(image: HTMLImageElement, url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      image.onload = () => {
        resolve();
      };
      image.onerror = () => {
        reject(new Error(`Failed to load image: ${url}`));
      };
      image.src = url;
    });
  }
}
