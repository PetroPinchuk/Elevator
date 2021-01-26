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


// ------------Відкривання дверей--------------
document.querySelector('#open-door').onclick = function () {
  document.querySelector('.right-door').style.marginLeft = '120px';
}
// ------------Закривання дверей--------------
document.querySelector('#close-door').onclick = function () {
  document.querySelector('.right-door').style.marginLeft = '0';
}

// ----------------------------------------------------------------


let elevator = document.querySelector('.elevator');
let buttonFromPanel = document.querySelector('.button-block');

function openTheDoor() {
  document.querySelector('.right-door').style.marginLeft = '120px';
  return true;
}
function closeTheDoor() {
  document.querySelector('.right-door').style.marginLeft = '0';
  return true;
}
function moveUpMoveDown(x) {
  elevator.style.marginBottom = x + 'px';
}


buttonFromPanel.onclick = function (e) {
  console.log(e.target.id);
  if (e.target.id == 'first') {
    closeTheDoor();
    setTimeout(function() {
        moveUpMoveDown(17);
    }, 2000);
    setTimeout(openTheDoor, 4000);
  } else if (e.target.id == 'two') {
    closeTheDoor();
    setTimeout(function() {
        moveUpMoveDown(226);
    }, 2000);
    setTimeout(openTheDoor, 4000);
  } else if (e.target.id == 'third') {
    closeTheDoor();
    setTimeout(function() {
        moveUpMoveDown(433);
    }, 2000);
    setTimeout(openTheDoor, 4000);
  } else if (e.target.id == 'four') {
    closeTheDoor();
    setTimeout(function() {
        moveUpMoveDown(638);
    }, 2000);
    setTimeout(openTheDoor, 4000);
  } else if (e.target.id == 'five') {
    closeTheDoor();
    setTimeout(function() {
        moveUpMoveDown(843);
    }, 2000);
    setTimeout(openTheDoor, 4000);
  }
};
