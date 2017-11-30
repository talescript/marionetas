window.onload = init;

function init(){
    // Change backgroundAttachment to SCROLL on IOS
    iOS();
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
