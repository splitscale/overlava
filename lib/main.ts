import { CanvasHandler } from './canvas/CanvasHandler.js';
import { GameLoop } from './gamemanager/GameLoop.js';
import { GameWorld } from './gamemanager/GameWorld.js';
import { PlayerSpriteAnimator } from './graphics/PlayerSpriteAnimator.js';
import { Resources } from './graphics/Resources.js';
import { Player } from './player/Player.js';

export default async function main(...args: any[]) {
  const resources = new Resources();
  const loop = new GameLoop(60);
  const canvas = new CanvasHandler('canvas');
  const world = new GameWorld(canvas.getCanvas(), canvas.getContext());

  await resources.load();

  let playerAnimator = new PlayerSpriteAnimator(
    resources.playerRight,
    canvas.getContext(),
    500,
    500,
    75
  );

  let player = new Player(100, 100, playerAnimator);

  loop.onUpdate((delta: number) => {
    console.log(delta);
  });

  loop.onRender((delta: number) => {
    world.redraw();

    console.log('animating...');

    player.animate(delta);
  });

  loop.start();
  // loop.pause();
}

// console.log([elapsed - this.lastTime, this.frameDuration]);
// console.log([elapsed - this.lastTime > this.frameDuration]);
