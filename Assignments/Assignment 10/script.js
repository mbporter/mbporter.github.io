const toggleNav = () => {
    document.getElementById
}

const slide = () =>{
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    currentImage.classList.add("hidden");

    let nextImage = currentImage.nextElementSibling;
    if (nextImage == null) {
        nextImage = document.querySelector("#slideshow :first-child");
    }
    nextImage.classList.remove("hidden");
    //watching the video because in class i got a little confused but your joke was very punny (heh heh)
}

let quotes = ["Elevate your photography game with our cutting-edge equipment. Unleash your creativity today!", 
"Transform ordinary moments into extraordinary memories with our high-quality cameras. Start capturing magic now!", 
"Illuminate your passion for photography with our professional lighting solutions. Shine bright in every shot!",
"Frame your world with clarity and precision using our top-of-the-line lenses. See the beauty in every detail!",
"Capture life's fleeting moments with our state-of-the-art photography gear. Preserve memories that last a lifetime!"];







const quoteMethod = () => {
    const quoteText = document.querySelector("#quote-text");

    let quoteIndex = 0;

    const updateQuote = () => {
        console.log(quoteIndex);
        if(quoteIndex == quotes.length){
            quoteIndex = 0;
        }

        quoteText.innerHTML = quotes[quoteIndex];

        quoteIndex++;
    };

    updateQuote();

    setInterval(updateQuote, 2000);
}

let quotes2 = [
"Image by wirestock on Freepik", 
"Image by wirestock on Freepik", 
"Image by vecstock on Freepik",
"Image by wirestock on Freepik",
"Image by wirestock on Freepik"];

const quoteMethod2 = () => {
    const quoteText2 = document.querySelector("#quote-text2");

    let quoteIndex2 = 0;

    const updateQuote2 = () => {
        console.log(quoteIndex2);
        if(quoteIndex2 == quotes.length){
            quoteIndex2 = 0;
        }

        quoteText2.innerHTML = quotes2[quoteIndex2];

        quoteIndex2++;
    };

    updateQuote2();

    setInterval(updateQuote2, 2000);
}


window.onload = () => {
    setInterval(slide, 2000);
    quoteMethod();
    quoteMethod2();
};