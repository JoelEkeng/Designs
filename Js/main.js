// Set the duration in milliseconds (e.g., 5000 ms for 5 seconds)
const preloaderDuration = 150000;
const preloader = document.querySelector(".preloader");
const main = document.querySelector(".main");

// Hide the preloader after the specified duration, regardless of content loading
setTimeout(function () {
    preloader.style.display = "none";
    main.style.display = "block";
}, preloaderDuration);

// Additional code to hide the preloader when the content is fully loaded
window.addEventListener("load", function () {
    preloader.style.display = "none";
    main.style.display = "block";
});
