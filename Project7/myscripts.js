// JavaScript functions for image preloading and gallery swap

// Preload hover images for buttons/logo (if used on the site)
var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
    PrintButton1.src = "images/print5.gif";
    PrintButton2.src = "images/print6.gif";
    logo1.src = "images/logo1.jpg";
    logo2.src = "images/logo2.jpg";
}

// Gallery image arrays (used when you have thumbnails / main image)
var imgArray = [
    "Image1Lg.png",
    "Image2Lg.png",
    "Image3Lg.png",
    "Image4Lg.png"
];

var titleArray = [
    "American Bald Eagle",
    "St. Louis Cardinal",
    "Green Heron",
    "Hummingbird in Flight"
];

// Base path for full-size images
var imgPath = "Images/Fullsize/";

// Swap image and caption (expects #theImage and #bottomText in HTML)
function swapImage(imgID) {
    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    if (!theImage || !textDiv) {
        return; // fail gracefully if elements are not on this page
    }

    var newImg = imgArray[imgID];
    var textTitle = titleArray[imgID];

    theImage.src = imgPath + newImg;
    textDiv.innerHTML = textTitle;
}

// Preload commonly used images
function preloadImages() {
    var preloadList = [
        "Images/print2.png",
        "Images/print1.png",
        "Images/logo2.png",
        "Images/logo1.png",
        "Images/FullSize/Image1Lg.png",
        "Images/FullSize/Image2Lg.png",
        "Images/FullSize/Image3Lg.png",
        "Images/FullSize/Image4Lg.png"
    ];

    for (var i = 0; i < preloadList.length; i++) {
        var img = new Image();
        img.src = preloadList[i];
    }
}
