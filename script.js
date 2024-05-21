function fadeIn(element, duration, callback) {
    element.style.opacity = 0;
    let startTime = performance.now();

    function animate() {
        let currentTime = performance.now();
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);
        element.style.opacity = progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else if (callback) {
            callback();
        }
    }

    requestAnimationFrame(animate);
}

function fadeOut(element, duration, callback) {
    let startTime = performance.now();

    function animate() {
        let currentTime = performance.now();
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);
        element.style.opacity = 1 - progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            if (callback) {
                callback();
            }
        }
    }

    requestAnimationFrame(animate);
}

function animateBackgroundColorChange(element, startColor, endColor, duration) {
    let startTime = performance.now();
    let startR = parseInt(startColor.substring(1, 3), 16);
    let startG = parseInt(startColor.substring(3, 5), 16);
    let startB = parseInt(startColor.substring(5, 7), 16);
    let endR = parseInt(endColor.substring(1, 3), 16);
    let endG = parseInt(endColor.substring(3, 5), 16);
    let endB = parseInt(endColor.substring(5, 7), 16);

    function animate() {
        let currentTime = performance.now();
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);
        let currentR = Math.round(startR + (endR - startR) * progress);
        let currentG = Math.round(startG + (endG - startG) * progress);
        let currentB = Math.round(startB + (endB - startB) * progress);
        element.style.backgroundColor = `rgb(${currentR}, ${currentG}, ${currentB})`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', function () {
    const greeting1 = document.getElementById('greeting1');
    const greeting2 = document.getElementById('greeting2');
    const container = document.querySelector('.container');
    const socials = document.getElementById('socials');

    socials.style.opacity = 0;
    socials.classList.add('hidden');

    fadeIn(greeting1, 1400, function () {
        fadeOut(greeting1, 1400, function () {
            fadeIn(greeting2, 1400, function () {
                fadeOut(greeting2, 1400, function () {
                    animateBackgroundColorChange(container, 'black', '#121212', 800);
                });
            });
        });
    });

    function fadeIn(element, duration, callback) {
        element.style.display = 'block';
        element.style.opacity = 0;
        let startTime = null;

        function fade() {
            if (startTime === null) {
                startTime = performance.now();
            }

            const progress = (performance.now() - startTime) / duration;
            element.style.opacity = Math.min(progress, 1);

            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                callback();
            }
        }

        requestAnimationFrame(fade);
    }

    function fadeOut(element, duration, callback) {
        let startTime = null;

        function fade() {
            if (startTime === null) {
                startTime = performance.now();
            }

            const progress = (performance.now() - startTime) / duration;
            element.style.opacity = 1 - Math.min(progress, 1);

            if (progress < 1) {
                requestAnimationFrame(fade);
            } else {
                element.style.display = 'none';
                callback();
            }
        }

        requestAnimationFrame(fade);
    }
});