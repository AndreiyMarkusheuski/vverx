const navLinks = document.querySelectorAll(".header-nav-link");
const navContainer = document.querySelector(".header-nav-links");
// const header = document.querySelector("#header");

const disableAllNavLinks = () => {
  navLinks.forEach((navItem) => {
    navItem.classList.remove("active");
  });
};

const deletePrevTheme = (itemNode) => {
  itemNode.classList.remove("dark");
  itemNode.classList.remove("light");
};

// const clearHeader = () => {
//   navLinks.forEach((navLink) => {
//     const removedClass = navLink.id.split("-link")[0];
//     header.classList.remove(removedClass);
//   });
// };

const resetClasses = () => {
    console.log('here')
  disableAllNavLinks();
  deletePrevTheme(navContainer);
//   clearHeader();
};

window.onload = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.51,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        resetClasses();

        const activeSection = entry.target;
        const activeSectionId = activeSection.id;
        const activeSectionTheme = activeSection.getAttribute("data-theme");

        document
          .querySelector(`#${activeSectionId}-link`)
          .classList.add("active");
        navContainer.classList.add(activeSectionTheme);
        // header.classList.add(activeSectionId);
      }
    });
  }, options);

  const sections = document.querySelectorAll(".smooth_scroll-section");
  sections.forEach((section) => {
    observer.observe(section);
  });
};


