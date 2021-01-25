// ------------Відкривання дверей--------------
document.querySelector('#open-door').onclick = function () {
  document.querySelector('.right-door').style.marginLeft = '120px';
}
// ------------Закривання дверей--------------
document.querySelector('#close-door').onclick = function () {
  document.querySelector('.right-door').style.marginLeft = '0';
}



// ------------1 поверх--------------
document.querySelector('#first').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 17 + 'px';
}
// ------------2 поверх--------------
document.querySelector('#two').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 226 + 'px';
}
// ------------3 поверх--------------
document.querySelector('#third').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 433 + 'px';
}
// ------------4 поверх--------------
document.querySelector('#four').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 638 + 'px';
}
// ------------5 поверх--------------
document.querySelector('#five').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 843 + 'px';
}

// ------------1 поверх--------------
document.querySelector('#oneButton').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 17 + 'px';
}
// ------------2 поверх--------------
document.querySelector('#twoButton').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 226 + 'px';
}
// ------------3 поверх--------------
document.querySelector('#threeButton').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 433 + 'px';
}
// ------------4 поверх--------------
document.querySelector('#fourButton').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 638 + 'px';
}
// ------------5 поверх--------------
document.querySelector('#fiveButton').onclick = function () {
  document.querySelector('.elevator').style.marginBottom = 843 + 'px';
}
