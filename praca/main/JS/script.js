var queue = [];
var id = 1;

function getSize(){
    return String(queue.length);
}

function Music(musicId) {
    this.musicId = musicId;
    this.musicName = "Music";
}

function addItem() {
    queue.unshift(new Music(id++));

    display();
}

function removeItem() {
    queue.pop();

    display();
}

function clearItems() {
    queue = [];

    display();
}

function display(){
    let list = document.getElementById("AreaToMusics");

    list.innerHTML = "";

    queue.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.textContent = item.musicName + " " + item.musicId;
        list.appendChild(itemDiv);
    });

    let dynamicText = document.getElementById("dynamicTextContainer");
    dynamicText.textContent = "Добавлено: " + getSize();

}


function sortItems1(){
    queue.sort(compare);
    display();
}

function sortItems2(){
    queue.sort(compare).reverse();
    display();
}

function compare(music1, music2){
    if (music1.musicId > music2.musicId) return 1;
    else if (music1.musicId < music2.musicId) return -1;
    else return 0;
}