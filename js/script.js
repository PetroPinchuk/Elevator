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

// // ----------------------------------------------------------------


let elevator = document.querySelector('.elevator');
let buttonFromPanel = document.querySelector('.button-block');
let arrow = document.querySelector('.arrow');
let floorsNumber = document.querySelector('.number').childNodes[0];

// console.log(floorsNumber);


let first = 17;
let second = 226;
let third = 433;
let four = 638;
let five = 843;

let currentFloor = 17;

function openTheDoor(numberOfTheFloor) {
  document.querySelector('.right-door').style.marginLeft = '120px';
  setTimeout(function() {
      arrow.style.backgroundImage = 'url("./img/inactive.png")';
      if (numberOfTheFloor == first) {
        floorsNumber.innerText = '1';
      } else if (numberOfTheFloor == second) {
        floorsNumber.innerText = '2';
      } else if (numberOfTheFloor == third) {
        floorsNumber.innerText = '3';
      } else if (numberOfTheFloor == four) {
        floorsNumber.innerText = '4';
      } else if (numberOfTheFloor == five) {
        floorsNumber.innerText = '5';
      }
  }, 2000);
  return true;
}
function closeTheDoor() {
  document.querySelector('.right-door').style.marginLeft = '0';
  return true;
}
function moveUpMoveDown(pixels) {
  elevator.style.marginBottom = pixels + 'px';
  currentFloor = pixels;
  return pixels;
}
function activeDownArrow() {
  arrow.style.backgroundImage = 'url("./img/active_down.png")';

}
function activeUpArrow() {
  arrow.style.backgroundImage = 'url("./img/active_up.png")';
}
function activeBlackArrow() {
 arrow.style.backgroundImage='url("./img/inactive.png")';
}


function DownArrowAnimation() {
  activeDownArrow();
  setTimeout(activeBlackArrow, 500);
}
setInterval(DownArrowAnimation,1000);




buttonFromPanel.onclick = function (e) {
  console.log(e.target.id);
  // console.log(moveUpMoveDown);
  if (e.target.id == 'first') {
    closeTheDoor();
    if (currentFloor > first) {
      activeDownArrow();
    } else if (currentFloor == first) {
      activeUpArrow();
    }
    setTimeout(function() {
        moveUpMoveDown(first);
    }, 2000);
    setTimeout(function () {
      openTheDoor(first);
    }, 4000);
  } else if (e.target.id == 'two') {
    closeTheDoor();
    if (currentFloor > second) {
      activeDownArrow();
    } else if (currentFloor < second) {
      activeUpArrow();
    }
    setTimeout(function() {
        moveUpMoveDown(second);
    }, 2000);
    setTimeout(function () {
      openTheDoor(second);
    }, 4000);
  } else if (e.target.id == 'third') {
    closeTheDoor();
    if (currentFloor > third) {
      activeDownArrow();
    } else if (currentFloor < third) {
      activeUpArrow();
    }
    setTimeout(function() {
        moveUpMoveDown(third);
    }, 2000);
    setTimeout(function () {
      openTheDoor(third);
    }, 4000);
  } else if (e.target.id == 'four') {
    closeTheDoor();
    if (currentFloor > four) {
      activeDownArrow();
    } else if (currentFloor < four) {
      activeUpArrow();
    }
    setTimeout(function() {
        moveUpMoveDown(four);
    }, 2000);
    setTimeout(function () {
      openTheDoor(four);
    }, 4000);
  } else if (e.target.id == 'five') {
    closeTheDoor();
    if (currentFloor == five) {
      activeDownArrow();
    } else if (currentFloor < five) {
      activeUpArrow();
    }
    setTimeout(function() {
        moveUpMoveDown(five);
    }, 2000);
    setTimeout(function () {
      openTheDoor(five);
    }, 4000);
  }
};
