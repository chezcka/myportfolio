// Smooth Scrolling
export function smoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    let target = link.getAttribute("href");

    // Ignore React Router hash routes like "#/certificates"
    if (target.startsWith("#/")) return;

    // Allow only real section anchors
    const section = document.querySelector(target);
    if (!section) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
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
