// MOBILE MENU TOGGLE FUNCTIONALITY

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle"); // Hamburger button
  const mobileNav = document.querySelector(".mobile-nav"); // Mobile menu

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("active");

      // Change the icon from hamburger to X and back
      const icon = this.querySelector("i");
      if (mobileNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
      const isClickInsideNav = mobileNav.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        mobileNav.classList.contains("active")
      ) {
        mobileNav.classList.remove("active");
        const icon = navToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when screen gets bigger (desktop size)
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        const icon = navToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }
});
