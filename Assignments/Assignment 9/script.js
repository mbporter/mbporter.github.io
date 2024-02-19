let isAnimating = false;
let intervalId;
let position = 0;
let direction = 1; // 1 for moving down, -1 for moving up
const speed = 3; // Adjust speed as needed

const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const showOne = () => {
    document.getElementById("exercise-one").classList.remove("hidden");
    document.getElementById("exercise-two").classList.add("hidden");
}

const showTwo = () => {
    document.getElementById("exercise-two").classList.remove("hidden");
    document.getElementById("exercise-one").classList.add("hidden");
}

const startBallAnimation = () => {
    if (!isAnimating) {
        intervalId = setInterval(moveBall, 10); // Adjust interval as needed
        isAnimating = true;
    } else {
        clearInterval(intervalId);
        isAnimating = false;
    }
}

const moveBall = () => {
    const ball = document.getElementById("ball");
    position += direction * speed;
    ball.style.bottom = position + "px";

    // Check for collision with top or bottom
    if (position >= 400) { // Adjust the maximum position as needed
        direction = -1;
    } else if (position <= 0) { // Adjust the minimum position as needed
        direction = 1;
    }
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    document.getElementById("eOne").onclick = showOne;
    document.getElementById("eTwo").onclick = showTwo;
    document.getElementById("ball-start").onclick = startBallAnimation;
    const yogaPoses = document.querySelectorAll("#yoga img");
    const textList = document.getElementById("text-list");

    yogaPoses.forEach(pose => {
        pose.onclick = function() {
            let poseName;
            if (this.alt === "Side Angle Pose") {
                poseName = "Side Angle Pose";
            } else if (this.alt === "Downward Dog") {
                poseName = "Downward Dog";
            } else if (this.alt === "Tree Pose") {
                poseName = "Tree Pose";
            } else if (this.alt === "Gate Pose") {
                poseName = "Gate Pose";
            } else if (this.alt === "Crossfoot Pose") {
                poseName = "Crossfoot Pose";
            } else if (this.alt === "Side Lunge Pose") {
                poseName = "Side Lunge Pose";
            } else if (this.alt === "Back lunge Pose") {
                poseName = "Back lunge Pose";
            } else if (this.alt === "Forward Lunge Pose") {
                poseName = "Forward Lunge Pose";
            } 
            // Add more if statements for other poses as needed

            const listItem = document.createElement("li");
            listItem.textContent = poseName;
            textList.appendChild(listItem);
        };
    });
};

