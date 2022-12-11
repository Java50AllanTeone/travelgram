const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchors = document.querySelectorAll(".thumbnails-anchor");

function setDetails(anchor) {
    detailsImage.src = anchor.querySelector(".thumbnails-image").src;
    detailsTitle.innerHTML = anchor.querySelector(".thumbnails-title").innerHTML;
}

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        setDetails(anchors[i]);
    })
}