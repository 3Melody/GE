const dropdown = document.querySelector('.dropdown-aboutme');
const dropdownid = document.querySelector('#id-dropdown-aboutme');


dropdownid.addEventListener('click', () => {
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!dropdownid.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

const dropdownservice = document.querySelector('.service-system');
const dropdownserviceid = document.querySelector('#id-dropdown-service');

dropdownserviceid.addEventListener('click', () => {
    if (dropdownservice.style.display === 'none') {
        dropdownservice.style.display = 'block';
    } else {
        dropdownservice.style.display = 'none';
    }
}); 

document.addEventListener('click', function (event) {
    if (!dropdownserviceid.contains(event.target) && !dropdownservice.contains(event.target)) {
        dropdownservice.style.display = 'none';
    }
});