import { Label } from '../components/label.js';

export function Timer({ label }) {
  return `
      <div class="timer">
      ${Label({ text: label  })}
      <p id="timer-display" class="timer">00:00</p>
      <button id="startTimer" class="startBtn">Start</button>
      <button id="stopTimer" class="startBtn" disabled>Stop</button>
    </div>
  `;
}
