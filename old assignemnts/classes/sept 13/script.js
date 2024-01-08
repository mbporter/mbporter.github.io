const changeText = () =>{
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Hi! to you mac";
    helloP.classList.add("special");
}

const showPlace = () => {
    document.getElementById("place").classList.remove("hide");
}

const hidePlace = () => {
    document.getElementById("place").classList.add("hide");
}

window.onload = () => {
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showPlace;
    document.getElementById("button-hide").onclick = hidePlace;
}