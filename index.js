// Your code here
const dodger = document.getElementById('dodger');
    dodger.style.backgroundColor = '#FF69B4';
    dodger.style.bottom = '0px';
//    dodger.style.left = '0px';

document.addEventListener('keydown', function (event) {
    console.log(event);
});

//to the left
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

//to the right
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}
//up
// document.addEventListener('keydown', function(e) {
//   if (e.key === "ArrowUp") {
//     moveDodgerUp();
//   }
// });

// function moveDodgerUp() {
//   const leftNumbers = dodger.style.left.replace('px',2);
//   const left = parseInt('',2);
    
//     if (left = 38) {
//       dodger.style.left = `${left + 5}px`;
//   }
// }