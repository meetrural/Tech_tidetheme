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
document.addEventListener('DOMContentLoaded', function() {
    const homeMenu = document.getElementById('home-menu');
    const homeSubmenu = document.getElementById('home-submenu1');
  
    // Toggle submenu on HOME click
    homeMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      homeSubmenu.classList.toggle('hidden');
    });
  
    // Hide submenu when clicking outside
    document.addEventListener('click', function(e) {
      if (!homeMenu.contains(e.target)) {
        homeSubmenu.classList.add('hidden');
      }
    });
  });