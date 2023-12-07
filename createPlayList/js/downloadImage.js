function downloadImage() {
    var fileInput = document.getElementById('myFileInput');
    fileInput.click();

    var imgBtn = document.getElementById('imageBtn');

    setTimeout(function () {
        imgBtn.src = "../media/headup.jpg"
    }, 1000);
}