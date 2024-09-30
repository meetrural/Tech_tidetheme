document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const homeMenu = document.getElementById('home-menu');
    const homeSubmenu = document.getElementById('home-submenu');

    // Testimonial elements
    const experienceElement = document.getElementById('experience');
    const starsElement = document.getElementById('stars');
    const review1Element = document.getElementById('review1');
    const review2Element = document.getElementById('review2');
    const prevButton = document.getElementById('prevButton1');
    const nextButton = document.getElementById('nextButton1');
    const contentSection = document.getElementById('content');

    // Navigation functionality
    if (hamburgerMenu && dropdownMenu) {
        hamburgerMenu.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('active');
        });

        // Close the dropdown menu when clicking outside of it
        document.addEventListener('click', function(event) {
            if (!dropdownMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    } else {
        console.warn('Hamburger menu or dropdown menu not found');
    }

    if (homeMenu && homeSubmenu) {
        homeMenu.addEventListener('click', function(event) {
            event.preventDefault();
            homeSubmenu.classList.toggle('hidden');
        });
    } 

    // Testimonial functionality
    const teamMembers = document.querySelectorAll('#team-members .box');
    
    const data = [
        {
            experience: "The Experience Was Amazing!",
            stars: 5,
            review1: "It has survived not only five centuries...",
            review2: "Contrary to popular belief, Lorem Ipsum is not simply random text..."
        },
        {
            experience: "A Great Collaboration!",
            stars: 4,
            review1: "Lorem Ipsum has been the industry's standard dummy text...",
            review2: "It has survived not only five centuries..."
        },
        {
            experience: "Creative and Insightful!",
            stars: 5,
            review1: "Lorem Ipsum is simply dummy text of the printing...",
            review2: "It has survived not only five centuries..."
        }
    ];

    function updateContent(index) {
        if (!experienceElement || !starsElement || !review1Element || !review2Element || !contentSection) {
            console.error('One or more required elements are missing from the DOM');
            return;
        }

        const dataItem = data[index];
        experienceElement.textContent = dataItem.experience;

        starsElement.innerHTML = '';
        for (let i = 0; i < dataItem.stars; i++) {
            const starImg = document.createElement('img');
            starImg.src = 'assets/images/Testimonial/Star 1.png';
            starImg.alt = 'Star';
            starImg.classList.add('w-6', 'h-6');
            starsElement.appendChild(starImg);
        }

        review1Element.textContent = dataItem.review1;
        review2Element.textContent = dataItem.review2;

        contentSection.classList.add('animate-content');
        setTimeout(() => {
            contentSection.classList.remove('animate-content');
        }, 500);

        teamMembers.forEach((member, i) => {
            if (i === index) {
                member.classList.add('active');
            } else {
                member.classList.remove('active');
            }
        });
    }

    if (teamMembers.length > 0) {
        teamMembers.forEach((member, index) => {
            member.addEventListener('click', () => {
                updateContent(index);
            });
        });

        updateContent(0);
    } else {
        console.error('No team members found with the selector "#team-members .box"');
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            const currentIndex = Array.from(teamMembers).findIndex(member => member.classList.contains('active'));
            const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
            updateContent(prevIndex);
        });

        nextButton.addEventListener('click', () => {
            const currentIndex = Array.from(teamMembers).findIndex(member => member.classList.contains('active'));
            const nextIndex = (currentIndex + 1) % teamMembers.length;
            updateContent(nextIndex);
        });
    } 
});