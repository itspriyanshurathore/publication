const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

btn.addEventListener("click", () => {
  // Toggle icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  // Animate menu
  if (menu.classList.contains("scale-y-0")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("scale-y-0");
      menu.classList.add("scale-y-100");
    }, 10);
  } else {
    menu.classList.remove("scale-y-100");
    menu.classList.add("scale-y-0");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300); // matches duration-300
  }
});

const book = document.getElementById("book");
book.addEventListener("click", () => {
  book.classList.toggle("open");
});
