const second = document.querySelector('.second-2');
const circleEl = document.getElementById('ss');
const startBtn = document.querySelector('.timer-btn');
let futher = '';
let stopCount = true;
let x = null; // Declare x globally
let time = 10
let count =time
 
function startCount() {
  x = setInterval(() => {
    count--
    if (count <= 0) {
      clearInterval(x); // Stop the interval when the countdown is done
      count=time
      console.log('Countdown completed');
    }
    second.innerHTML=`${count}`
  }, 1000);
}

startBtn.addEventListener('click', () => {
  stopCount = !stopCount;
  if (stopCount) {
    clearInterval(x); // Stop the interval when toggled off
    startBtn.innerHTML=`start`
  } else {
    startCount(); // Start the interval when toggled on
    startBtn.innerHTML=`stop`
  }
});
