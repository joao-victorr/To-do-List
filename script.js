

const title = document.querySelector("#title")
const text = document.querySelector("#text")
const button = document.querySelector("#button")
const table = document.querySelector(".table")

function addTitle() {
    if (title.value == "" || text.value == "") {
        alert("Preenche todos os campos")
    } else {

        let contentTitle = title.value
        let contentText = text.value
        

        const widget = document.createElement("div")
        const widgetTitle = document.createElement("div")
        const widgetText = document.createElement("div")
        const pTitle = document.createElement("p")
        const pText = document.createElement("p")

        table.append(widget)
        widget.append(widgetTitle, widgetText)
        widgetTitle.append(pTitle)
        widgetText.append(pText)
        pTitle.innerText = contentTitle
        pText.innerText = contentText
        

        widget.classList.add("widget")
        widgetTitle.classList.add("widget_title")
        widgetText.classList.add("widget_text")

        
        title.value = ""
        text.value = ""


    }
}

button.addEventListener("click", addTitle)