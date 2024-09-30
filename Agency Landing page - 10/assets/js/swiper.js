document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    leftArrow.addEventListener('click', prevImage);
    rightArrow.addEventListener('click', nextImage);

    // Show the first image initially
    showImage(0);
});