// This Code will handle menu toggle and close (hamburger meny)
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');
const closeButton = document.getElementById('close-button');

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.add('active-sidebar');
    content.classList.add('active-content');
    hamburgerMenu.style.display = 'none'; // Hide hamburger menu
    closeButton.style.display = 'block'; // Show close button
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active-sidebar');
    content.classList.remove('active-content');
    hamburgerMenu.style.display = 'block'; // Show hamburger menu
    closeButton.style.display = 'none'; // Hide close button
});







// document.addEventListener('DOMContentLoaded', function () {
//     const callButtons = document.querySelectorAll('.call-button');

//     // Function to initiate a phone call when the button is clicked
//     function initiateCall(event) {
//         const phoneNumber = event.currentTarget.getAttribute('data-phone');
//         if (phoneNumber) {
//             window.location.href = '+91' + phoneNumber;
//         }
//     }

//     // Add click event listeners to call buttons
//     callButtons.forEach(function (button) {
//         button.addEventListener('click', initiateCall);
//     });
// });







// ----------------------------------------------------------------
// JavaScript for banner slider or hero section banner slider
// code for hero
const first = () => {
    document.getElementById("slide").src = "https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
};
setInterval(first, 4000);
  
const second = () => {
    document.getElementById("slide").src = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
};
setInterval(second, 9000);
  
const third = () => {
    document.getElementById("slide").src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
};
setInterval(third, 12000);
  
const fourth = () => {
    document.getElementById("slide").src = "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";
};
setInterval(fourth, 15000);

const fifth = () => {
    document.getElementById("slide").src = "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80";
};
setInterval(fifth, 19000);




// ------------------------------------------------------------------------
// JavaScript for search functionality
const searchInput = document.getElementById('search-input');
const serviceCards = document.querySelectorAll('.service-card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    serviceCards.forEach((card) => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        // Check if the title or description contains the search term
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block'; // Display matching card
        } else {
            card.style.display = 'none'; // Hide non-matching card
        }
    });
});
