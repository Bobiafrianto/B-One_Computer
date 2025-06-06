let current = 0;
const testimonials = document.querySelectorAll(".testimonial");
const total = testimonials.length;

setInterval(() => {
    testimonials[current].classList.remove("active");
    current = (current + 1) % total;
    testimonials[current].classList.add("active");
}, 4000); // Slide every 4 seconds

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

const questions = document.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                question.classList.toggle('active');
                const answer = question.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // 
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

