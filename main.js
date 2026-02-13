onload = () =>{
        document.body.classList.remove("container");
};
function createHeart() {
  const container = document.querySelector('.heart-container');
  const heart = document.createElement('div');
  
  heart.classList.add('floating-heart');
  
  // Randomize position and size
  const startPos = Math.random() * 100;
  const size = Math.random() * 15 + 10;
  const duration = Math.random() * 5 + 7;
  
  heart.style.left = startPos + '%';
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.animationDuration = duration + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.2;

  container.appendChild(heart);

  // Remove heart after animation ends to save memory
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Generate a new heart every 400ms
setInterval(createHeart, 400);