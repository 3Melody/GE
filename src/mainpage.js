const eyeopen = document.querySelector('#eyeopen');
const eyeclose = document.querySelector('#eyeclose');

var x = 0;

eyeopen.addEventListener('click', () => {
    if (x % 2 == 0) {
        eyeclose.style.display = 'none';
        eyeopen.src = "image/mainpage/eyeclose.svg";
        
    } else {
        eyeopen.src = "image/mainpage/eyeopen.svg";
        eyeclose.style.display = 'flex';
    }
    x++;
});