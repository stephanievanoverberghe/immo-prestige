document.getElementById("banner-video").playbackRate = 0.5;

document.querySelectorAll('.dropdown-hover').forEach(dropdown => {
    dropdown.addEventListener('mouseover', function () {
        this.querySelector('.dropdown-menu').classList.add('show');
    });

    dropdown.addEventListener('mouseout', function () {
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});