var queueMusicBot = ["Маша", "Мой байк", "Ну и что, что я вор?", "Извини, сегодня праздник", "На луне", "Зомби апокалипсис", "where is my mind"];
var queueAuthorBot = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];
var queueImageBot = ["masha.jpg", "myBike.jpg", "vor.jpg", "sorryjpg.jpg", "luna.jpg", "zombie.jpg", "where is my mind.jpg"];
var queueMusicLinkBot = ["Serega_Pirat_-_Masha_(musmore.com).mp3", "Serega_Pirat_-_Mojj_bajjk_(musmore.com).mp3", "Serega_Pirat_-_Nu_i_chto_chto_ya_vor_(musmore.com).mp3", "Серега Пират Извини, Сегодня Праздник.mp3", "Serega_pirat_-_Na_lune_(TheMP3.Info).mp3", "serega-pirat-qeqoqeq-zombi-apokalipsis-mp3.mp3", "musicbossorg_Serjoga_Pirat_-_Kaver_na_Where_is_my_mind_74205041.mp3"];

var imgPath = "../media/"
var musicPath = "../music/"

let flag = true;
var listArea;

function downloadMusic() {


    if (flag) {
        listArea = document.getElementById("MusicsArea");
        listArea.innerHTML = "";
        flag = false;

        listArea.style.justifyItems = "start";
        listArea.style.justifyContent = "start";
        listArea.style.marginLeft = "3vh";
        listArea.style.marginBottom = "5vh";

        listArea.style.rowGap = "1.5vh";
        listArea.style.marginBottom = "0";
    }


    let area = document.createElement("div");
    area.className = "addArea";

    let itemDivText = document.createElement("div");
    itemDivText.className = "addSectionText";

    let itemDivImage = document.createElement("div");
    itemDivImage.className = "addSectionImage";

    let name = String(queueMusicBot.shift());
    let author = String(queueAuthorBot.shift());
    let imagePath = String(queueImageBot.shift());
    let musicSrc = String(queueMusicLinkBot.shift());

    queueMusicBot.push(name);
    queueAuthorBot.push(author);
    queueImageBot.push(imagePath);
    queueMusicLinkBot.push(musicSrc);

    let img = document.createElement('img');
    img.src = imgPath + imagePath;

    let music = document.createElement("source");
    music.src = musicPath + musicSrc;
    music.type = "audio/mpeg";

    let textName = document.createElement("text");
    textName.textContent = "🎵" + name;
    textName.style.color = "white";

    let textAuthor = document.createElement("text");
    textAuthor.textContent = "👤" + author;
    textAuthor.style.color = "silver";

    itemDivImage.appendChild(img);
    itemDivImage.appendChild(music);
    itemDivText.appendChild(textName)
    itemDivText.appendChild(textAuthor)

    area.appendChild(itemDivImage);
    area.appendChild(itemDivText);

    listArea.appendChild(area);
}