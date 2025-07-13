document.addEventListener('DOMContentLoaded', () => {
    
    // --- Universal Music Control (If included in HTML) ---
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        // Attempt to play music automatically (note: browsers often require user interaction first)
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(e => console.log("Autoplay failed:", e));
    }

    // --- Page 1: Countdown Logic (index.html) ---
    if (document.body.classList.contains('page-countdown')) {
        const timerElement = document.getElementById('countdownTimer');
        const readyMessage = document.getElementById('readyMessage');
        let count = 3;

        if (readyMessage) {
            readyMessage.style.opacity = 0;
        }

        function updateCountdown() {
            if (count > 0) {
                timerElement.textContent = count;
                timerElement.style.animation = 'scaleIn 0.8s ease-out forwards';
                
                setTimeout(() => {
                    timerElement.style.animation = 'none';
                }, 800);
                
                count--;
            } else {
                // Countdown finished
                clearInterval(countdownInterval);
                timerElement.style.display = 'none';
                readyMessage.textContent = 'Happy Birthday! Let’s celebrate!';
                readyMessage.style.opacity = 1;

                // Redirect to the celebration page
                setTimeout(() => {
                    window.location.href = 'celebration.html';
                }, 1500); 
            }
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }

    // --- Page 2: Celebration Animations (celebration.html) ---
    if (document.body.classList.contains('page-celebration')) {
        const balloonColors = ['#ff6f61', '#f06292', '#ce93d8', '#42a5f5', '#ffc107'];
        const starContainer = document.querySelector('.star-container');
        const balloonContainer = document.querySelector('.balloon-container');

        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}vw`; 
            balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            balloon.style.animationDuration = `${Math.random() * 6 + 4}s`; 
            
            if (balloonContainer) {
                balloonContainer.appendChild(balloon);
                setTimeout(() => balloon.remove(), 10000); 
            }
        }

        function createStar() {
            const star = document.createElement('span');
            star.classList.add('star');
            star.innerHTML = '★'; 
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 8 + 7}s`;
            
            if (starContainer) {
                starContainer.appendChild(star);
                setTimeout(() => star.remove(), 15000);
            }
        }

        setInterval(createBalloon, 1000); 
        setInterval(createStar, 700); 
    }

    // --- Page 3: Cake Ceremony Logic (cake.html) ---
    if (document.body.classList.contains('page-cake')) {
        const cutCakeBtn = document.getElementById('cutCakeBtn');
        const cakeMessage = document.getElementById('cakeMessage');
        const sliceSound = document.getElementById('sliceSound');
        const candles = document.querySelectorAll('.flame');

        // Function to blow out candles
        function blowOutCandles() {
            candles.forEach(flame => {
                flame.style.animation = 'none';
                flame.style.opacity = 0;
            });
        }

        if (cutCakeBtn) {
            cutCakeBtn.addEventListener('click', () => {
                // 1. Play the cutting sound
                if (sliceSound) {
                    sliceSound.play();
                }

                // 2. Hide candles/flames
                blowOutCandles();

                // 3. Reveal the cake message 
                if (cakeMessage) {
                    cakeMessage.style.display = 'block';
                    setTimeout(() => {
                        cakeMessage.style.opacity = 1;
                    }, 100);
                }

                // 4. Disable the button and change text
                cutCakeBtn.textContent = "Cake Cut!";
                cutCakeBtn.disabled = true;

                // 5. Navigate to the next page (Diary Page)
                setTimeout(() => {
                    window.location.href = 'diary.html';
                }, 2000); 
            });
        }
    }

    // --- Page 4: Diary Page (diary.html) ---
    // Note: No specific JS functionality needed for the diary page.

    // --- Page 5: Gallery Page (gallery.html) ---
    // Note: No specific JS functionality needed for the gallery page.
});
