const showOtter = () => {
    document.getElementById("otter").classList.remove("hide");
}

const hideOtter = () => {
    document.getElementById("otter").classList.add("hide");
}

const moveSquare = () => {
    document.getElementById("square").classList.add("anna");
}


window.onload = () => {
    document.getElementById("button-show").onclick = showOtter;
    document.getElementById("button-hide").onclick = hideOtter;
    document.getElementById("button-move").onclick = moveSquare;
}