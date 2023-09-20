const openChatBtn = document.querySelector('.openChatBtn');
const chatPopup = document.querySelector('.chatPopup');
const createGroupBtn = document.querySelector('.createGroupBtn');

// Function to toggle the chat popup
function toggleChatPopup() {
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
}

openChatBtn.addEventListener('click', toggleChatPopup);

// Example: Handle create group button click
createGroupBtn.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

// Close the chat popup when clicking outside of it
document.addEventListener('click', (event) => {
    if (!chatPopup.contains(event.target) && event.target !== openChatBtn) {
        chatPopup.style.display = 'none';
    }
});

        // Select all elements with the class "colorChangeButton"
        const colorChangeButtons = document.querySelectorAll('.colorChangeButton');

        // Add a click event listener to each button
        colorChangeButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('clicked')) {
                    button.style.backgroundColor = '#007BFF'; // Reset color
                    button.textContent = 'เพิ่มเข้ากลุ่ม'; // Reset text
                    button.classList.remove('clicked');
                } else {
                    button.style.backgroundColor = '#E4E4E4'; // Change color
                    button.textContent = 'เพิ่มเข้ากลุ่มแล้ว!'; // Change text
                    button.classList.add('clicked');
                }
            });
        });
        const starIcon = document.getElementById("star");

        starIcon.addEventListener("click", function() {
            starIcon.classList.toggle("star-clicked");
        });
        const popupIcon = document.getElementById('popupIcon');
        const popup = document.getElementById('popup');
        const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');
        function togglepopup() {
            popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
        }
        
        popupIcon.addEventListener('click', togglepopup);
        
        yesButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });
        
        noButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });
        
        const dropdownIcons = document.querySelectorAll('.dropdown-icon');
        const dropdownContents = document.querySelectorAll('.dropdown-content');
        
        dropdownIcons.forEach((icon, index) => {
            icon.addEventListener('click', () => {
                dropdownContents[index].classList.toggle('open');
            });
        });
        
        // Close the dropdown when clicking outside of any dropdown
        document.addEventListener('click', (event) => {
            let isOutsideDropdown = true;
        
            dropdownIcons.forEach((icon, index) => {
                if (icon.contains(event.target) || dropdownContents[index].contains(event.target)) {
                    isOutsideDropdown = false;
                }
            });
        
            if (isOutsideDropdown) {
                dropdownContents.forEach(content => {
                    content.classList.remove('open');
                });
            }
        });

               
        
        