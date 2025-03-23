//Video-Playing
const hoverArea = document.querySelector('.hover-video');
const video = document.querySelector('.video-preview');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let isHovering = false;

hoverArea.addEventListener('mouseenter', () => {
  video.style.opacity = '1';
  video.play();
  isHovering = true;
  animateVideo();
});

hoverArea.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

hoverArea.addEventListener('mouseleave', () => {
  video.style.opacity = '0';
  video.pause();
  isHovering = false;
});

function animateVideo() {
  if (!isHovering) return;

  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  video.style.left = `${currentX}px`;
  video.style.top = `${currentY}px`;

  requestAnimationFrame(animateVideo);
}


//Email Validation

const emailInput = document.getElementById("emailInput");
const submitArrow = document.getElementById("submitArrow");
const emailSection = document.querySelector(".email-section");

submitArrow.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailSection.innerHTML = ""; 

  const message = document.createElement("div");
  message.style.backgroundColor = "#0CEE72";
  message.style.padding = "2em";
  message.style.fontSize = "1.5rem";
  message.style.fontFamily = "Arial, Helvetica, sans-serif";
  message.style.color = "#000";
  message.style.textAlign = "center";

  if (!emailRegex.test(email)) {
    message.textContent = "The email you entered is not valid.";
  } else {
    const storedEmail = localStorage.getItem("subscribedEmail");

    if (storedEmail === email) {
      message.textContent = "You're already subscribed, your profile has been updated. Thank you!";
    } else {
      localStorage.setItem("subscribedEmail", email);
      message.textContent = "Thank you for subscribing!";
    }
  }
  emailSection.appendChild(message);
});