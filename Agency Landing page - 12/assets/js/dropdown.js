document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const homeMenu = document.getElementById('home-menu');
    const homeSubmenu = document.getElementById('home-submenu');

    hamburgerMenu.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('active');
    });

    homeMenu.addEventListener('click', function(event) {
        event.preventDefault();
        homeSubmenu.classList.toggle('hidden');
    });

    // Optional: Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});
const hamburgerMenu = document.getElementById('hamburgerMenu');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburgerMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});
document.querySelectorAll('.box').forEach(member => {
    member.addEventListener('click', function() {
        this.classList.add('active');
        
        setTimeout(() => {
            this.classList.remove('active');
        }, 300);  // 300ms corresponds to the CSS transition time
    });
});
document.querySelectorAll('.box').forEach(member => {
    member.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const role = this.getAttribute('data-role');
        const experience = this.getAttribute('data-experience');
        const review = this.getAttribute('data-review');
        const stars = this.getAttribute('data-stars');

        // Update the content
        document.querySelector('.affliates.text-xl').textContent = experience;
        document.querySelector('.para').innerHTML = `<p class="font-normal survive">${review}</p>`;

        const starContainer = document.querySelector('.star .flex.gap-2');
        starContainer.innerHTML = '';
        for (let i = 0; i < stars; i++) {
            starContainer.innerHTML += `<img src="assets/images/Testimonial/Star 1.png" alt="Star" class="w-6 h-6">`;
        }

        // Trigger the animation on the right-side container
        const contentContainer = document.querySelector('.card-container1');
        contentContainer.classList.remove('animate-content'); // Reset animation
        void contentContainer.offsetWidth; // Trigger reflow
        contentContainer.classList.add('animate-content');
    });
});