document.getElementById("banner-video").playbackRate = 0.5;

document.getElementById('banner-video').addEventListener('loadeddata', function () {
    document.getElementById('banner-video-img').style.display = 'none';
});