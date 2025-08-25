// Typing animation
const text = "CSE Student 💻 | Aspiring Developer ☕ | Calm and Curious ✨";
let index = 0;
const speed = 100;

function typeText() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

typeText();

// Scroll animation
const faders = document.querySelectorAll(".fade");

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fade => appearOnScroll.observe(fade));