function fadeIn(element, duration, callback) {
    element.style.opacity = 0;
    element.style.display = 'block';
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

function animateBackgroundColorChange(element, fromColor, toColor, duration) {
    let startTime = null;

    function animate() {
        if (startTime === null) {
            startTime = performance.now();
        }

        const progress = (performance.now() - startTime) / duration;
        element.style.backgroundColor = interpolateColor(fromColor, toColor, progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function interpolateColor(fromColor, toColor, progress) {
    const fromRGB = hexToRGB(fromColor);
    const toRGB = hexToRGB(toColor);

    const resultRGB = [];
    for (let i = 0; i < 3; i++) {
        resultRGB[i] = Math.round(fromRGB[i] + (toRGB[i] - fromRGB[i]) * progress);
    }

    return `rgb(${resultRGB.join(',')})`;
}

function hexToRGB(hexColor) {
    const hex = hexColor.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}

document.addEventListener('DOMContentLoaded', function() {
    let greeting1 = document.getElementById('greeting1');
    let greeting2 = document.getElementById('greeting2');
    let container = document.getElementById('container');

    fadeIn(greeting1, 1400, function () {
        fadeOut(greeting1, 1400, function () {
            fadeIn(greeting2, 1400, function () {
                fadeOut(greeting2, 1400, function () {
                    animateBackgroundColorChange(container, 'black', '#121212', 800);
                });
            });
        });
    });
});