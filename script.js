const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    remoneActiveClass();
    panel.classList.add("active");
  });
});
function remoneActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
