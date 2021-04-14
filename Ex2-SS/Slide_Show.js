let currentpicture = 0;

showpicture(currentpicture);

function switchpicture(pos) {
    showpicture(currentpicture += pos);
}

function showpicture(pos) {
    let slideshow = document.getElementsByClassName("miriam");

    if (pos < 1) {
        currentpicture = slideshow.length;
    }

    if (pos > slideshow.length) {
        currentpicture = 1;
    }

    for (let i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }

    slideshow[currentpicture - 1].style.display = "block";
}
