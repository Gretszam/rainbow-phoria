let background = document.getElementById("waddles");

waddles.addEventListener('mouseover', (event) => {
    changePig(event);
})
waddles.addEventListener('mouseout', (event) => {
    changePig(event);
})

function changePig(event) {
    let pigBox = event.target;
    let change = pigBox.style.backgroundColor;
    if (color == "ADD8E6") {
        pigBox.style.backgroundColor = "9ACD32";
    } else {
        pigBox.style.backgroundColor = "ADD8E6";
    }
}

window.addEventListener("keypress", changePageColor);
let body = document.body

function changePageColor(event) {
    if (event.key === "b"){
        body.style.background = "blue";
    } else if (event.key === "o") {
        body.style.background = "orange";
    } else if (event.key === "g"){
        body.style.background = "green";
    } else if (event.key === "v"){
        body.style.background = "violet";
    } else if (event.key === "y")
        body.style.background = "yellow";
    } else if (event.key === "p")
        body.style.background = "purple";
    } else if (event.key === "d")
        body.style.background = "#8FBC8F";
    } else if (event.key === "s")
        body.style.background = "#E9967A";
}
