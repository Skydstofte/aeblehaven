let text1 = document.getElementById('text1')
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function(){toggleText(btn1, text1)});  

let text2 = document.getElementById('text2')
let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', function(){toggleText(btn2, text2)});  

let text3 = document.getElementById('text3')
let btn3 = document.getElementById('btn3')
btn3.addEventListener('click', function(){toggleText(btn3, text3)});  

let text4 = document.getElementById('text4')
let btn4 = document.getElementById('btn4')
btn4.addEventListener('click', function(){toggleText(btn4, text4)});  

let text5 = document.getElementById('text5')
let btn5 = document.getElementById('btn5')
btn5.addEventListener('click', function(){toggleText(btn5, text5)});  

function toggleText(button, text){
    // Hvis (sandt/falsk udtryk) -> så(?) -kør kode x- ellers(:) -kør kode y- -------- (ternary operator/conditional expression)
    button.textContent == 'Vis mere' ? button.textContent = 'Vis mindre' : button.textContent = 'Vis mere'
    button.textContent == 'Vis mindre' ? text.style.display = 'block' : text.style.display = 'none'
    // if(button.style.display == 'none'){
    //     button.style.display = 'block'
    // } else {
    //     button.style.display = 'none'
    // }
}