const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
    panel.classList.remove("one");
  });
});
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// all is ok
// i try making awsome
