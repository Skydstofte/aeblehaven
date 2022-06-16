const butterfly = document.getElementById('butterfly')
const butterflyDown = document.getElementById('butterfly-down')
let bask = false;

flappify();

function flappify() {
    setInterval(function(){
        bask = !bask;

        // console.log(butterfly.offsetHeight);
        // console.log(window.scrollY + butterfly.getBoundingClientRect().top);
        // let butterflyTopOffset = window.scrollY + butterfly.getBoundingClientRect().top;
        // let butterflyDownOffset = window.scrollY + butterflyDown.getBoundingClientRect().top;

        // // if butterfly 1 er over 110 gem butterfly 2 væk eller omvendt. 
        // if(butterflyTopOffset > 100){
        //     // only show top
        //     butterflyDown.classList.add('hide-butterfly-down');
        //     butterfly.classList.remove('hide-butterfly');
        // } else if(butterflyDownOffset <= 100){
        //     // only show buttom
        //     butterfly.classList.add('hide-butterfly');
        //     butterflyDown.classList.remove('hide-butterfly-down');
        // }
        
        if(bask){
            // only show top
            butterflyDown.classList.add('hide-butterfly-down');
            butterfly.classList.remove('hide-butterfly');
        } else {
            // only show buttom
            butterfly.classList.add('hide-butterfly');
            butterflyDown.classList.remove('hide-butterfly-down');
        }

    }, 180);
}

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