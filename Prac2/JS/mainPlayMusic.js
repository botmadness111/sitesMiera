var lastSection = null;

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("mainDiv");

    container.onclick = function (event) {
        let target = event.target; //куда кликнули
        if (target.tagName === 'IMG') {

            //удалить прошлую анимацию
            if (lastSection != null) {
                lastSection.classList = null;
            }

            let section = target.parentElement;
            lastSection = section;

            //запустить анимацию
            section.classList.add("startAnimation");

            for (let child of section.childNodes) {
                if (child.tagName === "SOURCE") {
                    playMusic(child);
                    break;
                }
            }
        }
    }
});

function playMusic(source) {
    let player = document.getElementById("player");
    player.src = source.src;
    player.play();
}

