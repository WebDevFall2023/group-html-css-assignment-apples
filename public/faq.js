document.addEventListener("DOMContentLoaded", function () {
    const faqContainers = document.querySelectorAll(".glowing-border");
  
    faqContainers.forEach((container) => {
      container.addEventListener("click", function () {
        const answer = this.querySelector(".newName");
  
        // Hide all other answers and remove active state from other containers
        faqContainers.forEach((otherContainer) => {
          if (otherContainer !== container) {
            const otherAnswer = otherContainer.querySelector(".newName");
            otherAnswer.classList.remove("visible");
            otherContainer.classList.remove("active");
          }
        });
  
        // Toggle visibility of the clicked answer
        answer.classList.toggle("visible");
  
        // Toggle active state for the clicked container
        container.classList.toggle("active");
  
        // Apply a rotation effect to the container
        container.classList.toggle("rotate");
      });
    });
  });
  