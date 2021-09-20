// Your code here

const dodger = document.getElementById("dodger");
//"grabs" the DODGER (I love that verb, haha)

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
          
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
      // moves the DODGER to the left
    }}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    //moves the DODGER to the right
  }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
      //moves DODGER to the left if the "event" is the Left Arrow Key
    }
    else if (e.key === "ArrowRight"){
        moveDodgerRight();
        //moves DODGER to the right if the "event" is the Right Arrow key
    }
});