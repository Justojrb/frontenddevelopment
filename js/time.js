const display = document.getElementById("timePanel");
let seconds = 0;

function pad(value) {
  return String(value).padStart(2, "0");
}

function beep() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.value = 440;
  gain.gain.value = 0.05;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.2);
}

function updateTimer() {
  seconds += 1;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

  if (seconds % 600 === 0) {
    beep();
  }
}

updateTimer();
setInterval(updateTimer, 1000);