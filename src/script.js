const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsContainer = document.querySelector(".details-container");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const closeButton = document.querySelector("#button-close");
const audioElement = document.querySelector("#audio-element");

const SCALE_WIDTH = "scale-width";
const SCALE_HEIGHT = "scale-height";
const HIDDEN = "hidden";
const OPACITY_0 = "opacity-0";

function showDetails() {
    mainElement.classList.remove(HIDDEN);
    playMusic(audioElement, 5000);
    detailsTitle.classList.add(OPACITY_0);        //adding opacity animation to details title


    setTimeout(function() {
        detailsContainer.classList.add(SCALE_WIDTH);        //adding a bit more complicate animation
        
    }, 0.1);

    setTimeout(function() {
        detailsContainer.classList.remove(SCALE_WIDTH);
        detailsContainer.classList.add(SCALE_HEIGHT);
    }, 300);

    setTimeout(function() {
        detailsContainer.classList.remove(SCALE_HEIGHT);
    }, 600);

    setTimeout(function() {
        detailsTitle.classList.remove(OPACITY_0);
    }, 900);
}

function playMusic(audio, duration) {
    audio.play();

    setTimeout(function() {     //in case of user changes details image before the audio ends (5s),
        audioElement.pause();   //it stops the next audio when the first timeout is over. cannot fix
    }, duration);
}

function hideDetails() {
    mainElement.classList.add(HIDDEN);
    audioElement.pause();       //pause in case of closing before the audio ends
}

function setDetails(anchor) {
    detailsImage.src = anchor.querySelector(".thumbnails-image").src;
    detailsTitle.innerHTML = anchor.querySelector(".thumbnails-title").innerHTML;
    audioElement.src = anchor.dataset.audio;
}



for (let i = 0; i < anchors.length; i++) {
    anchors[i].dataset.audio = "audio/" + (i + 1) + ".mp3";        //adding audio sources to anchors datasets
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i]);
        showDetails();
        playMusic();
    })
}

closeButton.addEventListener("click", hideDetails);

