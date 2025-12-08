const cards = document.querySelectorAll(".event-card");
const selectedEventLabel = document.getElementById("selectedEvent");
const calendarSection = document.getElementById("calendar");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));

    card.classList.add("active");

    const title = card.getAttribute("data-title");
    if (selectedEventLabel) {
      selectedEventLabel.textContent = title;
    }

    if (calendarSection) {
      calendarSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const heroImage = document.getElementById("heroImage");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

const slides = [
  { src: "yale-art-1.jpg", alt: "Yale School of Art 1" },
  { src: "yale-art-2.jpg", alt: "Yale School of Art 2" },
  { src: "yale-art-3.webp", alt: "Yale School of Art 3" },
  { src: "yale-art-4.jpg", alt: "Yale School of Art 4" }
];

let currentSlide = 0;
let slideIntervalId = null;

function showSlide(index) {
  const slide = slides[index];
  heroImage.src = slide.src;
  heroImage.alt = slide.alt;
}

function startSlideshow() {
  if (slideIntervalId) {
    clearInterval(slideIntervalId);
  }

  slideIntervalId = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000); 
}

if (heroImage && slides.length > 0) {
  showSlide(currentSlide);
  startSlideshow();

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      startSlideshow(); 
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      startSlideshow(); 
    });
  }
}
