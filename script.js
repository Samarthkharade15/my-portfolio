// GSAP Preloader Animation
gsap.to(".progress-bar", {
  width: "100%",
  duration: 2,
  ease: "power2.out",
  onComplete: () => {
    gsap.to(".preloader", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
      }
    });
  }
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Hero Animations
gsap.from(".hero-content h1", {opacity: 0, y: 50, duration: 1});
gsap.from(".hero-content p", {opacity: 0, y: 20, delay: 0.3});
gsap.from(".hero-content .btn", {opacity: 0, scale: 0.8, delay: 0.6});

// Floating Background Glow Example
gsap.to(".hero-3d", {
  y: -20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00f5ff";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00f5ff";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// Position skills in a circle
const radius = 250;
const items = document.querySelectorAll('.skill-item');
const angleStep = 360 / items.length;

items.forEach((item, i) => {
  const angle = angleStep * i;
  item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
});

