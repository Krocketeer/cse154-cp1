/**
 * Kenny "Ackerson" Le
 * CSE 154 AF, Winter 2022
 * TA: Ludvig Liljenberg, Marina Wooden
 * 1/5/22
 * Creative Project #1
 * Description: Javascript file to control accordion element on about page
 */

window.addEventListener('load', function() {
    console.log('page is fully loaded');

    let row = document.getElementsByClassName('accordion-header');
    let text = document.getElementsByClassName('row-text');
    let button = document.getElementsByClassName('accordion-button');

    for (let i = 0; i < row.length; i++) {
        row[i].addEventListener('click', function() {
            if (text[i].style.maxHeight) {
                row[i].classList.remove('active');
                text[i].classList.remove('active');
                text[i].style.maxHeight = null;
                button[i].setAttribute('src', 'images/components/plus.png');
            } else {
                row[i].classList.add('active');
                text[i].classList.add('active');
                text[i].style.maxHeight = text[i].scrollHeight + 'px';
                button[i].setAttribute('src', 'images/components/subtract.png');
            }
        })
    }
});