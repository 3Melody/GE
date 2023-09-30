// ฟังก์ชันเปิด Popup
function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// ฟังก์ชันปิด Popup
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
    closePopup(); // ปิด Popup หลังจากที่เลือกรายวิชา
}
// JavaScript สำหรับเปิด/ปิด Dropdown เมื่อคลิกปุ่ม "ซ่อนรายวิชา"
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        dropdown.style.top = "0"; // เปลี่ยน top เพื่อให้ Popup อยู่ด้านบนของปุ่ม
        dropdown.style.right = "0"; // เพิ่ม right เพื่อให้ Popup อยู่ด้านขวาของปุ่ม
    } else {
        dropdown.style.display = "none";
        dropdown.style.top = "0"; // เปลี่ยน top เพื่อให้ Popup อยู่ด้านบนของปุ่ม
        dropdown.style.right = "0"; // เพิ่ม right เพื่อให้ Popup อยู่ด้านขวาของปุ่ม
    }
}








