import { Timer } from "./components/timer.js";
import { useTimer, stopTimer } from "./components/useTimer.js";
import { Header } from "./components/header.js";
import { Button } from "./components/button.js";

document.addEventListener("DOMContentLoaded", () => {
  let selectedEgg = null;
  let currentPage = "choose";

  const startBtn = document.getElementById("startBtn");

  const appDiv = document.querySelector(".app");
  appDiv.innerHTML = Header();

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

  const btnContainer = document.querySelector(".btn-container");
  btnContainer.innerHTML = Button({
    id: "nextBtn",
    text: "Next",
    className: "nextBtn",
    disabled: true,
  });

  const nextBtn = document.getElementById("nextBtn");
  const landingPage = document.querySelector(".landing-page");

  const chooseEggHTML = landingPage.innerHTML;

  function showTimerPage(eggSettings) {
    landingPage.innerHTML = Timer({
      seconds: eggSettings.time,
      label: eggSettings.label,
    });

    currentPage = "timer";

    nextBtn.textContent = "Back";
    nextBtn.disabled = false;

    const startBtn = document.getElementById("startTimer");
    const stopBtn = document.getElementById("stopTimer");

    const newStartBtn = startBtn.cloneNode(true);
    const newStopBtn = stopBtn.cloneNode(true);
    startBtn.parentNode.replaceChild(newStartBtn, startBtn);
    stopBtn.parentNode.replaceChild(newStopBtn, stopBtn);

    newStartBtn.addEventListener("click", () => {
      useTimer(eggSettings.time);
    });

    newStopBtn.addEventListener("click", () => {
      stopTimer();
    });
  }

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
