document.getElementById("banner-video").playbackRate = 0.5;
document.getElementById('banner-video').addEventListener('loadeddata', function () {
    document.getElementById('video-poster').style.display = 'none';
});