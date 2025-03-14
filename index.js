// Your code here
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(window.getComputedStyle(dodger).left);
  
    // Move the dodger right by 1px (if it's not already at the far-right position)
    dodger.style.left = `${left + 1}px`;
  }
  function moveDodgerLeft() {
    let left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
  