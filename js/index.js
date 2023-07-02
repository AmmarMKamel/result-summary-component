const imgElements = document.querySelectorAll("img");
const spanElements = document.querySelectorAll("#summary span");

fetch("https://ammarmkamel.github.io/results-summary-component/data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 4; i++) {
      imgElements[i].src = data[i].icon;
      imgElements[i].insertAdjacentHTML("afterend", data[i].category);
      spanElements[i].innerText = data[i].score;
    }
  })
  .catch((e) => console.log(e));
