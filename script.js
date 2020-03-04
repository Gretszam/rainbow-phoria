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
