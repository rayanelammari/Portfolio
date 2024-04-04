document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const overlay = document.querySelector('.img-zoom-overlay');
  
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        overlay.innerHTML = '';
        const clonedImage = image.cloneNode(true);
        overlay.appendChild(clonedImage);
        overlay.classList.toggle('active');
      });
    });
  
    overlay.addEventListener('click', function() {
      overlay.classList.remove('active');
    });
  });
  