const displayTherm = () => {
    const fundAmt = parseInt(document.getElementById("funds").value);
    const root = document.querySelector(":root");

    const error = document.getElementById("error-two");
    error.classList.add("hidden");

    if(fundAmt < 0){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    }

    
    if(fundAmt <= 4999 && fundAmt > 0){
        root.style.setProperty("--num", "25%")
    } else if(fundAmt <= 7499 && fundAmt > 0){
        root.style.setProperty("--num", "50%")
    } else if(fundAmt <= 9999 && fundAmt > 0){
        root.style.setProperty("--num", "75%")
    } else if (fundAmt == 10000 && fundAmt > 0){
        root.style.setProperty("--num", "100%")
    }
}




window.onload = () => {
    // document.getElementById("menu-toggle").onclick = toggleNav;
    // document.getElementById("compare-button").onclick = displayInput;
    document.getElementById("fund-button").onclick = displayTherm;
    // document.getElementById("eOne").onclick = showOne;
    // document.getElementById("eTwo").onclick = showTwo;
}