var waddles = document.getElementById("waddles");

waddles.addEventListener('mouseover', (event) => {
    changePig(event);
});
waddles.addEventListener('mouseout', (event) => {
    changePig(event);
});

function changePig(event) {
    let pigBox = event.target;
    let change = pigBox.style.backgroundColor;
    console.log(pigBox)
    if (change == "#ADD8E6") {
        pigBox.style.backgroundColor = "#9ACD32";
    } else {
        pigBox.style.backgroundColor = "#ADD8E6";
    }
}

window.addEventListener("keypress", changePageColor);
let body = document.body

function changePageColor(event) {
    if (event.key === "b") {
        body.style.background = "blue";
    } else if (event.key === "a") {
        body.style.background = "#FFBF00";
    } else if (event.key === "c") {
        body.style.background = "#592720";
    } else if (event.key === "d") {
        body.style.background = "#8FBC8F";
    } else if (event.key === "e") {
        body.style.background = "#8C1AFF";
    } else if (event.key === "f") {
        body.style.background = "#4F7942";
    } else if (event.key === "g") {
        body.style.background = "green";
    } else if (event.key === "h") {
        body.style.background = "#FF69B4";
    } else if (event.key === "i") {
        body.style.background = "ivory";
    } else if (event.key === "j") {
        body.style.background = "#1AFF1A";
    } else if (event.key === "k") {
        body.style.background = "#3AB09E";
    } else if (event.key === "l") {
        body.style.background = "#6B8E23";
    } else if (event.key === "m") {
        body.style.background = "#800000";
    } else if (event.key === "n") {
        body.style.background = "#F6ADC6";
    } else if (event.key === "o") {
        body.style.background = "orange";
    } else if (event.key === "p") {
        body.style.background = "purple";
    } else if (event.key === "q") {
        body.style.background = "#80FFD4";
    } else if (event.key === "r") {
        body.style.background = "red";
    } else if (event.key === "s") {
        body.style.background = "#E9967A";
    } else if (event.key === "t") {
        body.style.background = "#008080";
    } else if (event.key === "u") {
        body.style.background = "#635147";
    } else if (event.key === "v") {
        body.style.background = "violet";
    } else if (event.key === "w") {
        body.style.background = "#A4F4F9";
    } else if (event.key === "x") {
        body.style.background = "#738678";
    } else if (event.key === "y") {
        body.style.background = "#FFFF99";
    } else if (event.key === "z") {
        body.style.background = "#CC99FF";
    }
}
