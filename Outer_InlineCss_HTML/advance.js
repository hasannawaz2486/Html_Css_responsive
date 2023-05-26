// JavaScript code
var currentIndex = 0; // current index of the displayed image

var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

var images = document.querySelectorAll('.grid-item img');

// Event listeners for the navigation buttons
prevButton.addEventListener('click', function() {
  showImage(currentIndex - 1);
});

nextButton.addEventListener('click', function() {
  showImage(currentIndex + 1);
});

// Function to show the image at the given index
function showImage(index) {
  if (index >= 0 && index < images.length) {
    images[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
  }
}
