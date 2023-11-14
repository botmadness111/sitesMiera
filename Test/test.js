function showNotification(options) {
    // Создаем элемент div для уведомления
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = options.content;

    // Добавляем уведомление на страницу
    document.body.appendChild(notification);

    // Задержка перед удалением уведомления
    setTimeout(function() {
        // Удаляем уведомление после 1,5 секунд
        document.body.removeChild(notification);
    }, 1500);
}

// Пример использования функции
var notificationOptions = {
    content: 'Привет, это уведомление!'
};

showNotification(notificationOptions);