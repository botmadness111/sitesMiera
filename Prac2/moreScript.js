var queueMusic = ["деньги меняют", "Картины", "ну где моя нога?", "мой сларк", "Я поднимаю свою голову вверх", "как же он силён", "Качалка", "А ты?", "Хейтеры", "Вайбмен"];
var queueAuthor = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];

function displayMusic() {

    let list = document.getElementById("moreSection");
    let itemDiv = document.createElement("div");
    itemDiv.style.width = "500px";
    itemDiv.style.transform = "skew(7deg)";
    itemDiv.style.border = "1px solid";
    itemDiv.style.background = "white";
    itemDiv.style.margin = "2px";
    itemDiv.style.borderRadius = "5px";

    let name = String(queueMusic.shift());
    let author = String(queueAuthor.shift());

    queueMusic.push(name);
    queueAuthor.push(author);
    itemDiv.textContent = "🎵" + name + "\n" + "👤" + author;
    itemDiv.style.whiteSpace = "pre-line";
    list.appendChild(itemDiv);

    let btnRefresh = document.getElementById("btnRefresh");
    btnRefresh.style.display = "block";
}

function refreshMusic(){
    let list = document.getElementById("moreSection");
    list.innerHTML = "";

    let btnRefresh = document.getElementById("btnRefresh");
    btnRefresh.style.display = "none";
}