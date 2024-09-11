const timerEndSound = new Audio('timer-end.mp3');
const bubbleBlowSound = new Audio('bubble-blow.mp3');
const hitSound = new Audio('click.mp3');


var timer = 30;
var score = 0;
var hitrn;

function makebubble() {
    var clutter = '';
    for (var i = 0; i <= 107; i++) {
        var randomNum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNum}</div>`;
    }
    document.querySelector(".panelbottom").innerHTML = clutter;
    hitSound.play();
}

function runTimer() {
    var TimeInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer + 's';
        } else {
            clearInterval(TimeInterval);
            timerEndSound.play();
            document.querySelector(".panelbottom").innerHTML = `<h1>You scored ${score}</h1>
                <button id="playAgain"><a href="">Play Again</a></button>`
        }
    }, 1000)
}

function newHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hitrn;
}

function increaeScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;

}

document.querySelector(".panelbottom").addEventListener("click", function (x) {
    var clickedNumber = Number(x.target.textContent);
    if (clickedNumber === hitrn) {
        increaeScore();
        makebubble();
        newHit();
    }
})

makebubble();
runTimer();
newHit();


