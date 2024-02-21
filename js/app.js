let animationTriggered = false;
let lastScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  const isScrollingDown = currentScrollPos > lastScrollPos;

  if (isScrollingDown && !animationTriggered) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          animationTriggered = true;
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }

  lastScrollPos = currentScrollPos;
});

let animationTriggered2 = false;
let lastScrollPos2 = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  const isScrollingDown = currentScrollPos > lastScrollPos2;

  if (isScrollingDown && !animationTriggered2) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          animationTriggered2 = true;
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenBox");
    hiddenElements.forEach((el) => observer.observe(el));
  }

  lastScrollPos2 = currentScrollPos;
});
