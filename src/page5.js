function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// เพิ่มตัวแปร global เพื่อเก็บค่า CSS display ของ div content
var contentDisplayState = {}; // เราจะใช้ object ในการเก็บค่าเพื่อให้รองรับหลายรายวิชา

// ฟังก์ชันซ่อนหรือแสดงรายวิชา
function hideContent(contentId) {
    var content = document.getElementById(contentId);
    
    // ตรวจสอบว่าเราเคยบันทึกค่า CSS display ไว้แล้วหรือยัง
    if (typeof contentDisplayState[contentId] === 'undefined') {
        // ถ้ายังไม่เคยบันทึกค่า CSS display ให้บันทึกค่าปัจจุบัน
        contentDisplayState[contentId] = window.getComputedStyle(content).getPropertyValue('display');
    }
    
    // เปลี่ยนค่า CSS display เพื่อแสดง div content หรือซ่อนไว้
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = contentDisplayState[contentId]; // เรียกคืนค่า CSS display
    } else {
        content.style.display = 'none';
    }
    
    closePopup(); // ปิด Popup หลังจากที่เลือกรายวิชา
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

// Playlist-order
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