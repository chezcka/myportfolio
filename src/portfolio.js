// Smooth Scrolling
export function smoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}

// Toggle skills dropdown
export function toggleSkills(sectionId) {
  const section = document.getElementById(sectionId);
  const title = section.previousElementSibling;

  // Toggle active class for arrow rotation
  title.classList.toggle('active');

  // Show or hide the skills
  section.classList.toggle('show');
}
