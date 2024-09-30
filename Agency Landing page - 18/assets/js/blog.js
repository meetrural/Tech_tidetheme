document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.more');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.agency');
            card.classList.add('card-pulse');
            
            // Remove the class after the animation completes
            setTimeout(() => {
                card.classList.remove('card-pulse');
            }, 800);

            // Subtle lift effect for the whole card container
            const cardContainer = this.closest('.relative');
            cardContainer.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                cardContainer.style.transform = 'translateY(0)';
            }, 300);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const cards = document.querySelectorAll('.card-container');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
            } else {
                card.style.display = 'block';
            }
        });
    }

    function animateCards(direction) {
        const currentCard = cards[currentIndex];
        currentCard.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');

        setTimeout(() => {
            currentCard.style.display = 'block';
            currentCard.classList.remove('slide-left', 'slide-right');

            currentIndex = direction === 'next' 
                ? (currentIndex + 1) % cards.length 
                : (currentIndex - 1 + cards.length) % cards.length;

            const nextCard = cards[currentIndex];
            nextCard.style.display = 'block';
            nextCard.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');

            setTimeout(() => {
                nextCard.classList.remove('slide-in-right', 'slide-in-left');
            }, 500);
        }, 500);
    }

    prevButton.addEventListener('click', () => animateCards('prev'));
    nextButton.addEventListener('click', () => animateCards('next'));

    // Initially show only the first card
    showCard(currentIndex);
});