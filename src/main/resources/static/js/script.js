// loading animation
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader_wrapper");
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});
