document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const rocket = document.querySelector('#follow');
  const rocketRect = rocket.getBoundingClientRect();

  const rocketCenterX = rocketRect.width / 2;
  const rocketCenterY = rocketRect.height / 2;

  const noseX = rocketRect.width * 0.2; // adjust this value to change the nose position
  const noseY = rocketRect.height * 0.5; // adjust this value to change the nose position

  const angle = Math.atan2(y - rocketRect.top - noseY, x - rocketRect.left - noseX) * 180 / Math.PI;

  setTimeout(() => {
    rocket.style.transform = `translate(${x - noseX}px, ${y - noseY}px) rotate(${angle}deg)`;
  }, 400);
});