var product = null;

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const cart = document.getElementById('cart');
    const totalPriceSpan = document.getElementById('totalPrice');

    let totalPrice = 0;

    // Добавляем обработчики для элементов
    items.forEach(item => {
        item.draggable = true; // позволяем перетаскивать
        item.addEventListener('dragstart', dragStart);
    });

    // Добавляем обработчики для корзины
    cart.addEventListener('dragover', dragOver);
    cart.addEventListener('drop', drop);

    function dragStart(event) {
        product = event.target;
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();

        // Получаем данные (цену товара)
        const data = product.getAttribute("data-price");

        // Создаем новый элемент в корзине
        const newItem = document.createElement('div');
        newItem.textContent = `Товар (${data} руб.)`;

        newItem.className = 'item';
        newItem.dataset.price = data;

        newItem.style.cursor = "default";

        cart.appendChild(newItem);

        // Обновляем итоговую стоимость
        totalPrice += parseInt(data);
        totalPriceSpan.textContent = totalPrice;
    }
});
