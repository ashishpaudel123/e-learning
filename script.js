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

// SECTION NAVIGATION FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const mobileNav = document.querySelector(".mobile-nav");
  const navToggle = document.querySelector(".nav-toggle");

  // Handle navigation link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only handle links that start with # i.e. id
      if (href && href.startsWith("#")) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // Smooth scroll to section
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Update active link
          navLinks.forEach((l) => l.classList.remove("active"));

          // Find all links with same href and add active class
          document.querySelectorAll(`a[href="${href}"]`).forEach((l) => {
            l.classList.add("active");
          });

          // Close mobile menu if open
          if (mobileNav && mobileNav.classList.contains("active")) {
            mobileNav.classList.remove("active");
            if (navToggle) {
              const icon = navToggle.querySelector("i");
              icon.classList.remove("fa-times");
              icon.classList.add("fa-bars");
            }
          }
        }
      }
    });
  });

  // Highlight active section on scroll
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
