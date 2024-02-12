const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}


const CommandLine = document.getElementById("letters");
const image = document.getElementById("man");

const imgSwitch = () => {
    const inputValue = CommandLine.value.trim().toLowerCase();
    let imagePath = 'images/original.jpg';

    const lastChar = inputValue.charAt(inputValue.length - 1);
    
    if (lastChar === 'b') {
        imagePath = 'images/birthday.jpg';
    } else if (lastChar === 'c') {
        imagePath = 'images/clown.jpg';
    } else if (lastChar === 'p') {
        imagePath = 'images/read.jpg';
    } else if (lastChar === 'r') {
        imagePath = 'images/rain.jpg';
    } else if (lastChar === 's') {
        imagePath = 'images/shovel.jpg';
    } else if (lastChar === 'w') {
        imagePath = 'images/work.jpg';
    }

    image.src = imagePath;
};

const changeImage = () => {
    const sliderValue = document.getElementById("yogaslide").value;
    const image = document.getElementById("yoga");
    const imageUrl = "images/yoga" + sliderValue + ".jpg";
    image.src = imageUrl;
}

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
    CommandLine.onkeyup = imgSwitch;
    document.getElementById("yogaslide").oninput = changeImage;
};
