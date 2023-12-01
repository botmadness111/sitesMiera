document.addEventListener("DOMContentLoaded", function () {

    // alert(document.elementFromPoint(800, 300).className); //самый глубоко вложенный элемент в указанных координатах

    var container = document.getElementById("container");

    /*var xContainer = container.getBoundingClientRect().x // отступ слева
    var yContainer = container.getBoundingClientRect().y // отступ сверху*/
    //alert(xContainer + " " + yContainer);

    // let padding = 10;

    // var x_0_Image = xContainer + padding;
    // var x_1_Image = (xContainer + container.getBoundingClientRect().width) - padding;
    // var y_0_Image = yContainer + padding;
    // var y_1_Image = (yContainer + container.getBoundingClientRect().height) - padding;

    var img = document.getElementById("image");

    container.style.left = (window.innerWidth / 2 - img.offsetWidth / 2) + "px";
    container.style.top = (window.innerHeight / 2 - img.offsetHeight / 2) + "px";

    // img.style.left = (container.width / 2 - img.offsetWidth / 2) + "px";
    // img.style.top = (container.height / 2 - img.offsetHeight / 2) + "px";

    // img.style.position = "absolute";
    // img.style.left = x_0_Image + "px";
    // img.style.top = y_0_Image + "px";
    //
    // img.style.width = x_1_Image - x_0_Image + "px";
    // img.style.height = y_1_Image - y_0_Image + "px";


    document.addEventListener("click", function (event) {
        var x = event.clientX - container.offsetLeft;
        var y = event.clientY - container.offsetTop;
        alert("Координаты клика: " + x + ", " + y);
    });
});