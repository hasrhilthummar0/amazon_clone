const images = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function ChangeSlide() {
    for (let index = 0; index < images.length; index++) {
        images[index].style.display = 'none';
    }
    images[n].style.display = 'block';
    n++;

}

prev_btn.addEventListner('click', (e) => {
    if (n > 0) {
        n--;
    }
    else {
        n = images.length - 1;
    }
    ChangeSlide();

})
