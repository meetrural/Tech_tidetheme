document.addEventListener("DOMContentLoaded", function() {
    const animationContainers = document.querySelectorAll(".animation-container-down");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animationContainer.classList.add("animate-slide-down");
                observer.unobserve(entry.target); // Stop observing after the animation triggers once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    observer.observe(animationContainer);
});



document.addEventListener("DOMContentLoaded", function() {
  const animationContainers = document.querySelectorAll(".animation-container");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate-slide-in-left");
              observer.unobserve(entry.target); // Stop observing after the animation triggers once
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  animationContainers.forEach(container => observer.observe(container));
});

document.addEventListener("DOMContentLoaded", function() {
  const animationContainers = document.querySelectorAll(".animation-container-up");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate-slide-in-up");
              observer.unobserve(entry.target); // Stop observing after the animation triggers once
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  animationContainers.forEach(container => observer.observe(container));
});


document.addEventListener("DOMContentLoaded", function() {
  const animationContainers = document.querySelectorAll(".animation-container-right");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate-slide-in-right");
              observer.unobserve(entry.target); // Stop observing after the animation triggers once
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  animationContainers.forEach(container => observer.observe(container));
});
document.addEventListener('DOMContentLoaded', function() {
  const historySection = document.getElementById('history-section');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleAnimation() {
    if (isInViewport(historySection)) {
      historySection.classList.add('active');
      window.removeEventListener('scroll', handleAnimation);
    }
  }

  window.addEventListener('scroll', handleAnimation);
  handleAnimation(); // Check on load in case the section is already in view
});







document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animation-slide-down');
          }
      });
  }, {
      threshold: 0.5 // Adjust this value as needed
  });

  document.querySelectorAll('.animation-container-down').forEach(container => {
      observer.observe(container);
  });
});
