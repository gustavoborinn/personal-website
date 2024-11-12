let lastScrollTop = 0;
const contactSection = document.querySelector(".contact");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    contactSection.classList.add("contact--scroll-down");
    contactSection.classList.remove("contact--scroll-up");
  } else {
    contactSection.classList.add("contact--scroll-up");
    contactSection.classList.remove("contact--scroll-down");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section--visible");
        observer.unobserve(entry.target); 
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15, 
  });

  sections.forEach((section) => sectionObserver.observe(section));
});
