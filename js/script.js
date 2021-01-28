// ------------Відкривання дверей--------------
document.querySelector('#open-door').onclick = openTheDoor;
// ------------Закривання дверей--------------
document.querySelector('#close-door').onclick = closeTheDoor;

let elevator = document.querySelector('.elevator');
let buttonFromPanel = document.querySelector('.button-block');
let arrow = document.querySelector('.arrow');
let floorsNumber = document.querySelector('.number').childNodes[0];
let floorsButton = document.querySelector('.floorButtons');
let first = 0;
let second = 209;
let third = 416;
let four = 621;
let five = 826;
let currentFloor = 0;
let interval;

function openTheDoor(numberOfTheFloor) {
  document.querySelector('.right-door').style.marginLeft = '120px';
      arrow.style.backgroundImage = 'url("./img/inactive.png")';
      clearInterval(interval);
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
  return true;
};

function closeTheDoor() {
  document.querySelector('.right-door').style.marginLeft = '0';
  return true;
};

function moveUpMoveDown(pixels) {
  elevator.style.marginBottom = pixels + 'px';
  currentFloor = pixels;
  return pixels;
};

function activeDownArrow() {
  arrow.style.backgroundImage = 'url("./img/active_down.png")';
};

function activeUpArrow() {
  arrow.style.backgroundImage = 'url("./img/active_up.png")';
};

function activeBlackArrow() {
  arrow.style.backgroundImage = 'url("./img/inactive.png")';
};

function arrowAnimation(arrow) {
  arrow();
  setTimeout(activeBlackArrow, 250);
};

function moveElevator(floor) {
    closeTheDoor();
    if (currentFloor > floor) {
      interval = setInterval(function () {
        arrowAnimation(activeDownArrow);
      }, 1000);
    } else if (currentFloor < floor) {
      interval = setInterval(function () {
        arrowAnimation(activeUpArrow);
      }, 1000);
    }
    setTimeout(function() {
        moveUpMoveDown(floor);
    }, 2000);
    setTimeout(function () {
      openTheDoor(floor);
    }, 4000);
};

buttonFromPanel.onclick = function (e) {
  let tId = e.target.id;
  if (tId == 'first') {
    moveElevator(first);
  } else if (tId == 'two') {
    moveElevator(second);
  } else if (tId == 'third') {
    moveElevator(third);
  } else if (tId == 'four') {
    moveElevator(four);
  } else if (tId == 'five') {
    moveElevator(five);
  }
};

floorsButton.onclick = function (e) {
  let tId = e.target.id;
  if (tId == 'oneButton') {
    moveElevator(first);
  } else if (tId == 'twoButton') {
    moveElevator(second);
  } else if (tId == 'threeButton') {
    moveElevator(third);
  } else if (tId == 'fourButton') {
    moveElevator(four);
  } else if (tId == 'fiveButton') {
    moveElevator(five);
  }
};
