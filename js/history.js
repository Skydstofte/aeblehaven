let extraText = document.querySelector('.history-container-content-textbox-extratext')
let moreBtn = document.querySelector('.history-container-content-textbox-morebutton')
let lessBtn = document.querySelector('.history-container-content-textbox-lessbutton')

moreBtn.onclick = function() {
    extraText.style.display = 'block';
    // remove "more" and add "less"
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'block';
};

lessBtn.onclick = function() {
    extraText.style.display = 'none';
    // remove "less" and add "more"
    lessBtn.style.display = 'none';
    moreBtn.style.display = 'block';
};