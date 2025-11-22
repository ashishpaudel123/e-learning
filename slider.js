// TESTIMONIAL SLIDER FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      images: [
        "images/reviewer-1.jpg",
        "images/reviewer-2.jpg",
        "images/reviewer-3.jpg",
      ],
      text: "At Elearning, I found more than just a place to learn Korean; I found a community that fosters growth and success. The engaging classes and dedicated instructors not only improved my language skills but also boosted my confidence.",
      name: "Saroj Dhungana",
      role: "Student",
    },
    {
      images: [
        "images/reviewer-2.jpg",
        "images/reviewer-3.jpg",
        "images/reviewer-1.jpg",
      ],
      text: "The online platform is incredibly user-friendly and the course materials are comprehensive. I've learned so much in such a short time. The instructors are always available to help and provide valuable feedback.",
      name: "Anjali Sharma",
      role: "Student",
    },
    {
      images: [
        "images/reviewer-3.jpg",
        "images/reviewer-1.jpg",
        "images/reviewer-2.jpg",
      ],
      text: "Excellent learning experience! The flexible schedule allowed me to learn at my own pace while maintaining my work commitments. The quality of education is top-notch and I highly recommend it to anyone.",
      name: "Ravi Kumar",
      role: "Student",
    },
  ];

  let currentIndex = 0;

  const studentImages = document.querySelectorAll(".student-img");
  const testimonialText = document.querySelector(".testimonial-text");
  const authorName = document.querySelector(".author-name");
  const authorRole = document.querySelector(".author-role");
  const dots = document.querySelectorAll(".testimonial-nav .dot");
  const nextText = document.querySelector(".testimonial-nav .next-text");

  function updateTestimonial(index) {
    const testimonial = testimonials[index];

    // Update images with fade effect
    studentImages.forEach((img, i) => {
      img.style.opacity = "0";
      setTimeout(() => {
        img.src = testimonial.images[i];
        img.style.opacity = "1";
      }, 300);
    });

    // Update text content with fade effect
    testimonialText.style.opacity = "0";
    authorName.style.opacity = "0";
    authorRole.style.opacity = "0";

    setTimeout(() => {
      testimonialText.textContent = testimonial.text;
      authorName.textContent = testimonial.name;
      authorRole.textContent = testimonial.role;

      testimonialText.style.opacity = "1";
      authorName.style.opacity = "1";
      authorRole.style.opacity = "1";
    }, 300);

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Add transition CSS
  const style = document.createElement("style");
  style.textContent = `
        .student-img, .testimonial-text, .author-name, .author-role {
            transition: opacity 0.3s ease;
        }
    `;
  document.head.appendChild(style);

  // Next button click handler
  if (nextText) {
    nextText.style.cursor = "pointer";
    nextText.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial(currentIndex);
    });
  }

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.style.cursor = "pointer";
    dot.addEventListener("click", function () {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }, 5000);
});
