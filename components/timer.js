export function Timer({ label }) {
  return `
    <div class="timer">
      <h1 class="label">${label}</h1>
      <p id="timer-display" class="timer">00:00</p>
      <button id="startTimer" class="startBtn">Start</button>
      <button id="stopTimer" class="startBtn" disabled>Stop</button>
    </div>
  `;
}
