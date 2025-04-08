navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    document.getElementById('webcam').srcObject = stream;
  })
  .catch(err => {
    console.error("Caméra inaccessible :", err);
  });

document.getElementById('explore-btn').addEventListener('click', () => {
  alert("Un ancien fragment vous est révélé...");
});
