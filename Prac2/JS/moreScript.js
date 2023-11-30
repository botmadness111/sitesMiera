var imgPath = "../media/";

var queueMusicTop = ["Картины", "ну где моя нога?", "мой сларк", "Качалка", "А ты?", "Хейтеры", "Вайбмен"];
var queueAuthorTop = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];
var queueImageTop = ["picture.jpg", "whereismyleg.jpg", "mySlark.jpg", "gym.jpg", "andYoujpg.jpg", "haters.jpg", "vibeman.jpg"];

var btnRefreshTop = document.getElementById("btnRefreshTop");
btnRefreshTop.style.display = "none";

var listTop = document.getElementById("moreSectionTop");

function displayMusicTop() {

    for (let i = 0; i < 21; i++) {

        let area = document.getElementById("areaToImageAndTextTop");
        area.className = "areaToImageAndText";

        let itemDivText = document.createElement("div");
        itemDivText.className = "moreSectionText";

        let itemDivImage = document.createElement("div");
        itemDivImage.className = "moreSectionImage";

        let name = String(queueMusicTop.shift());
        let author = String(queueAuthorTop.shift());
        let imagePath = imgPath + String(queueImageTop.shift());

        queueMusicTop.push(name);
        queueAuthorTop.push(author);
        queueImageTop.push(imagePath);


        let img = document.createElement('img');
        img.src = imagePath;

        let textName = document.createElement("text");
        textName.textContent = "🎵" + name;
        textName.style.color = "white";

        let textAuthor = document.createElement("text");
        textAuthor.textContent = "👤" + author;
        textAuthor.style.color = "silver";

        itemDivImage.appendChild(img);
        itemDivText.appendChild(textName)
        itemDivText.appendChild(textAuthor)

        area.appendChild(itemDivImage);
        area.appendChild(itemDivText);

        listTop.appendChild(area);

    }
    btnRefreshTop.style.display = "block";

}

function refreshMusicTop() {

    for (let area of listTop.childNodes){
        while (area.firstChild){
            area.removeChild(area.firstChild)
        }
    }

    btnRefreshTop.style.display = "none";
}



var queueMusicBot = ["Маша", "Мой байк", "Ну и что, что я вор?", "Извини, сегодня праздник", "На луне", "Зомби апокалипсис", "where is my mind"];
var queueAuthorBot = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];
var queueImageBot = ["masha.jpg", "myBike.jpg", "vor.jpg", "sorryjpg.jpg", "luna.jpg", "zombie.jpg", "where is my mind.jpg"];

var btnRefreshBot = document.getElementById("btnRefreshBot");
btnRefreshBot.style.display = "none";

var listBot = document.getElementById("moreSectionBot");

function displayMusicBot() {

    for (let i = 0; i < 21; i++) {

        let area = document.getElementById("areaToImageAndTextBot");
        area.className = "areaToImageAndText";

        let itemDivText = document.createElement("div");
        itemDivText.className = "moreSectionText";

        let itemDivImage = document.createElement("div");
        itemDivImage.className = "moreSectionImage";

        let name = String(queueMusicBot.shift());
        let author = String(queueAuthorBot.shift());
        let imagePath = imgPath + String(queueImageBot.shift());

        queueMusicBot.push(name);
        queueAuthorBot.push(author);
        queueImageBot.push(imagePath);


        let img = document.createElement('img');
        img.src = imagePath;

        let textName = document.createElement("text");
        textName.textContent = "🎵" + name;
        textName.style.color = "white";

        let textAuthor = document.createElement("text");
        textAuthor.textContent = "👤" + author;
        textAuthor.style.color = "silver";

        itemDivImage.appendChild(img);
        itemDivText.appendChild(textName)
        itemDivText.appendChild(textAuthor)

        area.appendChild(itemDivImage);
        area.appendChild(itemDivText);

        listBot.appendChild(area);

    }
    btnRefreshBot.style.display = "block";

}

function refreshMusicBot() {

    for (let area of listBot.childNodes){
        while (area.firstChild){
            area.removeChild(area.firstChild)
        }
    }

    btnRefreshBot.style.display = "none";
}
