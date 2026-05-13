const NUM_OF_PARTICLES = 7;
const canvas = document.getElementById("smoke_canvas");
const ctx = canvas && canvas.getContext("2d");

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Smoke {
  constructor() {
    this.particles = [];
  }

  add(particle) {
    this.particles.push(particle);
  }

  animate() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.particles = this.particles.filter((particle) => particle.update());
    requestAnimationFrame(this.animate.bind(this));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x + (Math.random() - 0.5) * 30;
    this.y = y + (Math.random() - 0.5) * 30;
    this.size = Math.random() * 10 + 8;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = -Math.random() * 1.5 - 0.5;
    this.alpha = 0.6;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.97;
    this.alpha *= 0.98;
    this.draw();
    return this.size > 0.7 && this.alpha > 0.02;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const smoke = new Smoke();

window.addEventListener("load", () => {
  if (!canvas) return;
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "999";
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  window.addEventListener("mousemove", (e) => {
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      smoke.add(new Particle(e.clientX, e.clientY));
    }
  });

  smoke.animate();
});