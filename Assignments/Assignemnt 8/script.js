const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}
//showing the diffrent exe. by not using diffrent html files
const showOne = () => {
    document.getElementById("exercise-one").classList.remove("hidden");
    document.getElementById("exercise-two").classList.add("hidden");
}

const showTwo = () => {
    document.getElementById("exercise-two").classList.remove("hidden");
    document.getElementById("exercise-one").classList.add("hidden");
}



//showing how much red based off % between

//on load menu
window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    document.getElementById("eOne").onclick = showOne;
    document.getElementById("eTwo").onclick = showTwo;
}