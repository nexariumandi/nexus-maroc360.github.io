
// Placeholder JS for Anima Emotion Recognition
// Connect a real emotion AI backend here
const video = document.getElementById('video');
const result = document.getElementById('emotion-result');

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
});

setInterval(() => {
  result.textContent = "Émotion détectée : Divine";
}, 3000);
