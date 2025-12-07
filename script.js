// ===== Event card click behavior =====
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

// ===== Thumbnail slideshow: auto + buttons =====
const heroImage = document.getElementById("heroImage");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

// Use any images you want here (filenames must match your folder)
const slides = [
  { src: "yale-art-1.avif", alt: "Yale School of Art 1" },
  { src: "yale-art-2.jpg",  alt: "Yale School of Art 2" },
  { src: "yale-art-3.webp", alt: "Yale School of Art 3" },
  { src: "yale-art-4.jpg",  alt: "Yale School of Art 4" }
];

let currentSlide = 0;
let slideIntervalId = null;

function showSlide(index) {
  const slide = slides[index];
  heroImage.src = slide.src;
  heroImage.alt = slide.alt;
}

function startSlideshow() {
  // clear any existing interval just in case
  if (slideIntervalId) {
    clearInterval(slideIntervalId);
  }

  slideIntervalId = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000); // change slide every 4 seconds
}

if (heroImage && slides.length > 0) {
  // initialize first slide
  showSlide(currentSlide);
  // start auto-play
  startSlideshow();

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      startSlideshow(); // restart timer after manual click
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      startSlideshow(); // restart timer after manual click
    });
  }
}
