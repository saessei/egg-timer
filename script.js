import { Timer } from "./components/timer.js";
import { useTimer, stopTimer } from "./components/useTimer.js";
import { Header } from "./components/header.js";

document.addEventListener("DOMContentLoaded", () => {
  let selectedEgg = null;

  const startBtn = document.getElementById("startBtn");

  const appDiv = document.querySelector(".app");
  appDiv.innerHTML = Header()
  
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href = "menu.html";
    });
  }

  function getEggSettings(type) {
    switch (type) {
      case "softBoiled":
        return { time: 300, label: "Soft Boiled Egg" };
      case "hardBoiled":
        return { time: 600, label: "Hard Boiled Egg" };
      case "friedEgg":
        return { time: 240, label: "Fried Egg" };
      case "scrambled":
        return { time: 180, label: "Scrambled Egg" };
      default:
        return null;
    }
  }

  function showTimerPage(eggSettings) {
    const container = document.querySelector(".landing-page");

    container.innerHTML = Timer({
      seconds: eggSettings.time,
      label: eggSettings.label,
    });

    const startBtn = document.getElementById("startTimer");
    const stopBtn = document.getElementById("stopTimer");

    startBtn.addEventListener("click", () => {
      useTimer(eggSettings.time);
    });

    stopBtn.addEventListener("click", () => {
      stopTimer();
    });

    document.getElementById("startTimer").addEventListener("click", () => {
      useTimer(eggSettings.time);
    });
  }

  const eggButtons = document.querySelectorAll(".egg-btn");
  const nextBtn = document.getElementById("nextBtn");

  eggButtons.forEach((button) => {
    button.addEventListener("click", () => {
      eggButtons.forEach((btn) => {
        const img = btn.querySelector("img");
        img.src = img.dataset.disabled;
        btn.classList.remove("selected");
      });

      const img = button.querySelector("img");
      img.src = img.dataset.active;
      button.classList.add("selected");

      selectedEgg = button.id;
      nextBtn.disabled = false;
    });
  });

  nextBtn.addEventListener("click", () => {
    if (!selectedEgg) return;

    const eggSettings = getEggSettings(selectedEgg);
    showTimerPage(eggSettings);
  });

  document.getElementById("startTimer").addEventListener("click", () => {
    useTimer(eggSettings.time);
  });

  document.getElementById("stopTimer").addEventListener("click", () => {
    stopTimer();
  });
});
