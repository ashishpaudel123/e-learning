document.addEventListener("DOMContentLoaded", function () {
  const heroSlides = [
    "images/laptop-girl.png",
    "images/student2.png",
    "images/student3.png",
  ];

  let currentHeroIndex = 0;

  const heroImage = document.querySelector(".hero-image > img");
  const heroDots = document.querySelectorAll(".hero-next .dot");
  const heroNextText = document.querySelector(".hero-next .next-text");

  function updateHeroSlide(index) {
    if (heroImage) {
      heroImage.style.opacity = "0";

      setTimeout(() => {
        heroImage.src = heroSlides[index];
        heroImage.style.opacity = "1";
      }, 300);
    }

    heroDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  const style = document.createElement("style");
  style.textContent = `
    .hero-image > img {
      transition: opacity 0.3s ease;
    }
  `;
  document.head.appendChild(style);

  if (heroNextText) {
    heroNextText.style.cursor = "pointer";
    heroNextText.addEventListener("click", function () {
      currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
      updateHeroSlide(currentHeroIndex);
    });
  }

  heroDots.forEach((dot, index) => {
    dot.style.cursor = "pointer";
    dot.addEventListener("click", function () {
      currentHeroIndex = index;
      updateHeroSlide(currentHeroIndex);
    });
  });

  setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
    updateHeroSlide(currentHeroIndex);
  }, 4000);
});
