document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("surpriseButton").addEventListener("click", function() {
        document.getElementById("surprise").style.display = "block";
        document.getElementById("imageContainer").style.display = "block"; // Display the image container
        startConfetti();
        playBackgroundMusic();
    });
});

function startConfetti() {
    var confettiSettings = { target: 'confettiCanvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function playBackgroundMusic() {
    var bgMusic = document.getElementById("bgMusic");
    bgMusic.play();
}
