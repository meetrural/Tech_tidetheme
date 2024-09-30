document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Always keep the first image visible
    images[0].style.opacity = '1';

    // Change image every 5 seconds
    setInterval(changeImage, 2000);
});