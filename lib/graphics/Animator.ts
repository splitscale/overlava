export interface Animator {
  animate(position: { x: number; y: number }, deltaTime: number): void;
}
