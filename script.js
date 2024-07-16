const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let endTime = 0;
let running = false;

startButton.addEventListener('click', () => {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const hours = Math.floor(timeElapsed / 3600000);
      const minutes = Math.floor((timeElapsed % 3600000) / 60000);
      const seconds = Math.floor((timeElapsed % 60000) / 1000);
      const milliseconds = timeElapsed % 1000;

      document.getElementById('hr').innerHTML = hours.toString().padStart(2, '0');
      document.getElementById('min').innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById('sec').innerHTML = seconds.toString().padStart(2, '0');
      document.getElementById('msec').innerHTML = milliseconds.toString().padStart(3, '0');
    }, 10);
  }
});

stopButton.addEventListener('click', () => {
  if (running) {
    endTime = new Date().getTime();
    running = false;
    clearInterval(interval);
  }
});

resetButton.addEventListener('click', () => {
  startTime = 0;
  endTime = 0;
  running = false;
  clearInterval(interval);
  document.getElementById('hr').innerHTML = '00';
  document.getElementById('min').innerHTML = '00';
  document.getElementById('sec').innerHTML = '00';
  document.getElementById('msec').innerHTML = '000';
});