function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
// ฟังก์ชันซ่อนหรือแสดงรายวิชา
function hideContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
    closePopup();
}
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        dropdown.style.top = "0";
        dropdown.style.right = "0";
    } else {
        dropdown.style.display = "none";
        dropdown.style.top = "0";
        dropdown.style.right = "0";
    }
}

let draggedElement = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    draggedElement = event.target;
}

function drop(event) {
    event.preventDefault();
    if (draggedElement && event.target.classList.contains('subject-content')) {
        const droppedElement = event.target;
        const container = droppedElement.parentNode;
        
        // ดึงค่า index ของ draggedElement และ droppedElement
        const draggedIndex = Array.from(container.children).indexOf(draggedElement);
        const droppedIndex = Array.from(container.children).indexOf(droppedElement);
        
        // สลับตำแหน่งของ draggedElement และ droppedElement
        if (draggedIndex !== -1 && droppedIndex !== -1) {
            if (draggedIndex <= droppedIndex) {
                container.insertBefore(draggedElement, droppedElement.nextSibling);
            } else {
                container.insertBefore(draggedElement, droppedElement);
            }
        }
    }
    draggedElement = null;
}

