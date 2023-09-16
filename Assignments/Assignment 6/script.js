const showOtter = () => {
    document.getElementById("otter").classList.remove("hide");
}

const hideOtter = () => {
    document.getElementById("otter").classList.add("hide");
}

window.onload = () => {
    //document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showOtter;
    document.getElementById("button-hide").onclick = hideOtter;
}