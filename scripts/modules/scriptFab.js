import { Forme } from "./forme.js";

export class Bulle extends Forme{
    x = 100;
    y = 50;
    vitesseX = 2;
    vitesseY = 3;

    dessiner(ctx)
    {
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(this.x, this.x, this.y, 62.5);
        ctx.quadraticCurveTo(this.x, this.y, 50, 100);
        ctx.quadraticCurveTo(this.x, this.y, 30, 125);
        ctx.quadraticCurveTo(this.x, this.y, 65, 100);
        ctx.quadraticCurveTo(this.x, this.y, 125, 62.5);
        ctx.quadraticCurveTo(this.x, this.y, 75, 25);
        ctx.fillStyle = "aqua";
        ctx.fill();
        ctx.stroke();
    }
}