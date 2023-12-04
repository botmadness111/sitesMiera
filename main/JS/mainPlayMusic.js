var lastSection = null;

document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("mainDiv");

    container.onclick = function (event) {
        let target = event.target; //куда кликнули

        if (target.tagName === 'IMG') {
            //удалить прошлую анимацию
            if (lastSection != null) {
                let array = lastSection.className.split(" ");
                for (let i = 0; i < array.length; i++) {
                    if (array[i].includes("startAnimation")) {
                        array.splice(i);
                        break;
                    }
                }
                lastSection.className = array;
            }

            let section = target.parentElement;
            lastSection = section;


            if (target.parentNode.className === "moreSectionImage") {
                //запустить анимацию
                section.classList.add("startAnimationMini");
            } else {
                //запустить анимацию
                section.classList.add("startAnimation");
            }


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

