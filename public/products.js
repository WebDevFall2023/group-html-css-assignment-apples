console.log("Hello, this JavaScript file is working!");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsDesc = document.querySelectorAll('.hiddenDesc');
const hiddenElementsDescFritter = document.querySelectorAll('.hiddenDescFritter');

hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsDesc.forEach((el) => observer.observe(el));
hiddenElementsDescFritter.forEach((el) => observer.observe(el));

document.querySelectorAll('.section').forEach((section) => {
    section.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });