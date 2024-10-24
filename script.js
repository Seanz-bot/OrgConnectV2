// script.js

const dropdownBtn = document.querySelector('.dropdown button');
const dropdownContent = document.querySelector('.dropdown .content');

dropdownBtn.addEventListener('click', function() {

    dropdownBtn.classList.toggle('animate');

    dropdownBtn.classList.toggle('clicked');
  // Toggle the visibility of the dropdown content
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

  // Add/remove the 'active' class to style the button when it's clicked
  dropdownBtn.classList.toggle('active');
});

// Optional: Close the dropdown if clicking outside of it
window.addEventListener('click', function(e) {
  if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
    dropdownBtn.classList.remove('active');
  }
});
