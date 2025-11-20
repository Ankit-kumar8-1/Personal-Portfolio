// Scroll effect for header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector(".header-container").appendChild(menuToggle);

const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Loader fade out
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader_wrapper");
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});

// typing animation
const roles = [
  "Java Full Stack Developer",
  "Backend Developer",
  "Web Developer",
  "Java Developer",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const eraseSpeed = 50;
const delay = 1000;

const typingElement = document.getElementById("typing-role");

function typeRole() {
  const current = roles[index];

  if (!isDeleting) {
    typingElement.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeRole, delay);
      return;
    }
  } else {
    typingElement.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }
  }

  setTimeout(typeRole, isDeleting ? eraseSpeed : speed);
}

typeRole();

const card = document.getElementById("tilt-card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  card.style.transform = `rotateX(${-(y / 20)}deg) rotateY(${x / 20}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// --- Photo Popup ---
function openPhotoPopup() {
  document.getElementById("photoPopup").classList.add("active");
}

function closePhotoPopup(event) {
  if (event.target.id === "photoPopup") {
    document.getElementById("photoPopup").classList.remove("active");
  }
}

// contact sections
document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(
    ".section-title, .section-subtitle, .contact-info, .contact-form"
  );

  animated.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    let target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
