const hamburgerMenu = document.querySelector(".hamburger-menu i");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".sidebar .close-icon i");

hamburgerMenu.addEventListener("click", function () {
  sidebar.style.display = "block";
  hamburgerMenu.classList.add("hide");
});

closeButton.addEventListener("click", function () {
  sidebar.style.display = "none";
  hamburgerMenu.classList.remove("hide");
});
