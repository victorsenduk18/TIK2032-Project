document.addEventListener('DOMContentLoaded', function () {
    var spanText = document.querySelector('.multiple-text');
    var textArray = [' a Informatics Student', ' 20 years old'];
    var currentTextIndex = 0;
    var buttons = document.querySelectorAll('.filter-buttons button');
    var galleryItems = document.querySelectorAll('.gallery-item');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            // Menambahkan kelas 'active' ke tombol yang diklik
            this.classList.add('active');
            var id = this.id;
            if (id === 'p1') {
                galleryItems.forEach(function (item) {
                    item.style.display = 'block';
                });
            } else {
                galleryItems.forEach(function (item) {
                    if (item.id === id) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
    function type() {
        var currentText = textArray[currentTextIndex];
        var currentIndex = 0;
        var typingInterval = setInterval(function () {
            if (currentIndex < currentText.length) {
                spanText.textContent += currentText.charAt(currentIndex);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(erase, 2000);
            }
        }, 100);
    }

    function erase() {
        var currentText = textArray[currentTextIndex];
        var currentIndex = currentText.length - 1;
        var erasingInterval = setInterval(function () {
            if (currentIndex >= 0) {
                spanText.textContent = currentText.substring(0, currentIndex);
                currentIndex--;
            } else {
                clearInterval(erasingInterval);
                currentTextIndex = (currentTextIndex + 1) % textArray.length;
                setTimeout(type, 1000);
            }
        }, 50);
    }

    type();
});
// script.js
// Add JavaScript for handling user interactions on Android devices
// Example: Add specific behavior for touch events or other mobile interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript code here for specific interactions on Android devices
});

