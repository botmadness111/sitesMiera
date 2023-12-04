var imgPath = "../media/";
var musicPath = "../music/";

var queueMusicTop = ["Картины", "ну где моя нога?", "мой сларк", "Качалка", "А ты?", "Хейтеры", "Вайбмен"];
var queueAuthorTop = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];
var queueImageTop = ["picture.jpg", "whereismyleg.jpg", "mySlark.jpg", "gym.jpg", "andYoujpg.jpg", "haters.jpg", "vibeman.jpg"];
var queueMusicLinkTop = ["serega-pirat-kartiny-feat.-kijin-456244635.mp3", "Serega_Pirat_Nu_gde_moya_noga.mp3", "мой-сларк-(my-slark)---серега-пират-(serega-pirat)-made-with-Voicemod-technology.mp3", "SEREGA_PIRAT_-_Kachalka_(musmore.com).mp3", "Serega_Pirat_-_a_ty_(musmore.com).mp3", "SEREGA_PIRAT_-_KHejjtery_(musmore.com).mp3", "СерегаПират-Вайбмен_(muzmo.su).mp3"];

var btnRefreshTop = document.getElementById("btnRefreshTop");
btnRefreshTop.style.display = "none";

var listTop = document.getElementById("moreSectionTop");

function displayMusicTop() {

    for (let i = 0; i < 10; i++) {

        let area = document.getElementById("areaToImageAndTextTop");
        area.className = "areaToImageAndText";

        let itemDivText = document.createElement("div");
        itemDivText.className = "moreSectionText";

        let itemDivImage = document.createElement("div");
        itemDivImage.className = "moreSectionImage";

        let name = String(queueMusicTop.shift());
        let author = String(queueAuthorTop.shift());
        let imagePath = imgPath + String(queueImageTop.shift());
        let musicSrc = musicPath + String(queueMusicLinkTop.shift());

        queueMusicTop.push(name);
        queueAuthorTop.push(author);
        queueImageTop.push(imagePath);
        queueMusicLinkTop.push(musicSrc);


        let img = document.createElement('img');
        img.src = imagePath;

        let music = document.createElement("source");
        music.src = musicSrc;
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

        listTop.appendChild(area);

    }
    btnRefreshTop.style.display = "block";

}

function refreshMusicTop() {

    for (let area of listTop.childNodes) {
        while (area.firstChild) {
            area.removeChild(area.firstChild)
        }
    }

    btnRefreshTop.style.display = "none";
}


var queueMusicBot = ["Маша", "Мой байк", "Ну и что, что я вор?", "Извини, сегодня праздник", "На луне", "Зомби апокалипсис", "where is my mind"];
var queueAuthorBot = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];
var queueImageBot = ["masha.jpg", "myBike.jpg", "vor.jpg", "sorryjpg.jpg", "luna.jpg", "zombie.jpg", "where is my mind.jpg"];
var queueMusicLinkBot = ["Serega_Pirat_-_Masha_(musmore.com).mp3", "Serega_Pirat_-_Mojj_bajjk_(musmore.com).mp3", "Serega_Pirat_-_Nu_i_chto_chto_ya_vor_(musmore.com).mp3", "Серега Пират Извини, Сегодня Праздник.mp3", "Serega_pirat_-_Na_lune_(TheMP3.Info).mp3", "serega-pirat-qeqoqeq-zombi-apokalipsis-mp3.mp3", "musicbossorg_Serjoga_Pirat_-_Kaver_na_Where_is_my_mind_74205041.mp3"];

var btnRefreshBot = document.getElementById("btnRefreshBot");
btnRefreshBot.style.display = "none";

var listBot = document.getElementById("moreSectionBot");


function displayMusicBot() {

    for (let i = 0; i < 10; i++) {

        let area = document.getElementById("areaToImageAndTextBot");
        area.className = "areaToImageAndText";

        let itemDivText = document.createElement("div");
        itemDivText.className = "moreSectionText";

        let itemDivImage = document.createElement("div");
        itemDivImage.className = "moreSectionImage";

        let name = String(queueMusicBot.shift());
        let author = String(queueAuthorBot.shift());
        let imagePath = imgPath + String(queueImageBot.shift());
        let musicSrc = musicPath + String(queueMusicLinkBot.shift());

        queueMusicBot.push(name);
        queueAuthorBot.push(author);
        queueImageBot.push(imagePath);
        queueMusicLinkBot.push(musicSrc);


        let img = document.createElement('img');
        img.src = imagePath;

        let music = document.createElement("source");
        music.src = musicSrc;
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

        listBot.appendChild(area);

    }


    btnRefreshBot.style.display = "block";

}

function refreshMusicBot() {

    for (let area of listBot.childNodes) {
        while (area.firstChild) {
            area.removeChild(area.firstChild)
        }
    }

    btnRefreshBot.style.display = "none";
}
