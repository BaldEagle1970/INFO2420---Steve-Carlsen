// Backyard Birds - JavaScript Functions

// Print function for Print button
function printPage() {
    window.print();
}

// Image rollover functions
function rolloverImage(img, newSrc) {
    if (img && newSrc) {
        img.src = newSrc;
    }
}

function rolloutImage(img, originalSrc) {
    if (img && originalSrc) {
        img.src = originalSrc;
    }
}

// Preload images for smooth rollovers
function preloadImages() {
    var images = arguments;
    var imageArray = [];
    for (var i = 0; i < images.length; i++) {
        imageArray[i] = new Image();
        imageArray[i].src = images[i];
    }
}

// Form validation function (for future use with Survey page)
function validateForm(formId) {
    var form = document.getElementById(formId);
    if (!form) return false;

    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required') && inputs[i].value.trim() === '') {
            alert('Please fill in all required fields.');
            inputs[i].focus();
            return false;
        }
    }
    return true;
}

// Smooth scroll to anchor
function smoothScroll(targetId) {
    var target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Preload logo images when page loads
window.onload = function() {
    preloadImages('images/logo1.png', 'images/logo2.png');
};
