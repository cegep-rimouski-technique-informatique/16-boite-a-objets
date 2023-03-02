import { Forme } from "./forme.js";

export class Triangle extends Forme {
    x = 100;
    y = 100;
    vitesseX = 4;
    vitesseY = 7;


    dessiner(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + 50, this.y + 50);
      ctx.lineTo(this.x - 50, this.y + 50);
      ctx.closePath();
      ctx.fillStyle = "blue";
      ctx.fill();
        
    }       
  }


