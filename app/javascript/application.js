// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

/* Selecting the hamburger and close elements from the DOM. */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close-menu");
const link = document.querySelectorAll(".link");
const menu = document.querySelector(".menu");

/**
 * This is a forEach loop that is looping through
 * each link and adding an event listener to each link. When the link is clicked,
 * the window will reload.
 * */
link.forEach((link) => {
  link.addEventListener("click", () => {
    window.location.reload();
  });
});

/**
 * This is adding an event listener to the hamburger element.
 * When the hamburger is clicked, the menu will appear. *
* */
hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
  close.classList.remove("hidden");
});

/**
 * This is adding an event listener to the close element.
 * When the close element is clicked, the menu will disappear.
 * */
close.addEventListener("click", () => {
  menu.classList.add("hidden");
  close.classList.add("hidden");
});
