import { Position } from './Position.js';

export interface Movable extends Position {
  getVelX(): number;
  getVelY(): number;
  setVelX(value: number): void;
  setVelY(value: number): void;

  getDeltaX(): number;
  getDeltaY(): number;
  setDeltaX(value: number): void;
  setDeltaY(value: number): void;
}
