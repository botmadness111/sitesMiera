document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var stickyBlock = document.querySelector('.sticky-block');
        var content = document.querySelector('.content');

        var contentRect = content.getBoundingClientRect();
        var stickyBlockRect = stickyBlock.getBoundingClientRect();

        if (contentRect.bottom <= stickyBlockRect.height) {
            stickyBlock.style.position = 'relative';
        } else {
            stickyBlock.style.position = 'absolute';
        }
    });
});