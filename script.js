// script.js - JavaScript for Tech Services Website

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation
  document.querySelectorAll("nav ul li a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Mobile menu toggle (if applicable)
  const menuToggle = document.createElement("button");
  menuToggle.innerText = "☰ Menu";
  menuToggle.id = "menuToggle";
  document.querySelector("header").prepend(menuToggle);

  menuToggle.addEventListener("click", function () {
      document.querySelector("nav ul").classList.toggle("show");
  });

  // Basic form validation
  const contactForm = document.querySelector("form");
  if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();

          if (!name || !email || !message) {
              alert("Please fill in all fields.");
              e.preventDefault();
          }
      });
  }
});
