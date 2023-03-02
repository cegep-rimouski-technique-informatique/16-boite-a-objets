import { Forme } from "./forme.js";

export class Maison extends Forme {
  x = 300;
  y = 300;
  vitesseX = -10;
  vitesseY = -24;

  dessiner(ctx) {
// Set line width
ctx.lineWidth = 7;
ctx.fillStyle = "black";

ctx.strokeRect(this.x-25,this.y-25, 75, 55);

ctx.fillRect(this.x, this.y, 20, 30);

ctx.fillRect(this.x-10, this.y-2, 5, 5);
// Roof

ctx.beginPath();
ctx.moveTo(this.x-50,this.y-25);
ctx.lineTo(this.x+20, this.y-80);
ctx.lineTo(this.x+80,this.y-25);
ctx.closePath();


ctx.fill();
ctx.closePath();
ctx.stroke();

  }
}
