const makeRainbow = () => {
    const rainbowButton = document.getElementById("rainbowButton");
    const rainbow = document.querySelector("#rainbow");
    const potOfGold = document.getElementById("potOfGold");

    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let position = 0;

    const updateRainbow = setInterval(() => {
        
        if(position == colors.length){
            potOfGold.classList.remove("hidden");
            clearInterval(updateRainbow);
        }

        const newColor = document.createElement("p")
        newColor.classList.add("rainbowStrip");
        newColor.style.setProperty("background", colors[position]);

        position++;
        rainbow.append(newColor);

    }, 10)
}

let quotes = ["Be the change you wish to see in the world - Mahatma Gandhi", 
"Without music, life would be a mistake. - Friedrich Nietzsche", 
"A day without laughter is a day wasted. - Nicolas Chamfort",
"You talk when you cease to be at peace with your thoughts. - Kahlil Gibran",
"May you live every day of your life. - Jonathan Swift"];

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

window.onload = () => {
    document.getElementById("rainbowButton").onclick = makeRainbow;
    quoteMethod();
}