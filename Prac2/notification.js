//var notifications = [new Notification("Уведомление 1"), new Notification("Уведомление 2"), new Notification("Уведомление 3"), new Notification("Уведомление 4"), new Notification("Уведомление 5")];
var notifications = [];
var capacity = 3;
var isOpen = false;
var id = 1;


function Notification(name) {
    this.name = name;
}


var timer = setInterval(() => addNotification(), 3000);

function addNotification() {
    notifications.push(new Notification("Уведомление " + id++));
    if (isOpen) displayNotification();

}

function clickNotification() {
    openNotification()
}

function displayNotification() {
    isOpen = true;

    if (notifications.length === 0) {
        closeNotification();
        return;
    }

    let list = document.getElementById("notifications");

    list.innerHTML = "";

    let size = 0;

    for (let item of notifications) {
        let itemDiv = document.createElement("div");
        itemDiv.style.height = "20px";

        itemDiv.textContent = item.name + "  ";

        let img = document.createElement("img");
        img.width = 20;
        img.height = 20;
        img.src = "remove.png";
        img.addEventListener("click", function () {

            notifications = notifications.filter(function (element) {
                return element !== item;
            });
            displayNotification();
        });

        itemDiv.appendChild(img);
        list.appendChild(itemDiv);
        size++;

        if (size === capacity) {
            break;
        }
    }
}

function openNotification() {
    if (isOpen) {
        closeNotification();
    } else {
        displayNotification();
    }
}

function closeNotification() {
    isOpen = false;
    let list = document.getElementById("notifications");

    list.innerHTML = "";
}


function stopNotification() {

    setTimeout(() => {
            clearInterval(timer);
            alert("stop");
        },
        0);
}


function startNotification() {
    alert("start");
    timer = setInterval(() => addNotification(), 3000);
}

function stopNotificationDecorator(func) {
    return function () {
        func();
        setTimeout(startNotification, 5000);
    }

}

var isStopNotification = true;

function stop() {
    if (isStopNotification) {
        stopNotification = stopNotificationDecorator(stopNotification);
        isStopNotification = false;
    }


    stopNotification();
}



