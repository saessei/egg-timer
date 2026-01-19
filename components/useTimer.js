let intervalId = null;
let isRunning = false;

export function useTimer(seconds) {
  const display = document.getElementById("timer-display");
  const startBtn = document.getElementById("startTimer");
  const stopBtn = document.getElementById("stopTimer");

  if (!display || !startBtn || !stopBtn) return; 
  if (isRunning) return;

  isRunning = true;
  startBtn.disabled = true;   
  if (stopBtn) stopBtn.disabled = false; 

  let remaining = seconds;
  update();

  intervalId = setInterval(() => {
    remaining--;
    update();

    if (remaining <= 0) {
      stopTimer();
      display.textContent = "Your egg is ready!";
    }
  }, 1000);

  function update() {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    display.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
  }
}

// Stop function
export function stopTimer() {
  if (!isRunning) return;

  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;

  const startBtn = document.getElementById("startTimer");
  const stopBtn = document.getElementById("stopTimer");

  if (startBtn) startBtn.disabled = false; 
  if (stopBtn) stopBtn.disabled = true;  
}
