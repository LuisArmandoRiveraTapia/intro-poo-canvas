const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;
canvasOOP.style.background = "#ff8";

canvasRandom.height = 200;
canvasRandom.width= 300;
canvasRandom.style.backgroundColor = "#e6f";

canvasMultiple.height = 200;
canvasMultiple.width= 300;
canvasMultiple.style.backgroundColor = "#ff8";

// Clase para crear y renderizar un círculo
class Circle {
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
  }

  // Método para renderizar el círculo y el texto
  draw(context) {
    context.beginPath();
    context.fillStyle = this.backcolor; // Color de relleno del círculo
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    context.fill(); // Aplica el color de relleno

    context.strokeStyle = this.color;
    context.lineWidth = 2;
    context.stroke(); // Dibuja el borde del círculo
    context.closePath();

    context.fillStyle = this.color; // Color del texto
    context.textAlign = "center"; // Alineación horizontal del texto
    context.textBaseline = "middle"; // Alineación vertical del texto
    context.font = "20px Arial";
    context.fillText(this.text, this.posX, this.posY); // Dibuja el texto
  }
}

// Asegurar que los círculos no se salgan del canvas
function createCircleWithinBounds(canvas) {
  let radius = Math.floor(Math.random() * 7 + 30);
  let x = Math.random() * (canvas.width - 2 * radius) + radius;
  let y = Math.random() * (canvas.height - 2 * radius) + radius;
  return new Circle(x, y, radius, "blue", "Tec", "rgb(204, 255, 204)");
}

let arrayCircle = [];
for (let i = 0; i < 10; i++) {
  let miCirculoMultiple = createCircleWithinBounds(canvasMultiple);
  arrayCircle.push(miCirculoMultiple);
  miCirculoMultiple.draw(ctxMultiple);
}

let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "red", "Tec", "rgb(204, 255, 204)");
miCirculo.draw(ctx);

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(204, 255, 204)");
miCirculoRandom.draw(ctxRandom);
