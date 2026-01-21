import { Timer } from "../components/timer.js";

export default {
    title: 'Timer'
}

export const Default = () => {
    const div = document.createElement('div');
    div.innerHTML = Timer({ label: 'Soft Boile Egg'});
    return div;
};


export const Running = () => {
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="timer">
      <p class="label">Soft Boiled Egg</p>
      <p id="timer-display" class="timer">67:67</p>
      <button class="startBtn" disabled>Start</button>
      <button class="startBtn">Stop</button>
    </div>
  `;
  return div;
};

export const Finished = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="timer">
      <p class="label">Soft Boiled Egg</p>
      <p id="timer-display" class="timer">Your egg is ready!</p>
      <button class="startBtn">Start</button>
      <button class="startBtn" disabled>Stop</button>
    </div>
  `;
  return div;
};

