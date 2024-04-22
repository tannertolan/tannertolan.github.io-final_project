// charity_profile.js

// Add event listener to "Volunteer Now" button
document.addEventListener('DOMContentLoaded', function() {
    const volunteerBtn = document.getElementById('volunteerBtn');
    volunteerBtn.addEventListener('click', function() {
        // Show volunteer form
        document.getElementById('volunteerForm').style.display = 'block';
        // Hide "Volunteer Now" button
        volunteerBtn.style.display = 'none';
    });

    // Example of enhancing interactivity
    const charityInfo = document.querySelector('.charity-info');
    charityInfo.addEventListener('mouseover', function() {
        // Change background color on hover
        charityInfo.style.backgroundColor = '#f8f8f8';
    });
    charityInfo.addEventListener('mouseout', function() {
        // Revert background color on mouseout
        charityInfo.style.backgroundColor = '#fff';
    });
});
