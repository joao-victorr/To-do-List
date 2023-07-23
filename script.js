

const title = document.querySelector("#title");
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const table = document.querySelector(".table");


function addTitle() {
    if (title.value == "" || text.value == "") {
        alert("Preenche todos os campos")
    } else {

        let table = document.querySelector(".modal .table")?.cloneNode(true);

        table.querySelector(".widget_title").textContent = title.value;
        table.querySelector(".widget_text").textContent = text.value;

        document.querySelector(".viewList")?.appendChild(table);
        title.value = "";
        text.value = "";
    }
}

button.addEventListener("click", addTitle)