document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var content = document.getElementById("content");
        if (window.scrollY >= document.body.offsetHeight - 1000 ) {
            var newParagraph = document.createElement("p");
            newParagraph.textContent = "Новый текст";
            content.appendChild(newParagraph);
            newParagraph.scrollIntoView(true);
        }
    });
});