const myImg = document.getElementById("myImg");
const myImg2 = document.getElementById("myImg2");
const rotationSlider = document.getElementById("rotationSlider");
const box3 = document.getElementById("box3");

let isFirstImage = true;

rotationSlider.addEventListener("input", function() {
    const rotationValue = this.value;
    myImg2.style.transform = `rotate(${rotationValue}deg)`; 
});

myImg.addEventListener("click", function() {
    if (isFirstImage) {
        myImg.src = "images/otter.jpg";
    } else {
        myImg.src = "images/otter2.jpg";
    }
    isFirstImage = !isFirstImage;
});

box3.addEventListener("click", function() {
    const starImg =document.createElement("img");
    starImg.src = "images/otterstar.jpg";
    starImg.classList.add("star-image");

    this.appendChild(starImg);
})