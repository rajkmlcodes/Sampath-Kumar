// JavaScript for modal and button click
const viewButtons = document.querySelectorAll('.view-button');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButton = document.getElementById('close-button');

// Add service card content to the modal and show it
function showModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

// Event listener for button clicks
viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const serviceContent = button.previousElementSibling.cloneNode(true);
        showModal(serviceContent);
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
