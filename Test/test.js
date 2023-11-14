// Массив для хранения элементов корзины
let cartItems = [];

// Функция для добавления товара в корзину
function addItem() {
    // Пример: каждый товар представлен объектом с уникальным идентификатором
    const newItem = {
        id: Date.now(), // временный идентификатор, можно использовать другой механизм
        name: "Товар " + cartItems.length + 1
    };

    // Добавляем товар в начало массива (вместо push для добавления в конец)
    cartItems.unshift(newItem);

    // Обновляем отображение корзины
    displayCart();
}

// Функция для очистки корзины
function clearCart() {
    // Очищаем массив
    cartItems = [];

    // Обновляем отображение корзины
    displayCart();
}

// Функция для отображения корзины
function displayCart() {
    const cartDiv = document.getElementById("cart");

    // Очищаем содержимое корзины
    cartDiv.innerHTML = "";

    // Добавляем элементы корзины
    cartItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = item.name;
        cartDiv.appendChild(itemDiv);
    });
}