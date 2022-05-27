const nav = document.getElementById('logo-container');
let lastScrollY = window.scrollY;

// Anti throttle for browsers without in built anti throttle
let timeout;

window.addEventListener('scroll', function (event) {
	// If there's a timer, cancel it
	if (timeout) {
		window.cancelAnimationFrame(timeout);
	}

	// Setup the new requestAnimationFrame()
	timeout = window.requestAnimationFrame(function () {
        if (window.innerWidth > 480) return
        if (lastScrollY < window.scrollY) {
            nav.classList.add("logo-container-minimized");
        } else {
            nav.classList.remove("logo-container-minimized");
        }
        lastScrollY = window.scrollY;
    });

}, false);