window.addEventListener('load', function() {
    var playlist = document.getElementById('playlist');
    var audioPlayer = document.getElementById('audio-player');

    playlist.addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        if (target.tagName === 'A') {
            var songUrl = target.getAttribute('href');
            audioPlayer.setAttribute('src', songUrl);
            audioPlayer.play();
        }
    });
});