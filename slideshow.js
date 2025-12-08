document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".slideshow");

    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll("div");
        let index = 0;

        if (slides.length === 0) return;

        
        slides[index].classList.add("active");

        setInterval(() => {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }, 10500);
    });
});
