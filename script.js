import { Timer } from "./components/timer.js";
import { useTimer, stopTimer, resetTimer } from "./components/useTimer.js";

document.addEventListener("DOMContentLoaded", () => {
  let selectedEgg = null;
  let currentPage = "choose";

  const landingPage = document.querySelector(".landing-page");
  const btnContainer = document.querySelector(".btn-container");

  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href = "menu.html";
    });
  }

  let nextBtn = document.getElementById("nextBtn");
  if (!nextBtn && btnContainer) {
    btnContainer.innerHTML = '<button id="nextBtn" class="nextBtn" disabled>Next</button>';
    nextBtn = document.getElementById("nextBtn");
  }
  
  if (!nextBtn) return; 
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

  const chooseEggHTML = landingPage.innerHTML;

  // Timer page
  function showTimerPage(eggSettings) {
    resetTimer(); // Reset timer when switching eggs
    
    landingPage.innerHTML = Timer({
      seconds: eggSettings.time,
      label: eggSettings.label,
    });

    currentPage = "timer";
    nextBtn.textContent = "Back";
    nextBtn.disabled = false;

    const startTimerBtn = document.getElementById("startTimer");
    const stopTimerBtn = document.getElementById("stopTimer");

    const newStartBtn = startTimerBtn.cloneNode(true);
    const newStopBtn = stopTimerBtn.cloneNode(true);
    startTimerBtn.parentNode.replaceChild(newStartBtn, startTimerBtn);
    stopTimerBtn.parentNode.replaceChild(newStopBtn, stopTimerBtn);

    newStartBtn.addEventListener("click", () => {
      useTimer(eggSettings.time);
    });

    newStopBtn.addEventListener("click", () => {
      stopTimer();
    });
  }

  // Egg buttons selection
  function bindEggButtons() {
    const eggButtons = document.querySelectorAll(".egg-btn");

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
  }

  bindEggButtons();

  nextBtn.addEventListener("click", () => {
    if (currentPage === "choose") {
      if (!selectedEgg) return;

      const eggSettings = getEggSettings(selectedEgg);
      showTimerPage(eggSettings);
    } else {
      stopTimer();

      landingPage.innerHTML = chooseEggHTML;

      currentPage = "choose";
      nextBtn.textContent = "Next";
      nextBtn.disabled = true;
      selectedEgg = null;

      bindEggButtons();
    }
  });
});
