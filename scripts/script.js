import { Ball } from "./modules/ball.js";
import { Maison } from "./modules/maison.js";

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let formes = [];

// Création de nos objets
let ball1 = new Ball();
let maison1 = new Maison();

// Ajout des objets
formes.push(ball1);
formes.push(maison1);


// La boucle de jeu
window.requestAnimationFrame(gameLoop);
function gameLoop() {
    // nettoyer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const forme of formes) {
        forme.dessiner(ctx);
    }

    for (const forme of formes) {
        forme.mettreAJour(ctx);
    }

    window.requestAnimationFrame(gameLoop);
}
