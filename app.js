const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");
const opentext = document.querySelector(".text");

closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    opentext.classList.add("active");
    closedFace.classList.remove("active")
  }
});

openFace.addEventListener("click", () => {
  if (closedFace.classList.contains("closed")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active")
    opentext.classList.remove("active")
  }
});
