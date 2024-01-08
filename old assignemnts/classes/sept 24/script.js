console.log("mac poops");

//const add = (a,b) => a+b;

//const add = (a, b) + => {return a + b ;}

//console.log(add(5,6));

//const square = a => a * a;
//const square = (a) => a * a;

//console.log(square(5));

//const hello = () => console.log("hello fa");

//hello();

//const helloSpecific = userName => console.log ("hello " + userName + "!!!!");

//helloSpecific("Mbporter");

/*const helloFullName = (firstName, lastName) => {
    console.log("hello "+ firstName + " " + lastName + ".");
    console.log("you are awsome lil thing");
};

helloFullName("Mckinnon", "Porter"); */

const moveSquare = () =>{
    document.getElementById("square").classList.add("anna");

}

const displayName = () =>{
    const firstName = document.getElementById("txt-first-name").value;
    console.log("hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("button-move") .onclick = moveSquare;
    document.getElementById("button-show-name").onclick = displayName;
}