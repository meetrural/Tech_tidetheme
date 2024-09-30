document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('#team-members .box');
    const experienceElement = document.getElementById('experience');
    const starsElement = document.getElementById('stars');
    const review1Element = document.getElementById('review1');
    const review2Element = document.getElementById('review2');

    const data = [
        {
            experience: "The Experience Was Amazing!",
            stars: 5,
            review1: "It has survived not only five centuries , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
            review2: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            experience: "A Great Collaboration!",
            stars: 4,
            review1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            review2: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            experience: "Creative and Insightful!",
            stars: 5,
            review1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            review2: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ];

    function updateContent(index) {
        const dataItem = data[index];
        experienceElement.textContent = dataItem.experience;

        // Clear previous stars
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

        // Add animation class
        const contentSection = document.getElementById('content');
        contentSection.classList.add('animate-content');
        setTimeout(() => {
            contentSection.classList.remove('animate-content');
        }, 500); // Animation duration
    }

    teamMembers.forEach((member, index) => {
        member.addEventListener('click', () => {
            updateContent(index);
        });
    });

    // Optional: Handle arrow buttons if needed for additional functionality
    const prevButton = document.getElementById('prevButton1');
    const nextButton = document.getElementById('nextButton1');

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
});