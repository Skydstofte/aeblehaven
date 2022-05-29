let message = document.getElementById('taleboble-one');
let messageTwo = document.getElementById('taleboble-two');
let messageSwapper = true;

swapMessage();

function swapMessage(){
  setInterval(function(){
    messageSwapper = !messageSwapper;
    if(messageSwapper){
      message.style.display = 'block';
      messageTwo.style.display = 'none';
    } else {
      message.style.display = 'none';
      messageTwo.style.display = 'block';
    }
  }, 10000);
}