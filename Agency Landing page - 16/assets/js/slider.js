document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('teamContainer');
    const rotateLeft = document.querySelector('.rotate-left');
    const rotateRight = document.querySelector('.rotate-right');
    const teamMembers = Array.from(document.querySelectorAll('.team-member'));
    
    let currentIndex = 0;

    function moveTeam(direction) {
        const outgoingMembers = teamMembers.slice(currentIndex, currentIndex + 4);
        currentIndex = (currentIndex + direction * 4 + teamMembers.length) % teamMembers.length;
        const incomingMembers = teamMembers.slice(currentIndex, currentIndex + 4);

        // Flip out current members
        outgoingMembers.forEach(member => {
            member.classList.add(direction > 0 ? 'flip-left' : 'flip-right');
        });

        // After flip animation, slide in new members
        setTimeout(() => {
            outgoingMembers.forEach(member => {
                member.style.display = 'none';
                member.classList.remove('flip-left', 'flip-right');
            });

            incomingMembers.forEach(member => {
                member.style.display = '';
                member.classList.add(direction > 0 ? 'slide-in-right' : 'slide-in-left');
            });

            // Remove slide-in class after animation
            setTimeout(() => {
                incomingMembers.forEach(member => {
                    member.classList.remove('slide-in-left', 'slide-in-right');
                });
            }, 600);
        }, 300);
    }

    rotateLeft.addEventListener('click', () => moveTeam(-1));
    rotateRight.addEventListener('click', () => moveTeam(1));

    // Initialize: show only first 4 members
    teamMembers.slice(4).forEach(member => member.style.display = 'none');
});

function revealNumber() {
    const phoneNumber = "(603) 555-0123";
    window.open(`tel:${phoneNumber.replace(/\D/g, '')}`, '_blank');
}
function sendEmail() {
    const emailAddress = "example@example.com";
    window.open(`mailto:${emailAddress}`, '_blank');
}