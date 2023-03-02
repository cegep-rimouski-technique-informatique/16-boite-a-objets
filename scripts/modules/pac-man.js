import { Forme } from "./forme.js";

export class Pacman extends Forme {
  x = 300;
  y = 500;
  vitesseX = -1.1;
  vitesseY = 3.1;

  dessiner(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(this.x, this.y);
    ctx.fillStyle = "yellow";
    ctx.fill()
  }
}
