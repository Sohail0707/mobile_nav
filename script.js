const list = document.querySelectorAll(".f-list");
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

// ////////////// Dropdown list /////////////////////
// Array of categories. it has to be taken from database
let categoris = ["Salary", "Pocket money", "Real estate", "etc", "etc"];
const catList = document.querySelector(".cat-list");

function addCategory() {
  categoris.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;

    catList.appendChild(li);
  });
}
addCategory();

const search = document.querySelector(".cat-search");
const catBox = document.querySelector(".category-box");
const listItem = document.querySelectorAll(".cat-list li");

search.addEventListener("click", function () {
  catBox.classList.add("list-open");
  search.placeholder = "Search";
});

listItem.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item.innerHTML);
    search.value = item.innerHTML;
    catBox.classList.remove("list-open");
    search.placeholder = "Category";
  });
});
