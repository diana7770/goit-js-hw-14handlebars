// import "../css/style.css";
import perfumes from "../js/perfume.json";
import perfume from "../template/perfume.hbs";

const listEl = document.querySelector(".perfume");

function createList(perfumes) {
  return perfumes
    .map((obj) => {
      return perfume(obj);
    })
    .join("");
}

const perfumeList = createList(perfumes);

listEl.insertAdjacentHTML("beforeend", perfumeList);
console.log(perfumeList);
