document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("container");

    container.onclick = function (event) {
        let target = event.target; //куда кликнули
        if (target.tagName === 'BUTTON') action(target);
    }
});

function action(item) {
    //item.style.color = "red";
    let parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}