document.addEventListener('DOMContentLoaded', function() {
    const submenu = document.querySelector('.submenu');
    let scrollAmount = 0;
    let scrollSpeed = 30; // Adjust this value to change scroll speed (lower is slower)

    submenu.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        // Determine scroll direction
        scrollAmount = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
        
        // Perform the scroll
        submenu.scrollTop += scrollAmount;
    });
});


