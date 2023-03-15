// CREIAMO LA LISTA DELLA SPESA QUINDI UN ARRAY
const listItem = ["pane", "pasta", "latte", "mozzarella", "carciofi", "banane"];
const items = document.querySelector("ul")

let i = 0;

while (i < listItem.length) {
    items.innerHTML += `<li>${listItem[i]}</li>`
    i++
}