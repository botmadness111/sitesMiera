document.addEventListener('DOMContentLoaded', function() {
    const thumb = document.querySelector('.thumb');
    const track = document.querySelector('.track');
    let isDragging = false;

    thumb.addEventListener('mousedown', function(event) {
        isDragging = true;
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // двигаем внутри слайдера
    document.addEventListener('mousemove', function(event) {
        if (!isDragging) return;

        const sliderRect = track.getBoundingClientRect();
        let positionX = event.clientX - sliderRect.left;

        if (positionX < 0) {
            positionX = 0;
        } else if (positionX > sliderRect.width) {
            positionX = sliderRect.width - thumb.width;
        }

        thumb.style.left = positionX + 'px';
    });

    // Позволяем выйти за пределы
    document.addEventListener('mousemove', function(event) {
        if (!isDragging) return;

        const sliderRect = track.getBoundingClientRect();
        let positionX = event.clientX - sliderRect.left;

        thumb.style.left = positionX + 'px';
    });

    // возвращаем на место
    document.addEventListener('mouseup', function() {
        isDragging = false;

        const sliderRect = track.getBoundingClientRect();
        let positionX = parseFloat(thumb.style.left);

        if (positionX < 0) {
            positionX = 0;
        } else if (positionX > sliderRect.width) {
            positionX = sliderRect.width - thumb.width;
        }

        thumb.style.left = positionX + 'px';

    });

    thumb.ondragstart = function (){ // полезно, например, для изображений
        return false;
    }
});
