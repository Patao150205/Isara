'use strict';

const question_contents = document.getElementsByClassName('question-content');
const under_bar = document.getElementsByClassName('under-bar');
const angle_btn = document.getElementsByClassName('angle_btn');

for (let i = 0; i < question_contents.length; i++) {
  question_contents[i].addEventListener('click', () => {
    under_bar[i].classList.toggle('open');
    if (under_bar[i].classList.contains('open')) {
      angle_btn[i].className = 'angle_btn fas fa-angle-up';
    } else {
      angle_btn[i].className = 'angle_btn fas fa-angle-down';
    }
  });
}
