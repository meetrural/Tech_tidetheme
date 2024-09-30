document.addEventListener('DOMContentLoaded', function() {
            const filters = document.querySelectorAll('.filter');
            const cards = document.querySelectorAll('.card');

            filters.forEach(filter => {
                filter.addEventListener('click', () => {
                    const filterCategory = filter.getAttribute('data-filter');

                    filters.forEach(f => f.classList.remove('active'));
                    filter.classList.add('active');
                    filter.style.fontSize = '';

                    // Hide all cards initially
                    cards.forEach(card => card.classList.add('hidden'));

                    switch (filterCategory) {
                        case 'All':
                            cards.forEach(card => card.classList.remove('hidden'));
                            break;
                        case 'SEO':
                            // Display the first and last card for SEO
                            if (cards.length > 0) {
                                cards[0].classList.remove('hidden');
                            }
                            if (cards.length > 3) {
                                cards[cards.length - 1].classList.remove('hidden');
                            }
                            break;
                        case 'Webdesign':
                            // Display the second card for Webdesign
                            if (cards.length > 1) {
                                cards[1].classList.remove('hidden');
                            }
                            break;
                        case 'Work':
                            // Display the third card for Work
                            if (cards.length > 2) {
                                cards[2].classList.remove('hidden');
                            }
                            break;
                        case 'Wordpress':
                            // Display all cards for Wordpress
                            cards.forEach(card => {
                                if (card.getAttribute('data-category').includes('Wordpress')) {
                                    card.classList.remove('hidden');
                                }
                            });
                            break;
                        default:
                            // Display all cards for any other filter
                            cards.forEach(card => {
                                if (card.getAttribute('data-category').includes(filterCategory)) {
                                    card.classList.remove('hidden');
                                }
                            });
                            break;
                    }
                });
            });
        });