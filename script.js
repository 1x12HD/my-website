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

function changeBackgroundColor(element, startColor, endColor, duration, callback) {
    let startTime = performance.now();

    function interpolateColor(color1, color2, factor) {
        let result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    }

    function animate() {
        let currentTime = performance.now();
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);

        let currentColor = interpolateColor(startColor, endColor, progress);
        element.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else if (callback) {
            callback();
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', function() {
    let greeting1 = document.getElementById('greeting1');
    let greeting2 = document.getElementById('greeting2');
    let container = document.getElementById('container');

    fadeIn(greeting1, 1000, function() {
        fadeOut(greeting1, 1000, function() {
            fadeIn(greeting2, 1000, function() {
                fadeOut(greeting2, 1000, function() {
                    changeBackgroundColor(container, [0, 0, 0], [34, 34, 34], 1000, function() {
                        // Social media section removed
                    });
                });
            });
        });
    });
});