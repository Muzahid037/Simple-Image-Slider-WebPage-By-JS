let images = [], x = -1;
images[0] = "image/0.jpg";
images[1] = "image/1.jpg";
images[2] = "image/2.jpg";
images[3] = "image/3.jpg";
images[4] = "image/4.jpg";

function displayNextImage() {
    //x = (x === images.length - 1) ? 0 : x + 1;
    x++;
    x %= images.length;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    //x = (x <= 0) ? images.length - 1 : x - 1;
    x--;
    x %= images.length;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}


//startTimer();