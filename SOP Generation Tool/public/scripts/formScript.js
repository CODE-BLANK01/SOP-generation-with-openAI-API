// JavaScript for handling form section navigation
document.addEventListener("DOMContentLoaded", function () {
  const nextButtons = document.querySelectorAll(".next-button");
  const prevButtons = document.querySelectorAll(".prev-button");

  nextButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const currentSectionId = this.parentElement.id;
      const currentSection = document.getElementById(currentSectionId);
      const nextSectionId = this.getAttribute("data-next");
      const nextSection = document.getElementById(nextSectionId);

      currentSection.style.display = "none";
      nextSection.style.display = "block";
    });
  });

  prevButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const currentSectionId = this.parentElement.id;
      const currentSection = document.getElementById(currentSectionId);
      const prevSectionId = this.getAttribute("data-prev");
      const prevSection = document.getElementById(prevSectionId);

      currentSection.style.display = "none";
      prevSection.style.display = "block";
    });
  });
});
