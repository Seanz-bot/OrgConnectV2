// Filter functionality
const filterBtn = document.querySelector('.filter-btn');
const filterOptions = document.querySelector('.filter-options');
const filterAcademic = document.querySelector('.filter-option:nth-child(1)');
const filterNonAcademic = document.querySelector('.filter-option:nth-child(2)');

// Initially hide the filter options
filterOptions.style.display = 'none';

filterBtn.addEventListener('click', function() {
    // Toggle the display of filter options
    filterOptions.style.display = filterOptions.style.display === 'none' ? 'inline-block' : 'none';
});

let currentFilter = null;

function filterCards(filter) {
    const cards = document.querySelectorAll('.card');
    
    if (currentFilter === filter) {
        // If the same filter is clicked again, reset the view
        cards.forEach(card => {
            card.style.display = 'flex';
        });
        currentFilter = null;
    } else {
        cards.forEach(card => {
            if (filter === card.getAttribute('data-category')) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        currentFilter = filter;
    }
}

filterAcademic.addEventListener('click', function() {
    filterCards('academic');
});

filterNonAcademic.addEventListener('click', function() {
    filterCards('non-academic');
});

// Sidebar navigation (example redirects)
document.querySelector('.home-icon').addEventListener('click', function() {
    window.location.href = 'landingpage.html'; // Redirect to home page
});

document.querySelector('.user-icon').addEventListener('click', function() {
    window.location.href = 'profile.html'; // Redirect to user profile
});

document.querySelector('.heart-icon').addEventListener('click', function() {
    alert('Feature coming soon!'); // Example alert for future feature
});

document.querySelector('.bell-icon').addEventListener('click', function() {
    alert('No new notifications'); // Example alert for notifications
});


// Add this to your existing JavaScript file
//Search functionality

document.querySelector('.search-bar input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const orgName = card.querySelector('.organization-name').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        if (orgName.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});
