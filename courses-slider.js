document.addEventListener("DOMContentLoaded", function () {
  const courseSets = [
    [
      {
        image: "images/Basic Book-2016 1.png",
        title: "Complete Exam Preparation",
        description:
          "Everything you need to ace your language proficiency tests",
        language: "Korean",
      },
      {
        image: "images/Basic Book-2016 1.png",
        title: "Cultural Immersion Programs",
        description: "Learn language through cultural context and immersion",
        language: "Japanese",
      },
      {
        image: "images/Basic Book-2016 1.png",
        title: "Practical Conversation Skills",
        description: "Focus on real-world communication and practical usage",
        language: "Korean",
      },
      {
        image: "images/Basic Book-2016 1.png",
        title: "Business Language Training",
        description: "Specialized courses for professional environments",
        language: "Japanese",
      },
    ],
    [
      {
        image: "images/language-book.png",
        title: "Only Guide You Need To Pass The Exam",
        description:
          "Unlock a world of knowledge with seamless access to UBT's comprehensive",
        language: "Korean",
      },
      {
        image: "images/language-book.png",
        title: "Only Guide You Need To Pass The Exam",
        description:
          "Unlock a world of knowledge with seamless access to UBT's comprehensive",
        language: "Japanese",
      },
      {
        image: "images/language-book.png",
        title: "Only Guide You Need To Pass The Exam",
        description:
          "Unlock a world of knowledge with seamless access to UBT's comprehensive",
        language: "Korean",
      },
      {
        image: "images/language-book.png",
        title: "Only Guide You Need To Pass The Exam",
        description:
          "Unlock a world of knowledge with seamless access to UBT's comprehensive",
        language: "Japanese",
      },
    ],
    [
      {
        image: "images/Basic Book-2016 1.png",
        title: "Complete Exam Preparation",
        description:
          "Everything you need to ace your language proficiency tests",
        language: "Korean",
      },
      {
        image: "images/Basic Book-2016 1.png",
        title: "Cultural Immersion Programs",
        description: "Learn language through cultural context and immersion",
        language: "Japanese",
      },
      {
        image: "images/Basic Book-2016 1.png",
        title: "Practical Conversation Skills",
        description: "Focus on real-world communication and practical usage",
        language: "Korean",
      },
      {
        image: "images/Basic Book-2016 1.png",
        title: "Business Language Training",
        description: "Specialized courses for professional environments",
        language: "Japanese",
      },
    ],
    [
      {
        image: "images/book2.png",
        title: "Master Language Skills Effectively",
        description:
          "Comprehensive study materials designed for quick learning and retention",
        language: "Korean",
      },
      {
        image: "images/book2.png",
        title: "Professional Language Certification",
        description:
          "Get certified with our industry-recognized language programs",
        language: "Japanese",
      },
      {
        image: "images/book2.png",
        title: "Interactive Learning Experience",
        description: "Engage with interactive content and real-world scenarios",
        language: "Korean",
      },
      {
        image: "images/book2.png",
        title: "Beginner to Advanced Courses",
        description: "Progress at your own pace from basic to advanced levels",
        language: "Japanese",
      },
    ],
    [
      {
        image: "images/book3.png",
        title: "Complete Exam Preparation",
        description:
          "Everything you need to ace your language proficiency tests",
        language: "Korean",
      },
      {
        image: "images/book3.png",
        title: "Cultural Immersion Programs",
        description: "Learn language through cultural context and immersion",
        language: "Japanese",
      },
      {
        image: "images/book3.png",
        title: "Practical Conversation Skills",
        description: "Focus on real-world communication and practical usage",
        language: "Korean",
      },
      {
        image: "images/book3.png",
        title: "Business Language Training",
        description: "Specialized courses for professional environments",
        language: "Japanese",
      },
    ],
  ];

  let currentCourseIndex = 2;

  const courseCards = document.querySelectorAll(
    ".courses-section .course-card"
  );
  const courseDots = document.querySelectorAll(".courses-dots .dot");

  function updateCourses(index) {
    const courses = courseSets[index];

    courseCards.forEach((card, i) => {
      const course = courses[i];
      const img = card.querySelector(".course-image img");
      const title = card.querySelector(".card-title");
      const description = card.querySelector(".card-description");
      const language = card.querySelector(".card-language");

      card.style.opacity = "0";

      setTimeout(() => {
        img.src = course.image;
        title.textContent = course.title;
        description.textContent = course.description;
        language.textContent = course.language;

        card.style.opacity = "1";
      }, 300);
    });

    // Update active dot
    courseDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Add transition CSS for courses
  const courseStyle = document.createElement("style");
  courseStyle.textContent = `
    .courses-section .course-card {
      transition: opacity 0.3s ease;
    }
    .courses-dots .dot {
      cursor: pointer;
    }
  `;
  document.head.appendChild(courseStyle);

  // Dot click handlers
  courseDots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentCourseIndex = index;
      updateCourses(currentCourseIndex);
    });
  });

  setInterval(() => {
    currentCourseIndex = (currentCourseIndex + 1) % courseSets.length;
    updateCourses(currentCourseIndex);
  }, 6000);
});
