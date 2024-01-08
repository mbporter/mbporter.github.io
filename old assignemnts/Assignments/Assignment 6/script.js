const showOtter = () => {
    document.getElementById("otter").classList.remove("hide");
}

const hideOtter = () => {
    document.getElementById("otter").classList.add("hide");
}

const moveSquare = () => {
    document.getElementById("square").classList.add("anna");
}

const printReview = () => {
    document.getElementById("boxes").classList.add("decorator");
    
    const product = document.getElementById("product").value;
    const header = document.getElementById("add-name");

    const comment = document.getElementById("comment").value;
    const rate = document.getElementById("rate").value;
    const commentP = document.getElementById("add-comment");

    const user = document.getElementById("user").value;
    const userP = document.getElementById("add-user");

    header.innerHTML += `<section class = "separate"><strong>${product}</strong> <p class = "small">${rate} stars | ${comment}</p> <p class = "small">by ${user}</p></section>`;
}


window.onload = () => {
    document.getElementById("button-show").onclick = showOtter;
    document.getElementById("button-hide").onclick = hideOtter;
    document.getElementById("button-move").onclick = moveSquare;
    document.getElementById("add-button").onclick = printReview;
}