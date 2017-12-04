window.onload = init;

function init() {
    // Change backgroundAttachment to SCROLL on IOS
    //iOS();
    openSlideMenu();
}

function openSlideMenu() {
    // open is used as the event listener
    var open = document.querySelector(".openSlideMenu");

    // elements to be moved
    var openSlide = document.querySelector("#side-menu");
    var moveHeader = document.querySelector("header");
    /* var moveMain = document.querySelector("main"); */

    open.addEventListener("click", function () {
        // make width of menu visible
        openSlide.style.width = '250px';

        // move header and body to give space to
        // menu
        moveHeader.style.marginLeft = '250px';
      /*   moveMain.style.marginLeft = '250px'; */
    });

    var close = document.querySelector(".side-nav");
    close.addEventListener("click", function () {
        openSlide.style.width = '0';
        moveHeader.style.marginLeft = '0';
      /*   moveMain.style.marginLeft = '0'; */
    });
}



// Change backgroundAttachment to SCROLL on IOS
function iOS() {
    var iDevices = [
        // If the issue happen in other devices,
        // add to list.
        'iPhone Simulator',
        'iPhone'
    ];

    var parallax = document.querySelector(".parallax");
    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform == iDevices.pop()) {
                parallax.style.backgroundAttachment = "scroll";

            }
            console.log("I've only noticed the issue on iOS. Works on Android");
        }
    }
}
