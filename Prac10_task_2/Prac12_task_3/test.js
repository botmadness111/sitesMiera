function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";

    setTimeout(function() {
        notification.style.display = "none";
    }, 3000); // Скрыть уведомление через 3 секунды (можете изменить по своему усмотрению)
}

function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}