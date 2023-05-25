const list = document.querySelectorAll(".list");
const l0 = document.querySelector(".l-0");
const l1 = document.querySelector(".l-1");
const l2 = document.querySelector(".l-2");
const l3 = document.querySelector(".l-3");
const indicator = document.querySelector(".indicator");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
  if (l0.classList.contains("active")) {
    indicator.classList.add("p-0");
    indicator.classList.remove("p-2");
    indicator.classList.remove("p-3");
    indicator.classList.remove("p-1");
  }
  if (l1.classList.contains("active")) {
    indicator.classList.add("p-1");
    indicator.classList.remove("p-2");
    indicator.classList.remove("p-3");
    indicator.classList.remove("p-0");
  }
  if (l2.classList.contains("active")) {
    indicator.classList.add("p-2");
    indicator.classList.remove("p-1");
    indicator.classList.remove("p-3");
    indicator.classList.remove("p-0");
  }
  if (l3.classList.contains("active")) {
    indicator.classList.add("p-3");
    indicator.classList.remove("p-2");
    indicator.classList.remove("p-1");
    indicator.classList.remove("p-0");
  }
}

list.forEach((item) => item.addEventListener("click", activeLink));
