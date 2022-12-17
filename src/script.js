const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const closeButton = document.querySelector("#button-close")

const HIDDEN = "hidden";

function showDetails() {
    mainElement.classList.remove(HIDDEN);
}

function hideDetails() {
    mainElement.classList.add(HIDDEN);
}

function setDetails(anchor) {
    detailsImage.src = anchor.querySelector(".thumbnails-image").src;
    detailsTitle.innerHTML = anchor.querySelector(".thumbnails-title").innerHTML;
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i]);
        showDetails();
    })
}

closeButton.addEventListener("click", hideDetails);