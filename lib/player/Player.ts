import { Animated } from '../graphics/Animated.js';
import { Animator } from '../graphics/Animator.js';
import { Entity } from '../physics/Entity.js';
import { Movable } from '../physics/Movable.js';

export class Player implements Entity, Movable, Animated {
  private x: number;
  private y: number;
  private velX: number = 0;
  private velY: number = 0;
  private deltaX: number = 0;
  private deltaY: number = 0;

  private animator: Animator;

  constructor(x: number, y: number, animator: Animator) {
    this.x = x;
    this.y = y;
    this.animator = animator;
  }

  animate(deltaTime: number): void {
    this.animator.animate({ x: this.x, y: this.y }, deltaTime);
  }

  // Entity methods
  getKey(): string {
    return 'player';
  }

  // Movable methods
  getVelX(): number {
    return this.velX;
  }

  getVelY(): number {
    return this.velY;
  }

  setVelX(value: number): void {
    this.velX = value;
  }

  setVelY(value: number): void {
    this.velY = value;
  }

  getDeltaX(): number {
    return this.deltaX;
  }

  getDeltaY(): number {
    return this.deltaY;
  }

  setDeltaX(value: number): void {
    this.deltaX = value;
  }

  setDeltaY(value: number): void {
    this.deltaY = value;
  }

  setX(value: number): void {
    this.x = value;
  }

  setY(value: number): void {
    this.y = value;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}
