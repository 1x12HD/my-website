function fadeIn(element, duration, callback) {
    element.style.display = 'block';
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
            element.style.display = 'none';
            if (callback) {
                callback();
            }
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', function() {
    let greeting1 = document.getElementById('greeting1');
    let greeting2 = document.getElementById('greeting2');

    fadeIn(greeting1, 1000, function() {
        fadeOut(greeting1, 1000, function() {
            fadeIn(greeting2, 1000, function() {
                fadeOut(greeting2, 1000);
            });
        });
    });
});