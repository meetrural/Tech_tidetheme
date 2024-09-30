document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "Advance Your<br>Business Growth",
    ];
    const speed = 100; // milliseconds per character
    const pause = 1000; // pause at the end of typing or erasing
    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        const currentText = texts[textIndex];

        if (isTyping) {
            if (charIndex < currentText.length) {
                // Check for the newline character and handle it properly
                if (currentText.charAt(charIndex) === '<' && currentText.substring(charIndex, charIndex + 4) === '<br>') {
                    typewriterElement.innerHTML += '<br>';
                    charIndex += 4;
                } else {
                    typewriterElement.innerHTML += currentText.charAt(charIndex);
                    charIndex++;
                }
                setTimeout(typeWriter, speed /0.6);
            } else {
                isTyping = false;
                setTimeout(typeWriter, pause);
            }
        } else {
            if (charIndex > 0) {
                // Check for the newline character and handle it properly
                if (currentText.charAt(charIndex - 1) === '>' && currentText.substring(charIndex - 4, charIndex) === '<br>') {
                    typewriterElement.innerHTML = currentText.substring(0, charIndex - 4);
                    charIndex -= 4;
                } else {
                    typewriterElement.innerHTML = currentText.substring(0, charIndex - 1);
                    charIndex--;
                }
                setTimeout(typeWriter, speed / 2);
            } else {
                isTyping = true;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, pause);
            }
        }
    }
    typeWriter();
});