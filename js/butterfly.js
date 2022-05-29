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

