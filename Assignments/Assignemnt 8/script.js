const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const yoga = document.getElementById("yogaslider")





const showOne = () => {
    document.getElementById("exercise-one").classList.remove("hidden");
    document.getElementById("exercise-two").classList.add("hidden");
}

const showTwo = () => {
    document.getElementById("exercise-two").classList.remove("hidden");
    document.getElementById("exercise-one").classList.add("hidden");
}




//on load menu
window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    document.getElementById("eOne").onclick = showOne;
    document.getElementById("eTwo").onclick = showTwo;
}