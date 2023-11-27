var queueMusic = ["деньги меняют", "Картины", "ну где моя нога?", "мой сларк", "Я поднимаю свою голову вверх", "как же он силён", "Качалка", "А ты?", "Хейтеры", "Вайбмен"];
var queueAuthor = ["Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират", "Серега пират"];

function displayMusicTop() {

    let list = document.getElementById("moreSectionTop");
    let itemDiv = document.createElement("div");
    itemDiv.style.width = "500px";
    itemDiv.style.transform = "skew(7deg)";
    itemDiv.style.border = "1px solid";
    itemDiv.style.background = "white";
    itemDiv.style.margin = "2px";
    itemDiv.style.borderRadius = "5px";
    itemDiv.style.margin = "5px";

    let name = String(queueMusic.shift());
    let author = String(queueAuthor.shift());

    queueMusic.push(name);
    queueAuthor.push(author);
    itemDiv.textContent = "🎵" + name + "\n" + "👤" + author;
    itemDiv.style.whiteSpace = "pre-line";
    list.appendChild(itemDiv);

    let btnRefresh = document.getElementById("btnRefreshTop");
    btnRefresh.style.display = "block";
}

function refreshMusicTop() {
    let list = document.getElementById("moreSectionTop");
    list.innerHTML = "";

    let btnRefresh = document.getElementById("btnRefreshTop");
    btnRefresh.style.display = "none";
}

function displayMusicBot() {

    let list = document.getElementById("moreSectionBot");
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

    let btnRefresh = document.getElementById("btnRefreshBot");
    btnRefresh.style.display = "block";
}

function refreshMusicBot() {
    let list = document.getElementById("moreSectionBot");
    list.innerHTML = "";

    let btnRefresh = document.getElementById("btnRefreshBot");
    btnRefresh.style.display = "none";
}